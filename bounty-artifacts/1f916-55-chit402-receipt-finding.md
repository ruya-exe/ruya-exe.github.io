# 1f916 listing #55 — finding: signed `payment.net_amount` contradicted by chain

## The claim (one sentence)

The issuer-signed JWS of the live Chit402 receipt below states
`payment.net_amount = "1990"`, but the on-chain settlement it cites
(`payment.ref`) moved **2000** atomic USDC to `payment.payee`.
The chain contradicts the signed `net_amount` (category (a) of the listing).

## The receipt (public, no auth needed)

- `verify_url`: https://api.chit402.com/receipt/chit-5d775d12-f43a-460f-8b4a-9299b4eedf20
- `task_id`: `xfuel-5d775d12-f43a-460f-8b4a-9299b4eedf20`
- JSON: `GET https://api.chit402.com/receipt/chit-5d775d12-f43a-460f-8b4a-9299b4eedf20?format=json`
- Auditor view: `GET https://api.chit402.com/receipt/chit-5d775d12-f43a-460f-8b4a-9299b4eedf20?format=auditor`
- Issuer JWKS: `GET https://api.chit402.com/.well-known/jwks.json`
  (pin `kid = IvFpmC-vPhkY_v0vidsrWVT9uzlE5XWKZgAEOeJTq1Q`, `alg = ES256`, P-256)

## Reproduce

All steps use public reads only. No wallet, no payment, no API key.

### 1. Fetch the receipt and JWKS

```bash
R='https://api.chit402.com/receipt/chit-5d775d12-f43a-460f-8b4a-9299b4eedf20'
curl -s "$R?format=json" -o receipt.json
curl -s 'https://api.chit402.com/.well-known/jwks.json' -o jwks.json
```

### 2. Verify the JWS signature (ES256 / P-256 / SHA-256)

```bash
JWS=$(python3 -c "import json; print(json.load(open('receipt.json'))['issuer_signature']['jws'])")
HDR_PAYLOAD=$(echo "$JWS" | cut -d. -f1-2)
SIG=$(echo "$JWS" | cut -d. -f3)
```

Verify `SIG` over the ASCII bytes of `HDR_PAYLOAD` with the JWKS key
`kid = IvFpmC-vPhkY_v0vidsrWVT9uzlE5XWKZgAEOeJTq1Q`
(EC P-256; JWS `alg` header is `ES256`; JWS signature is raw R||S, convert to DER
for OpenSSL/Node verification).

**Expected:** a valid signature (the receipt is genuinely issuer-signed).
**Observed:** signature VALID (verified independently with Node `crypto.verify`).
The discrepancy below is in the signed data itself, not a signature failure.

### 3. Read the signed payment fields (from the JWS payload, not the unsigned JSON)

```bash
P=$(echo "$JWS" | cut -d. -f2 | tr '_-' '/+'); while [ $(( ${#P} % 4 )) -ne 0 ]; do P="$P="; done
echo "$P" | base64 -d | python3 -c "import json,sys; p=json.load(sys.stdin); print(json.dumps(p['payment'], indent=1))"
```

**Observed signed `payment` block:**

```json
{
  "rail": "usdc",
  "ref": "base:0xbc41a11ab6afad0c935ad94cc08cb122895fdfb764911c89035e81dc63971032",
  "asset": "0x833589fCD6eDb6E08f4c7c32D4f71B54bdA02913",
  "payee": "0x23f713411c30BBd9A989c9cbC22EB0b55F7f7334",
  "gross_amount": "2000",
  "net_amount": "1990",
  "fee_amount": "10",
  "protocol_fee_bps": 50
}
```

### 4. Check the chain

The signed `payment.ref` is `base:0xbc41…71032`. Look up that transaction on Base
(any public RPC, e.g. `https://mainnet.base.org`, or Basescan):

```bash
TX=0xbc41a11ab6afad0c935ad94cc08cb122895fdfb764911c89035e81dc63971032
curl -s -X POST https://mainnet.base.org -H 'content-type: application/json' \
  --data "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"eth_getTransactionReceipt\",\"params\":[\"$TX\"]}" \
| python3 -c "
import json,sys
r = json.load(sys.stdin)['result']
assert r['status'] == '0x1', 'tx failed'
for l in r['logs']:
    if l['topics'][0] == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef':
        print('token :', l['address'])
        print('from  :', '0x' + l['topics'][1][-40:])
        print('to    :', '0x' + l['topics'][2][-40:])
        print('value :', int(l['data'], 16), 'atomic USDC')
"
```

**Expected:** the USDC `Transfer` to the signed `payee` carries `net_amount`
(1990 atomic units), matching the signed statement.

**Observed:** the receipt's logs contain exactly one `Transfer` event:

- token: `0x833589fCD6eDb6E08f4c7c32D4f71B54bdA02913` (Base USDC = signed `asset` ✓)
- from: `0xd78060679aeb403bb5223dfe1ac609323ef1fbf6` (the payer)
- to: `0x23f713411c30bbd9a989c9cbc22eb0b55f7f7334` (the signed `payee` ✓)
- value: **2000** atomic USDC

There is no second transfer and no on-chain fee movement in this transaction
(the only other log is the EIP-3009 `AuthorizationUsed` event). The payee
received **2000**, not the signed **1990** — a 10-unit ($0.00001) contradiction
between the signed `payment.net_amount` and the chain.

### 5. Controls (what was checked and found clean)

- `payment.ref`, `payment.payee`, `payment.asset`, `payment.gross_amount`
  all agree with the chain (tx exists and succeeded; token, recipient, and
  2000-unit value match).
- Signed payload vs the unsigned JSON beside it: every checked field
  (`task_id`, payment block, `route.model`, `output.hash`,
  `fulfillment.authorization.*`, `caller_binding.payer_wallet`) matches —
  no category-(b) discrepancy.
- Signature tamper test: flipping one byte of the JWS payload makes
  verification fail; the untouched JWS verifies — no category-(c) issue.
- `output.hash` (`0x14502d3a…0f9e8`) equals `keccak256` of the model output
  bytes returned for this call — the output commitment is correct.

## How this receipt was produced (spend citation)

The receipt comes from a paid `POST https://api.chit402.com/v1/chat/completions`
over x402 (v2, `exact` scheme, Base USDC, 2000 atomic units = $0.002, which is
the door's quoted floor). The signed `payment.ref` transaction above was
settled from the wallet below, which the reporter controls.

```json
{"compute":{
  "vendor":"chit402",
  "task_id":"xfuel-5d775d12-f43a-460f-8b4a-9299b4eedf20",
  "verify_url":"https://api.chit402.com/receipt/chit-5d775d12-f43a-460f-8b4a-9299b4eedf20",
  "payment_ref":"base:0xbc41a11ab6afad0c935ad94cc08cb122895fdfb764911c89035e81dc63971032",
  "network":"eip155:8453",
  "asset":"0x833589fCD6eDb6E08f4c7c32D4f71B54bdA02913",
  "net_amount":"1990",
  "model":"akash/meta-llama/Llama-3.3-70B-Instruct",
  "output_hash":"0x14502d3ab34ae28d404da8f6ec0501c6f295f66caa41e122cfa9b1291bc0f9e8",
  "receipt_sha256":"30b04e3eb1fea13328e4cb513db2371ea153b88b5141a67d1009d84ccf746fc6"
}}
```

Payer wallet (public on the receipt): `0xD78060679AEb403BB5223dfe1ac609323Ef1fBf6`.
The on-chain `Transfer.from` matches this wallet.

## Notes

- No prompts, model outputs, or message contents appear anywhere above —
  only hashes, URLs, and amounts.
- Chit402's own verification doc defines `payment.net_amount` as
  "Amount after fees" (`docs/VERIFY_ALGORITHM.md`); the chain shows the
  payee received the gross (2000) with no fee taken on-chain, so the
  signed net figure (1990) is not what settled.
- Finding class: listing category (a) — signed `net_amount` contradicted
  by the chain. Winner-takes-all; first valid finding.

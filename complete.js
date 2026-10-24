exports.handler = async (e) => {
  const {paymentId, txid} = JSON.parse(e.body);
  const res = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
    method: 'POST',
    headers: { Authorization: `Key d2s1sbb8usqiatyw1ciyufexuvpctcn13tjicah2uoneyljvbuygb2hd2ul5oxwv`, 'Content-Type': 'application/json' },
    body: JSON.stringify({txid})
  });
  return {statusCode:200, body: await res.text()}
}
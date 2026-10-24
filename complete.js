exports.handler = async (event) => {
  const { paymentId, txid } = JSON.parse(event.body);
  const apiKey = process.env.PI_API_KEY;
  try {
    const res = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
      method: 'POST',
      headers: { 
        'Authorization': `Key ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txid })
    });
    const data = await res.text();
    return { statusCode: 200, body: data };
  } catch (e) {
    return { statusCode: 500, body: e.message };
  }
}

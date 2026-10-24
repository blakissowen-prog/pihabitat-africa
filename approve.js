exports.handler = async (event) => {
  try {
    const { paymentId } = JSON.parse(event.body);
    const res = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
      method: 'POST',
      headers: { 
        'Authorization': `Key VOTRE_CLE_API_PI`,
        'Content-Type': 'application/json'
      }
    });
    const data = await res.text();
    return { statusCode: 200, body: data };
  } catch (e) {
    return { statusCode: 500, body: e.message };
  }
}
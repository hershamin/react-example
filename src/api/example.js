
// Http GET test request
export const getTest = async () => {
  const result = await fetch(`${process.env.API_HOST}/get`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  const json = await result.json();
  return {
    userAgent: json.headers['User-Agent'],
  };
};

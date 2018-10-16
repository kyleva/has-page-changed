export default function getPageHtml(url) {
  const api = '/api/getPage';

  return fetch(api, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url
    })
  })
    .then(res => res.json())
    .then(res => res.html);
}

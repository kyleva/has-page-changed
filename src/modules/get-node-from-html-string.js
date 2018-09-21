const getNodeFromHtmlString = (htmlString, selector) => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlString, 'text/html');
  const node = dom.querySelector(selector);

  if (!node) return;

  return node.outerHTML;
};

export default getNodeFromHtmlString;

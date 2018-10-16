const selectorExistsInHtmlString = (htmlString, selector) => {
  if (!htmlString || !selector) return false;

  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlString, 'text/html');

  const elementsToCompareNodeList = dom.querySelectorAll(selector);
  const elementsToCompare = [].slice.call(elementsToCompareNodeList);

  if (elementsToCompare.length) return true;
  return false;
};

export default selectorExistsInHtmlString;

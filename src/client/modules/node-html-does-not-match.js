const nodeHtmlDoesNotMatch = (prevNodeHtml, newNodeHtml) => {
  if (prevNodeHtml === newNodeHtml) return false;
  if (!prevNodeHtml || !newNodeHtml) return true;

  const removeWhitespace = str => str.replace(/\s+/g, '');
  const prevNode = removeWhitespace(prevNodeHtml);
  const newNode = removeWhitespace(newNodeHtml);

  if (prevNode === newNode) return false;
  return true;
};

export default nodeHtmlDoesNotMatch;

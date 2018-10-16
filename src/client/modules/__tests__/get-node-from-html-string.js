import getNodeFromHtmlString from './../get-node-from-html-string';

let htmlString;

beforeAll(() => {
  htmlString =
    '<div class="parent-node"><div class="child-node">Words!</div></div>';
});

test('If node that matches provided selector is in html string return node html', () => {
  expect(getNodeFromHtmlString(htmlString, '.parent-node')).toBe(htmlString);
});

test('If a child node in provided html string exists return child node html', () => {
  expect(getNodeFromHtmlString(htmlString, '.child-node')).toBe(
    '<div class="child-node">Words!</div>'
  );
});

test('If node that matches provided selector is not in html string return falsy', () => {
  expect(getNodeFromHtmlString(htmlString, '.node-does-not-exist')).toBeFalsy();
});

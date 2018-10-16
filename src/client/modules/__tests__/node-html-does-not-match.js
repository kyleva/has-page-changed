import nodeHtmlDoesNotMatch from './../node-html-does-not-match';

let node1;
let node2;
let node3;

beforeAll(() => {
  node1 = '<div class="test-node">Node</div>';
  node2 = '<div class="test-node">Node</div>';
  node3 = '<div class="test-node">Node 3</div>';
});

test('If node html does not match return true', () => {
  expect(nodeHtmlDoesNotMatch(node1, node3)).toBe(true);
});

test('If node html does match return false', () => {
  expect(nodeHtmlDoesNotMatch(node1, node2)).toBe(false);
});

test('If node1 html does not exist return true', () => {
  expect(nodeHtmlDoesNotMatch(undefined, node2)).toBe(true);
});

test('If node2 html does not exist return true', () => {
  expect(nodeHtmlDoesNotMatch(node1, undefined)).toBe(true);
});

import selectorExistsInHtmlString from './../selector-exists-in-html-string';

let htmlString;

beforeAll(() => {
  htmlString = '<div class="test-class">Test div!</div>';
});

test('If selector exists in string return true', () => {
  expect(selectorExistsInHtmlString(htmlString, '.test-class')).toBe(true);
});

test('If selector does not exist in string return false', () => {
  expect(
    selectorExistsInHtmlString(htmlString, '.does-not-exist-in-string')
  ).toBe(false);
});

test('If selector does not exist return false', () => {
  expect(selectorExistsInHtmlString(htmlString, '')).toBe(false);
});

test('If html string does not exist return false', () => {
  expect(selectorExistsInHtmlString(undefined, '.test-class')).toBe(false);
});
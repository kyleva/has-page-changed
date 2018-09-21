const form = document.querySelector('.hasPageChanged-form');
const submit = form.querySelector('.hasPageChanged-submit');

import selectorExistsInHtmlString from './modules/selector-exists-in-html-string';

const cache = {
  selector: '',
  html: ''
};

submit.addEventListener('click', () => {
  const url = form.querySelector('[name="field-url"]').value;
  const selector = form.querySelector('[name="field-css-selector"]').value;

  getPageHtml(url).then(pageHtml => processPage(pageHtml, selector));
});

function processPage(html, selector) {
  if (selectorExistsInHtmlString(html, selector)) {
  } else {
    // validation
  }
}

function startCompare() {}

function compareNodeHtml() {}

function getPageHtml(url) {
  return fetch(url).then(res => res.text());
}

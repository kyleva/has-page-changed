import './styles.scss';

const form = document.querySelector('.hasPageChanged-form');
const submit = form.querySelector('.hasPageChanged-submit');

import interval from './modules/set-interval';

import processPage from './page/process';
import getPageHtml from './page/get-html';

import { validateForm } from './validation';

import { showLoader, hideLoader } from './loader';
import { hidePageChangedIndicator } from './page/changed-indicator';

submit.addEventListener('click', () => {
  interval.clear();
  hideLoader();
  hidePageChangedIndicator();

  if (!validateForm()) return;

  showLoader();

  const url = form.querySelector('[name="field-url"]').value;
  const selector = form.querySelector('[name="field-css-selector"]').value;

  getPageHtml(url).then(html =>
    processPage({
      url,
      selector,
      html
    })
  );
});

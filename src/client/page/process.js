import selectorExistsInHtmlString from '../modules/selector-exists-in-html-string';
import getNodeFromHtmlString from '../modules/get-node-from-html-string';

import interval from '../modules/set-interval';
import startCompare from '../compare/start';
import { createErrorMessage } from './../validation';

import { hideLoader } from './../loader';

export default function processPage(params) {
  if (selectorExistsInHtmlString(params.html, params.selector)) {
    interval.set(
      startCompare.bind(null, {
        selector: params.selector,
        html: getNodeFromHtmlString(params.html, params.selector),
        url: params.url
      })
    );
  } else {
    createErrorMessage(
      'Your provided CSS selector does not exist on the provided page.'
    );

    hideLoader();
  }
}

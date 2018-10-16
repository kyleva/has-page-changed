import getPageHtml from '../page/get-html';
import getNodeFromHtmlString from '../modules/get-node-from-html-string';
import interval from '../modules/set-interval';

import { hideLoader } from './../loader';

import { showPageChangedIndicator } from './../page/changed-indicator';

export default function startCompare(params) {
  getPageHtml(params.url).then(html => {
    const updatedNodeHtml = getNodeFromHtmlString(html, params.selector);
    if (updatedNodeHtml !== params.html) {
      interval.clear();
      hideLoader();
      showPageChangedIndicator(params.url);
    }
  });
}

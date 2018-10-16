const indicator = document.querySelector('.hasPageChanged-indicator');

export function showPageChangedIndicator(url) {
  const pageChangedIndicatorLink = indicator.querySelector(
    '[data-hook="page-url"]'
  );
  pageChangedIndicatorLink.innerHTML = `<a href="${url}">${url}</a>`;

  indicator.classList.add('is-visible');
}

export function hidePageChangedIndicator() {
  indicator.classList.remove('is-visible');
}

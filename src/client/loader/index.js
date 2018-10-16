const loader = document.querySelector('.hasPageChanged-loader');

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}

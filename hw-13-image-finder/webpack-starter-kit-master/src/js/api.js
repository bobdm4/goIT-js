import apiService from './apiService'
import itemListTemp from '../templ/item.hbs';

const refs = {
  searchForm: document.querySelector('#search_form'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('button[data-action="load_more"]')
};

refs.searchForm.addEventListener('submit', searchPhoto);
refs.loadMore.addEventListener('click', loadMoreBtn);
function searchPhoto(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.query.value;
  clearList();
  apiService.resetPage();
  apiService.searchQuery = inputValue;
  apiService.fetchImg().then(insertMarkup)
  refs.loadMore.classList.add('visibility')
}

function loadMoreBtn() {

  apiService.fetchImg().then(data => {
    insertMarkup(data)
    scroll()
  });
}

function scroll() {
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
}

function insertMarkup(items) {
  const markup = itemListTemp(items);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function buildMarkup(items) {
  return itemListTemp(items);
}

function clearList() {
  refs.gallery.innerHTML = '';
}


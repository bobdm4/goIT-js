import itemImg from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const lightbox = document.querySelector('.lightbox');
const modalImg = document.querySelector('.lightbox___image');


function createGallery(itemImg) {
    let fragment = document.createDocumentFragment();
    itemImg.forEach(el => {
        let li = document.createElement('li');
        li.className = 'gallery__item';
        let a = document.createElement('a');
        a.className = 'gallery__link';
        a.href = el.original;
        let img = document.createElement('img');
        img.className = 'gallery__image';
        img.setAttribute('src', el.preview);
        img.dataset.source = el.original;
        img.setAttribute('alt', el.description);
        let span = document.createElement('span');
        span.className = 'gallery__icon';
        let i = document.createElement('i');
        i.className = 'material-icons';
        i.textContent = 'zoom_out_map';
        span.append(i);
        a.append(img, span);
        li.append(a);
        fragment.append(li);
    });
    document.querySelector('.gallery').prepend(fragment);
}
createGallery(itemImg);

gallery.addEventListener('click', openModal);
lightbox.addEventListener('click', notImg, closeKey)
// lightbox.addEventListener('click', closeKey)

function openModal(e) {
    e.preventDefault()
    lightbox.classList.add('is-open');
    modalImg.src = e.target.dataset.source;
    window.addEventListener('keydown', closeKey)
}

function closeModal() {
    lightbox.classList.remove('is-open');
    modalImg.src = '';
    window.removeEventListener('keydown', closeKey)
}

function notImg(e) {
    if (e.target === modalImg) {
        return;
    }
    closeModal()
}

function closeKey(e) {
    if (e.code !== 'Escape') {
        return;
    }
    closeModal()
}
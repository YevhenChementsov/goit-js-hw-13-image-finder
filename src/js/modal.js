import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

export default function onOpenModalImage(event) {
  const isImgEl = event.target.classList.contains('gallery__image');
  if (!isImgEl) {
    return;
  }
  const largeImageURL = event.target.getAttribute('data-large-image-url');

  const instance = basicLightbox.create(
    `
    <img width="1024" height="768" src=${largeImageURL}>
  `,
  {
    onClose: () => {
      document.body.classList.remove('modal-open');
    },
  }
  );
  instance.show(document.body.classList.add('modal-open'));
  

  const escapeListener = event => {
    if (event.key === 'Escape') {
      instance.close();
      if (instance.close()) {
        window.removeEventListener('keyup', escapeListener);
      }
    }
  };

  window.addEventListener('keyup', escapeListener);
}
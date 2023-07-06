import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = galleryItems.map((image) => {
  return `<li class = "gallery__item"><a href="${image.original}" class = "gallery__link">
        <img class = "gallery__image" data-index="${image.original}" src="${image.preview}" alt="${image.description}"
  </a></li>`;
}).join('');

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener('click', showOriginalImage);

function showOriginalImage(event) {
    console.dir(event.target);
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = event.target.dataset.index;
    console.log(selectedImage);

    const instance = basicLightbox.create(`
    <img src = "${selectedImage}" >
`)
    instance.show()
    
    galleryList.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			instance.close()
		}
	})
}

console.log(galleryItems);

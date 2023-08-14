import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");

function createGallery() {
  const markupLiEl = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${preview}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`
    )
    .join("");
  ulEl.insertAdjacentHTML("beforeend", markupLiEl);

  ulEl.addEventListener("click", zoomItem);
}
createGallery();

function zoomItem(event) {
  event.preventDefault();
  for (const item of galleryItems) {
    if (event.target.getAttribute("src") === item.preview) {
      const instance = basicLightbox.create(`
            <img src="${item.original}" width="800" height="600">
        `);
      instance.show();
    }
    instance.close();
  }
}

const imagesContainer = document.querySelector(".images");
const imagesNumber = 24;
imagesContainer.innerHTML = "";

function getRandomImage() {
  const apiUrl = `https://api.unsplash.com//photos/random?client_id=iSjLUJ-JE_qHCNIaHiiswsoAZQJIECD2eyzy4Ikyrvw&count=24`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((images) => {
      console.log(images);
      images.forEach((image) => {
        const imageUrl = image.urls.regular;
        createImage(imageUrl);
      });
    })
    .catch((error) => console.log("error", error));
}

function createImage(imageUrl) {
  const image = document.createElement("img");
  image.src = imageUrl;
  imagesContainer.append(image);
}

getRandomImage();

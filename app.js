const imagesContainer = document.querySelector(".images");
const imagesNumber = 30;

async function getRandomImage() {
    const randomPage = Math.floor(Math.random() * (8000 / 50));
    const apiUrl = `https://api.pexels.com/v1/curated?page=${randomPage}&per_page=${imagesNumber}`;
    const authorizationKey = "563492ad6f917000010000012a5d103c1ece42d7b6f95b36df56a1fb";
    const requestOption = {
      method: "GET",
      headers: {
        Authorization: authorizationKey
      }
    }

    const response = await fetch(apiUrl,requestOption);
    const data = await response.json();
    const {photos} = data;

    photos.forEach(photo => {
      const imageUrl = photo.src.landscape;
      createImage(imageUrl)
  })
}

function createImage(imageUrl) {
  const image = document.createElement("img");
  image.src = imageUrl;
  imagesContainer.append(image);
}

getRandomImage();

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const choesnImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choesnImage}`;

bgImage.classList.add("background");

document.body.appendChild(bgImage);
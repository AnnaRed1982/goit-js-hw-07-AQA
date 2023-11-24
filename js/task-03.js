const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallerySelector = document.querySelector(".gallery");

gallerySelector.style.backgroundColor = "teal";
gallerySelector.style.display = "flex";
gallerySelector.style.flexDirection = "row";
gallerySelector.style.alignItems = "center";
gallerySelector.style.justifyContent = "center";
gallerySelector.style.gap = "10px";

const markup = images
  .map(
    ({ url, alt }) =>
      `<li><img src=${url} alt=${alt} width="300px" height="200px"/></li>`
  )
  .join("");

gallerySelector.innerHTML = markup;

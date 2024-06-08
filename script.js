let clickedImageSrc = '';
let clickedImageName = '';
let clickedImageOrigin = '';
const previewPane = document.getElementsByClassName("image-preview")[0];

document.addEventListener("click", function(event) {
    // Select the element
    const galleryItem = event.target;
    // Get the attribute values
    clickedImageSrc = galleryItem.getAttribute("src"); 
    clickedImageName = galleryItem.getAttribute("alt");
    clickedImageOrigin = galleryItem.nextElementSibling.querySelector("span").innerText;

    //displaing a prevew pane
    previewPane.style.display = "flex";


    let imageWrapper = previewPane.querySelector(".image-wrapper");
    let image = imageWrapper.querySelector("img");
    image.setAttribute("src",clickedImageSrc);
    let thumbNair = imageWrapper.querySelector("div");

    let thumbNairImg = thumbNair.querySelector("img");
    let thumbNairTitle = thumbNair.querySelector(".thumbnair-title").querySelector("h4");
    let thumbNairOrigin = thumbNair.querySelector(".thumbnair-title").querySelector("p");
    thumbNairImg.setAttribute("src",clickedImageSrc);
    thumbNairTitle.innerHTML = clickedImageName;
    thumbNairOrigin.innerHTML = clickedImageOrigin;
    if (previewPane.contains(event.target)) {
        previewPane.style.display = "none";
    }
});







const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById("lightboxCategory");
const imageCounter = document.getElementById("imageCounter");

const closeLightboxBtn = document.getElementById("closeLightbox");
const prevBtn = document.getElementById("prevImage");
const nextBtn = document.getElementById("nextImage");

let currentGallery = [];
let currentIndex = 0;



function openLightbox(images, index){

    currentGallery = images;

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}



function updateLightbox(){

    const image = currentGallery[currentIndex];

    lightboxImage.src = image.image;

    lightboxImage.alt = image.title;

    lightboxTitle.textContent = image.title;

    lightboxCategory.textContent =
        image.category.charAt(0).toUpperCase() +
        image.category.slice(1);

    imageCounter.textContent =
        `${currentIndex + 1} / ${currentGallery.length}`;

}



function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}



function nextImage(){

    currentIndex++;

    if(currentIndex >= currentGallery.length){

        currentIndex = 0;

    }

    updateLightbox();

}



function previousImage(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = currentGallery.length - 1;

    }

    updateLightbox();

}



nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", previousImage);

closeLightboxBtn.addEventListener("click", closeLightbox);



lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        closeLightbox();

    }

});



document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key === "Escape"){

        closeLightbox();

    }

    if(e.key === "ArrowRight"){

        nextImage();

    }

    if(e.key === "ArrowLeft"){

        previousImage();

    }

});



document.addEventListener("click",(e)=>{

    const button = e.target.closest(".view-btn");

    if(!button) return;

    const cards = filteredImages.slice(0,currentItems);

    const index = Number(button.dataset.index);

    openLightbox(cards,index);

});
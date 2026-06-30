

const galleryGrid = document.getElementById("galleryGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const sortSelect = document.querySelector(".sort-select select");

let currentItems = 8;
let filteredImages = [...galleryData];
let currentSort = "latest";



function sortGallery(images) {
    const list = [...images];

    if (currentSort === "popular") {
        return list.sort((a, b) => {
            const aFav = favorites.includes(a.id) ? 1 : 0;
            const bFav = favorites.includes(b.id) ? 1 : 0;
            if (aFav !== bFav) return bFav - aFav;
            return a.title.localeCompare(b.title);
        });
    }

    return list;
}

function renderGallery(images = filteredImages) {

    galleryGrid.innerHTML = "";

    const sortedImages = sortGallery(images);
    const visibleImages = sortedImages.slice(0, currentItems);

    visibleImages.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "gallery-card reveal";

        card.innerHTML = `

            <figure>

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy">

                <div class="gallery-overlay">

                    <span class="badge">
                        ${capitalize(item.category)}
                    </span>

                    <div class="gallery-icons">

                        <button
                            class="favorite-btn"
                            data-id="${item.id}">

                            <i class="ri-heart-line"></i>

                        </button>

                        <button
                            class="view-btn"
                            data-index="${index}">

                            <i class="ri-eye-line"></i>

                        </button>

                    </div>

                    <div class="gallery-content">

                        <h3>${item.title}</h3>

                        <p>${capitalize(item.category)} Collection</p>

                    </div>

                </div>

            </figure>

        `;

        galleryGrid.appendChild(card);

    });

    revealElements();
    updateFavoriteIcons();

}



function capitalize(word){

    return word.charAt(0).toUpperCase() + word.slice(1);

}



if(loadMoreBtn){

    loadMoreBtn.addEventListener("click",()=>{

        currentItems += 8;

        renderGallery(filteredImages);

        if(currentItems >= filteredImages.length){

            loadMoreBtn.style.display = "none";

        }

    });

}

if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderGallery(filteredImages);
    });
}



function resetGallery(images){

    filteredImages = images;

    currentItems = 8;

    loadMoreBtn.style.display = "inline-flex";

    renderGallery(filteredImages);

}



document.addEventListener("DOMContentLoaded",()=>{

    renderGallery();

});



function revealElements(){

    const cards = document.querySelectorAll(".reveal");

    cards.forEach(card=>{

        setTimeout(()=>{

            card.classList.add("active");

        },100);

    });

}
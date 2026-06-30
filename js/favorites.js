

const favoriteBtn = document.getElementById("favoriteToggle");

let favorites =
    JSON.parse(localStorage.getItem("monicaverse-favorites")) || [];



function saveFavorites() {

    localStorage.setItem(
        "monicaverse-favorites",
        JSON.stringify(favorites)
    );

}



function isFavorite(id) {

    return favorites.includes(id);

}



function toggleFavorite(id) {

    id = Number(id);

    if (isFavorite(id)) {

        favorites = favorites.filter(item => item !== id);

    } else {

        favorites.push(id);

    }

    saveFavorites();

    updateFavoriteIcons();

}



function updateFavoriteIcons() {

    document.querySelectorAll(".favorite-btn").forEach(button => {

        const id = Number(button.dataset.id);

        const icon = button.querySelector("i");

        if (isFavorite(id)) {

            icon.className = "ri-heart-fill";

            button.classList.add("active");

        } else {

            icon.className = "ri-heart-line";

            button.classList.remove("active");

        }

    });

}



document.addEventListener("click", (e) => {

    const button = e.target.closest(".favorite-btn");

    if (!button) return;

    toggleFavorite(button.dataset.id);

});



function showFavorites() {

    const favoriteImages = galleryData.filter(image =>
        favorites.includes(image.id)
    );

    resetGallery(favoriteImages);

}



if (favoriteBtn) {

    favoriteBtn.addEventListener("click", () => {

        showFavorites();

    });

}



document.addEventListener("DOMContentLoaded", () => {

    setTimeout(updateFavoriteIcons, 300);

});

document.addEventListener("click", () => {

    setTimeout(updateFavoriteIcons, 100);

});
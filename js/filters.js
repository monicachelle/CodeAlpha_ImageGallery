

const filterButtons = document.querySelectorAll(".category-pill");



function filterGallery(category) {

    if (category === "all") {

        resetGallery(galleryData);
        return;

    }

    const filtered = galleryData.filter(image => {

        return image.category === category;

    });

    resetGallery(filtered);

}



function setActiveButton(activeButton) {

    filterButtons.forEach(button => {

        button.classList.remove("active");

    });

    activeButton.classList.add("active");

}



filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        setActiveButton(button);

        filterGallery(category);

    });

});
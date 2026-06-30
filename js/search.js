

const searchInput = document.getElementById("searchInput");



function searchGallery(searchText) {

    const keyword = searchText.toLowerCase().trim();

    if (keyword === "") {

        resetGallery(galleryData);
        return;

    }

    const results = galleryData.filter(image => {

        return (

            image.title.toLowerCase().includes(keyword) ||

            image.category.toLowerCase().includes(keyword)

        );

    });

    resetGallery(results);

    showEmptyMessage(results.length);

}



function showEmptyMessage(count) {

    const oldMessage = document.querySelector(".empty-gallery");

    if (oldMessage) {

        oldMessage.remove();

    }

    if (count > 0) return;

    const message = document.createElement("div");

    message.className = "empty-gallery";

    message.innerHTML = `

        <i class="ri-image-line"></i>

        <h2>No Images Found</h2>

        <p>
            Try searching with another keyword.
        </p>

    `;

    galleryGrid.appendChild(message);

}



if (searchInput) {

    searchInput.addEventListener("input", (e) => {

        searchGallery(e.target.value);

    });

}



function clearSearch() {

    if (!searchInput) return;

    searchInput.value = "";

    resetGallery(galleryData);

}
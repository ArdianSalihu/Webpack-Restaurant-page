//restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    // Create and append image element
    const image = document.createElement("img");
    image.src = "https://www.skylineatlas.de/wp-content/uploads/2022/11/edel-restaurant-ffm-luxus-restaurant-skyline-blick-melia-hochhaus.jpg";
    image.height = "300";
    pageContent.appendChild(image);

    // Create and append headline element
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our luxury restaurant";
    pageContent.appendChild(headline);

    //Create and append copy element
    const copy = document.createElement("p");
    copy.textContent = "We serve one of the best foods, in one of the most luxury restaurants";
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;
import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";



const createTabs = () => {
    const content = document.querySelector("#content");

    // Create the three divs
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    // Set id's for the divs
    div1.setAttribute("id", "home-btn");
    div2.setAttribute("id", "menu-btn");
    div3.setAttribute("id", "contact-btn");

    // Set classes for the div's
    div1.classList.add("tab");
    div2.classList.add("tab");
    div3.classList.add("tab");

    // Set text content for the tab's
    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";

    // Append the divs to the content div
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener("click", () => {
        cleareContent();
        createRestaurantHomePage();
    })

    div2.addEventListener("click", () => {
        cleareContent();
        createMenuPage();
    })

    div3.addEventListener("click", () => {
        cleareContent();
        createContactPage();
    })
}

function cleareContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;
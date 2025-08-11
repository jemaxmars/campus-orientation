import "../vendor/normalize.css";
import "../blocks/body.css";
import "../blocks/header.css";
import "../blocks/nav.css";
import "../blocks/search-box.css";
import "../blocks/info-card.css";
import "../blocks/faq.css";
import "../pages/index.css";


//store the application's important data  in variables

let activeSectionId = "dining"; // id of the info card that is visible
let currentSearchTerm = ""; //what user has typed into the search bar


const navContainer = document.getElementById("main-nav");
const contentContainer = document.getElementById("main-content");
const searchInput = document.getElementById("search-input");
const faqContainer = document.getElementById("faq-container");

//get all the nav buttons
const navButtons = navContainer
  ? Array.from(navContainer.querySelectorAll(".nav__button"))
  : [];

//get all the info cards & store them in an object
const infoCards = {
  dining: document.getElementById("info-card-dining"),
  buildings: document.getElementById("info-card-buildings"),
  "campus-life": document.getElementById("info-card-campus-life"),
};

//functions

//updates the nav buttons to show which one is active
 
function updateNavigationState() {
  navButtons.forEach((button) => {
    //if the button's id matches the active section id, add it
    if (button.dataset.id === activeSectionId) {
      button.classList.add("nav__button--active");
    } else {
      //or else, remove active style
      button.classList.remove("nav__button--active");
    }
  });
}

/** //USED AI TO GENERATE THIS BLOCK OF CODE.
 * Highlights a search term within a block of text by wrapping it in <mark> tags.
 * This function includes some advanced code (RegExp) to handle special characters.
 */
function highlightText(text, searchTerm) {
  if (!searchTerm) {
    return text; // If there's no search term, return the original text.
  }

  // This is a Regular Expression.
  // It escapes the search term to prevent errors and finds all matches.
  const escapedTerm = searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`(${escapedTerm})`, "gi");

  // Replace every match with the same text wrapped in a <mark> tag.
  return text.replace(regex, `<mark>$1</mark>`);
}

/**
 * Shows the correct info card and highlights any search terms.
 */
function renderContent() {
  if (!contentContainer) return; // Exit if the main container doesn't exist.

  // 1. Hide all the info cards.
  Object.values(infoCards).forEach((card) => {
    if (card) card.classList.add("hidden");
  });

  // 2. Find the one card that should be active.
  const activeCard = infoCards[activeSectionId];
  if (!activeCard) return; // Exit if there's no card for the active section.

  // 3. Show the active card.
  activeCard.classList.remove("hidden");

  // 4. Handle the search highlighting.
  const textElement = activeCard.querySelector(".info-card__text");
  if (!textElement) return;

  // Get the original, un-highlighted text from the data attribute.
  const originalContent = textElement.getAttribute("data-original-content");

  // Use our helper function to highlight the text.
  const highlightedContent = highlightText(originalContent, currentSearchTerm);

  // Update the card's content with the new highlighted version.
  textElement.innerHTML = highlightedContent;
}

// USED AI TO GENERATE THIS BLOCK OF CODE. (END OF AI GENERATED CODE)


 //runs when a user clicks a nav button
function handleNavClick(button) {
  //update the state with the id of button that was clicked
  activeSectionId = button.dataset.id;
  currentSearchTerm = ""; // reset 
  searchInput.value = ""; // clear 

  //re-render the page to show changes
  updateNavigationState();
  renderContent();
}

  //function runs whenever the user types in the search bar
function handleSearchInput(event) {
  // update the state with the new search term
  currentSearchTerm = event.target.value.trim();

  //re-render the content to apply the highlight
  renderContent();
}

//function runs when a user clicks inside FAQ sect
function handleFaqClick(event) {
  //specific question button that was clicked on
  const questionButton = event.target.closest(".faq__question");

  //if a question button was clicked
  if (questionButton) {
    //find its parent element (entire FAQ item)
    const faqItem = questionButton.parentElement;
    //& toggle the openclass to show or hide answer
    faqItem.classList.toggle("faq__item--open");
  }
}



 //sets up the entire app
function initializeApp() {
  //attach event listeners to the interactive elements

  //for each nav button, listen for clicks
  navButtons.forEach((button) => {
    button.addEventListener("click", () => handleNavClick(button));
  });

  //listen for typing in the search bar
  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);
  }

  //listen for clicks in the FAQ section.
  //manages clicks for all the questions inside it
  if (faqContainer) {
    faqContainer.addEventListener("click", handleFaqClick);
  }

  //perform the first render to show the default cont
  updateNavigationState();
  renderContent();

  console.log("Campus Starter App initialized successfully (function-based)");
}

//wait til the entire HTML page is loaded before running the init code
document.addEventListener("DOMContentLoaded", initializeApp);

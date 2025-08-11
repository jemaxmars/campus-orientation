
export class FAQManager {
  constructor() {
    this.faqItems = [];
    this.init();
  }

  //initFAQ funct
  init() {
    this.bindEvents();
    this.initializeFAQItems();
    console.log("FAQ Manager initialized");
  }

  //bindFAQ event listeners 
  bindEvents() {
    document.addEventListener("click", (event) => {
      if (event.target.closest(".faq__button")) {
        const faqButton = event.target.closest(".faq__button");
        const faqItem = faqButton.closest(".faq__item");
        this.toggleFAQ(faqItem);
      }
    });
  }

  //initFAQ items
  initializeFAQItems() {
    this.faqItems = document.querySelectorAll(".faq__item");
    console.log(`Initialized ${this.faqItems.length} FAQ items`);
  }


  toggleFAQ(faqItem) {
    if (!faqItem) return;

    const isOpen = faqItem.classList.contains("show");

    //close all FAQ
    this.faqItems.forEach((item) => {
      item.classList.remove("show");
    });

    if (!isOpen) {
      faqItem.classList.add("show");
    }
  }
}
  

export default FAQManager;

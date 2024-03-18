import "./style.css";

class BookSearch {
  constructor() {
    this.form = document.querySelector("form");
    this.input = document.getElementById("search-bar");
    this.submitButton = document.getElementById("search-button");
    this.resultsContainer = document.getElementById("results-container");
    this.spinner = document.getElementById("spinner-container");
    this.init();
  }

  init() {
    let showError = false;
    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const searchTopic = this.input.value.trim();
      if (searchTopic.indexOf(" ") !== -1) {
        console.error("Topic must be one word");

        if (!showError) {
          this.clearResultsContainer();
          this.input.classList.add("error");
          const errorMessage = document.createElement("p");
          errorMessage.textContent = "⛔ Enter a single topic";
          errorMessage.style.color = "var(--error)";
          errorMessage.style.fontWeight = "500";
          this.resultsContainer.appendChild(errorMessage);
          showError = true;
          this.input.value = "";
        }
        return;
      }

      try {
        showError = false;
        this.input.classList.remove("error");
        const bookList = await this.getBookList(searchTopic);
        if (bookList.length === 0) {
          console.warn("No results found");

          const emptyList = document.createElement("p");
          emptyList.textContent = "Empty List...";
          emptyList.style.color = "var(--bg-color)";
          emptyList.style.fontWeight = "500";
          this.resultsContainer.appendChild(emptyList);
          this.input.value = "";
          return;
        }
        this.generateCards(bookList);
        this.input.value = "";
      } catch (error) {
        this.hideLoader();
        console.error("Error while fetching books", error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Loading Failed";
        errorMessage.style.color = "var(--error)";
        errorMessage.style.fontWeight = "500";
        this.resultsContainer.appendChild(errorMessage);
      }
    });
  }

  async getBookList(topic) {
    this.clearResultsContainer();
    this.showLoader();
    const response = await fetch(
      `https://openlibrary.org/subjects/${topic.toLowerCase()}.json`
    );
    if (!response.ok) {
      throw new Error("Impossible getting book's data");
    }
    const data = await response.json();
    this.hideLoader();
    return data.works ?? [];
  }

  generateCards(bookList) {
    this.clearResultsContainer();
    bookList.forEach((book) => {
      const cardContainer = this.createCard(book);
      this.resultsContainer.appendChild(cardContainer);
    });
  }

  clearResultsContainer() {
    while (this.resultsContainer.firstChild) {
      this.resultsContainer.removeChild(this.resultsContainer.firstChild);
    }
  }

  createCard(book) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "cards-container";

    const img = document.createElement("img");
    img.src = `https://covers.openlibrary.org/b/id/${book.cover_id}.jpg`;
    img.alt = "Copertina";

    const div = document.createElement("div");

    const titleTag = document.createElement("h5");
    titleTag.textContent = "Title:";
    const title = document.createElement("p");
    title.textContent = book.title;

    const authorTag = document.createElement("h5");
    authorTag.textContent = "Author:";
    const author = document.createElement("p");
    author.textContent = book.authors.map((author) => author.name).join(", ");

    const buttonDescription = document.createElement("button");
    buttonDescription.textContent = "Description";
    buttonDescription.className = "description-btn";

    const span = document.createElement("span");
    span.innerHTML = `
            <svg
              id="arrow-icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>`;

    buttonDescription.appendChild(span);
    div.appendChild(titleTag);
    div.appendChild(title);
    div.appendChild(authorTag);
    div.appendChild(author);
    div.appendChild(buttonDescription);
    cardContainer.appendChild(img);
    cardContainer.appendChild(div);

    buttonDescription.addEventListener("click", () => {
      this.getDescription(book.key);
    });

    return cardContainer;
  }

  getDescription(key) {
    fetch(`https://openlibrary.org${key}.json`)
      .then((response) => response.json())
      .then((data) => {
        let description;
        if (typeof data.description === "string")
          description = data.description;
        else if (typeof data.description === "object" && data.description.value)
          description = data.description.value;
        else description = null;
        this.createModal(description);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data", error);
      });
  }

  createModal(description) {
    const modal = document.createElement("div");
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.className = "close-btn";
    closeButton.addEventListener("click", () => {
      this.closeModal(modal);
    });

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = description
      ? description
      : "No description";

    modalContent.appendChild(closeButton);
    modalContent.appendChild(descriptionParagraph);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
  }

  closeModal(modal) {
    document.body.removeChild(modal);
  }

  showLoader() {
    this.spinner.classList.add("show");
  }

  hideLoader() {
    this.spinner.classList.remove("show");
  }
}

const bookSearch = new BookSearch();

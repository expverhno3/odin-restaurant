const content = document.querySelector("div#content");

function addTitle(title) {
  const titleContainer = document.createElement("div");
  content.appendChild(titleContainer);
  titleContainer.classList.add("title-container");
  titleContainer.classList.add("container");
  const titleElement = document.createElement("h1");
  titleElement.textContent = title;
  titleContainer.appendChild(titleElement);
  titleElement.classList.add("title");
}

function addReview(review) {
  const reviewContainer = document.createElement("div");
  content.appendChild(reviewContainer);
  reviewContainer.classList.add("review-container");
  reviewContainer.classList.add("container");
  const reviewElement = document.createElement("p");
  reviewElement.textContent = review;
  reviewContainer.appendChild(reviewElement);
  reviewElement.classList.add("review");
}

function addInfo(info) {
  const infoContainer = document.createElement("div");
  content.appendChild(infoContainer);
  infoContainer.classList.add("info-container");
  infoContainer.classList.add("container");
  const ul = document.createElement("ul");
  ul.classList.add('info-hour-list')
  info.forEach((row) => {
    const list = document.createElement("li");
    list.textContent = `${row[0]}` + "am - " + `${row[1]}pm`;
    list.classList.add('info-hour')
    ul.appendChild(list)
  });
  infoContainer.appendChild(ul)
}

export { addTitle, addReview, addInfo };

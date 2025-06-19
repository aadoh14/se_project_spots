const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector(".modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const editProfileForm = editProfileModal.querySelector(".modal__form");


const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const addCardFormElement = newPostModal.querySelector(".modal__form");
const nameInput = addCardFormElement.querySelector("#card-image-input");
const linkInput = addCardFormElement.querySelector("#profile-caption-input");


editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
});

editProfileCloseBtn.addEventListener("click", function (){
  editProfileModal.classList.remove("modal_is-opened");
});


newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit (evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
  console.log("submitting");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);


function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(nameInput.value, linkInput.value);
  newPostModal.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener('submit', handleAddCardSubmit);


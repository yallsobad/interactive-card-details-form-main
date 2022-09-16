const frontNumber = document.getElementById("frontCardNumber");
const frontName = document.getElementById("frontCardName");
const frontDateMonth = document.getElementById("frontCardExpMonth");
const frontDateYear = document.getElementById("frontCardExpYear");
const backCardCvc = document.getElementById("backCardCvc");
const cardName = document.getElementById("name");
const cardNumber = document.getElementById("cardNumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const btn = document.getElementById("btn");
const thankYouBtn = document.getElementById("thankYouBtn");
const nameError = document.querySelector(".name-error");
const numberError = document.getElementById("numberError");
const dateError = document.getElementById("dateError");
const cvcError = document.getElementById("cvcError");

// Add Values to Card Image

cardName.onkeyup = function () {
  if (cardName.value !== "") {
    frontName.innerHTML = cardName.value;
  } else {
    frontName.innerHTML = "Jane Appleseed";
  }
};

cardNumber.onkeyup = () => {
  if (cardNumber.value !== "") {
    frontNumber.innerHTML = cardNumber.value;
  } else {
    frontNumber.innerHTML = "0000 0000 0000 0000";
  }
};

month.onkeyup = () => {
  if (month.value !== "") {
    frontDateMonth.innerHTML = month.value;
  } else {
    frontDateMonth.innerHTML = "00";
  }
};

year.onkeyup = () => {
  if (year.value !== "") {
    frontDateYear.innerHTML = year.value;
  } else {
    frontDateYear.innerHTML = "00";
  }
};

cvc.onkeyup = () => {
  if (cvc.value !== "") {
    backCardCvc.innerHTML = cvc.value;
  } else {
    backCardCvc.innerHTML = "000";
  }
};

// Display Errors

// Name Error

btn.addEventListener("click", () => {
  if (/\S+/gi.test(cardName.value) == false) {
    nameError.style.display = "block";
    cardName.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    nameError.style.display = "none";
    cardName.style.border = "2px solid rgba(238,130,238)";
  }

  // Card Number Error

  if (/\d{16}/gi.test(cardNumber.value) == false) {
    numberError.style.display = "block";
    cardNumber.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    numberError.style.display = "none";
    cardNumber.style.border = "2px solid rgba(238,130,238)";
  }

  // Date Error

  if (
    /\d{2}/gi.test(month.value) == false ||
    /\d{2}/gi.test(year.value) == false
  ) {
    dateError.style.display = "block";
    month.style.border = "2px solid rgba(255, 0, 0, 0.3)";
    year.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    dateError.style.display = "none";
    month.style.border = "2px solid rgba(238,130,238)";
    year.style.border = "2px solid rgba(238,130,238)";
  }

  // CVC Error

  if (/\d{3}/gi.test(cvc.value) == false) {
    cvcError.style.display = "block";
    cvc.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    cvcError.style.display = "none";
    cvc.style.border = "2px solid rgba(238,130,238)";
  }

  if (
    nameError.style.display != "block" &&
    numberError.style.display != "block" &&
    dateError.style.display != "block" &&
    cvcError.style.display != "block"
  ) {
    document.querySelector(".card-info").style.display = "none";
    document.querySelector(".thank-you").style.display = "flex";
  }
});

thankYouBtn.addEventListener("click", () => {
  document.querySelector(".card-info").style.display = "flex";
  document.querySelector(".thank-you").style.display = "none";
  window.location.reload();
});

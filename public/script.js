/* Section Nav */

function navFunction() {
  const containerDefault = document.querySelector(".container-default");
  document
    .querySelector(".open-navbar-icon-main")
    .addEventListener("click", () => {
      containerDefault.classList.add("change-main");
    });
  document
    .querySelector(".close-navbar-icon-main")
    .addEventListener("click", () => {
      containerDefault.classList.remove("change-main");
    });

  const colors = ["#a4b0be", "#57606f", "#747d8c", "#2f3542", "#ced6e0"];

  let i = 0;

  Array.from(document.querySelectorAll(".nav-link-main")).forEach((item) => {
    item.style.cssText = `background-color: ${colors[i++]}`;
  });
}
navFunction();
/* End of Section Nav */

/* Search section */

const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon i");
if (searchIcon) {
  searchIcon.addEventListener("click", () => {
    searchIcon.parentElement.classList.add("change");
    searchInputWrapper.classList.add("change");

    setTimeout(() => {
      searchInput.focus();
    }, 1000);
  });
}

const closeIcon = document.querySelector(".search-input i ");
if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    searchIcon.parentElement.classList.remove("change");
    searchInputWrapper.classList.remove("change");
  });
}

/* End of Search section */

/* Section Slides Images */

let current = 1;
let currentOne = 1;
let currentTwo = 1;

const changeSlides = () => {
  const slideList = document.querySelectorAll(".slide");
  const slideListOne = document.querySelectorAll(".slide-1");
  const slideListTwo = document.querySelectorAll(".slide-2");

  const slides = Array.from(slideList);
  const slidesOne = Array.from(slideListOne);
  const slidesTwo = Array.from(slideListTwo);

  if (current > slides.length || current > slideListOne.length) {
    current = 1;
  }

  slides.forEach((slide) => {
    if (slide.classList[1].split("-")[1] * 1 === current) {
      slide.style.cssText = "visibility: visible; opacity:1";
    } else {
      slide.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const changeSlidesOne = () => {
  const slideListOne = document.querySelectorAll(".slide-01");

  const slidesOne = Array.from(slideListOne);

  if (currentOne > slidesOne.length) {
    currentOne = 1;
  }

  slidesOne.forEach((slideOne) => {
    if (slideOne.classList[1].split("-")[1] * 1 === currentOne) {
      slideOne.style.cssText = "visibility: visible; opacity:1";
    } else {
      slideOne.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const changeSlidesTwo = () => {
  const slideListTwo = document.querySelectorAll(".slide-02");

  const slidesTwo = Array.from(slideListTwo);

  if (currentTwo > slidesTwo.length) {
    currentTwo = 1;
  }

  slidesTwo.forEach((slideTwo) => {
    if (slideTwo.classList[1].split("-")[1] * 1 === currentTwo) {
      slideTwo.style.cssText = "visibility: visible; opacity:1";
    } else {
      slideTwo.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const playPause = () => {
  setInterval(() => {
    current++;
    changeSlides();
  }, 3000);
};

const playPauseOne = () => {
  setInterval(() => {
    currentOne++;
    changeSlidesOne();
  }, 3000);
};

const playPauseTwo = () => {
  setInterval(() => {
    currentTwo++;
    changeSlidesTwo();
  }, 3000);
};
changeSlides();
playPause();

changeSlidesOne();
playPauseOne();

changeSlidesTwo();
playPauseTwo();

function btnCatalog() {
  const menBtnCatalog = document.getElementById("btn-men-catalog");
  const womenBtnCatalog = document.getElementById("btn-women-catalog");
  const salesBtnCatalog = document.getElementById("btn-sales-catalog");

  menBtnCatalog.addEventListener("click", function () {
    window.location.href = "/gymbs/mens";
  });
  womenBtnCatalog.addEventListener("click", function () {
    window.location.href = "/gymbs/womans";
  });
  salesBtnCatalog.addEventListener("click", function () {
    window.location.href = "/gymbs/sales";
  });
}

/* End of Section Slides Images */

/* Section Catalog Searching Bar */

function showCatalogDescrip(id) {
  hideElement();
  const hiddenElem = document.getElementById(id);

  hiddenElem.style.display = "";
  return false;
}

function hideElement() {
  const showElem = $(".card-style-exit");
  $(showElem).css("display", "none");
}
//onload="hideElement()"

/* End Section Catalog Searching Bar */

/* Sign up/ Sign in Section */

function signUpIn() {
  const sectionSignUp = document.querySelector(".section-signup");
  const headingSpan2 = document.querySelector(".heading-span-2");
  const form = document.querySelector(".form");

  const clearForm = () => {
    document.querySelectorAll(".form-input-wrapper").forEach((item) => {
      item.className = "form-input-wrapper";
    });
    form.reset();
  };

  document.querySelector(".signup-btn").addEventListener("click", () => {
    sectionSignUp.classList.add("change-sign");
    setTimeout(() => {
      headingSpan2.textContent = "Up";
    }, 200);
    form.className = "form sign-up";
    clearForm();
  });

  document.querySelector(".signin-btn").addEventListener("click", () => {
    sectionSignUp.classList.remove("change-sign");
    setTimeout(() => {
      headingSpan2.textContent = "In";
    }, 200);
    form.className = "form sign-in";
    clearForm();
  });

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  const error = (input, message) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = "form-input-wrapper error";
    inputWrapper.querySelector(".message").textContent = message;
  };

  const success = (input) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = "form-input-wrapper success";
  };

  const checkEmail = (input) => {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEx.test(input.value.trim())) {
      success(input);
    } else {
      error(input, "Email is not valid");
    }
  };

  const checkRequiredFields = (inputArr) => {
    inputArr.forEach((input) => {
      if (input.value.trim() == "") {
        if (input.id === "password2") {
          error(input, "password confirmation is required");
        } else {
          error(input, `${input.id} is required`);
        }
      } else {
        success(input);
      }
    });
  };

  const checkLength = (input, min, max) => {
    if (input.value.length < min) {
      error(input, `${input.id} must be at least ${min} characters`);
    } else if (input.value.lenght > max) {
      error(input, `${input.id} must be less than ${max} characters`);
    } else {
      success(input);
    }
  };

  const passwordsMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
      error(input2, "Passwords do not match");
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.classList[1] === "sign-up") {
      checkRequiredFields([username, email, password, password2]);
      checkLength(username, 2, 15);
      checkLength(password, 5, 25);
      passwordsMatch(password, password2);
    } else {
      checkRequiredFields([email, password]);
    }
    checkEmail(email);
  });
}

/* End of Sign up/ Sign in Section */

/* Add to the card Section */
const product = document.querySelector(".gallery-link");
const productId = document.getElementById("id");
const productName = document.querySelector(".cloth-name");
const productPrice = document.querySelector(".price");
const cartAdded = document.querySelector(".cart-add-btn");

function addToCard(productId) {
  const productElement = document.getElementById(productId);

  const productNameValue = productName.textContent;
  const productPriceValue = productPrice.textContent;

  const cartItem = {
    name: productNameValue,
    price: productPriceValue,
  };
  console.log(cartItem);
  console.log(productElement);
}

const addToCardBtn = document.querySelectorAll(".add-to-cart");
if (addToCardBtn) {
  product.addEventListener("click", addToCard);
}

/*$(function () {
  $(".add-to-cart").click(function () {
    var product = $(this).closest(".gallery-link");

    var productId = product.data("id");
    var productName = product.find(".cloth-name").text();
    var productPrice = product.find(".price").text();
    console.log($(this));
    console.log(productName);
    console.log(productId);
    console.log(productPrice);
    // Retrieve existing cart data from session storage or initialize an empty array
    var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    var existingItemIndex = cart.findIndex(function (cartItem) {
      return cartItem.productId === productId;
    });
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity++;
    } else {
      cart.push(productId, productName, productPrice);
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));

    // Check if the item already exists in the cart

    // Store the updated cart data bacto to session storage
    sessionStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    console.log(existingItemIndex);

    //Display card items
  });
  $(".payment-section").css("display", "none");
}); */

/* End of Add to the card Section */
/* Section Payment/Cart */

const addressForm = document.querySelector(".address-form");
const formPaymentSection = document.querySelector(".form-payment");
const paymentForm = document.querySelector(".payment-form");
const addressName = document.getElementById("address-name");
const addressNum1 = document.getElementById("address1");
const addressNum2 = document.getElementById("address2");
const country = document.getElementById("countryId");
const county = document.getElementById("county");
const city = document.getElementById("city");
const zipCode = document.getElementById("zip");
const paymentSub = document.getElementById("payment-btn");
const paymentName = document.getElementById("card-name");
const cardNum = document.getElementById("card-number");
const cardExpireDate = document.getElementById("card-expiry-date");
const cardCvv = document.getElementById("card-cvv");

const clearAddressForm = () => {
  document.querySelectorAll(".payment-input").forEach((item) => {
    item.className = "payment-input";
  });
  formPaymentSection.reset();
};

const clearPaymentForm = () => {
  document.querySelectorAll(".payment-input").forEach((item) => {
    item.className = "payment-input";
  });
  paymentForm.reset();
};

function storeAddress(e) {
  e.preventDefault();
  const nameValue = addressName.value;
  const addressNum1Value = addressNum1.value;
  const addressNum2Value = addressNum2.value;
  const countryValue = countryId.value;
  const countyValue = county.value;
  const cityValue = city.value;
  const zipCodeValue = zipCode.value;

  console.log(nameValue);
  console.log(addressNum1Value);
  console.log(addressNum2Value);
  console.log(countryValue);
  console.log(countyValue);
  console.log(cityValue);
  console.log(zipCodeValue);
  nameValidate(nameValue, addressNum1Value);
  clearAddressForm();
}

function storeCardInfo(e) {
  e.preventDefault();
  const paymentNameValue = paymentName.value;
  const cardNumValue = cardNum.value;
  const cardExpireDateValue = cardExpireDate.value;
  const cardCvvValue = cardCvv.value;

  console.log(paymentNameValue);
  console.log(cardNumValue);
  console.log(cardExpireDateValue);
  console.log(cardCvvValue);
  cardPayment(
    paymentNameValue,
    cardNumValue,
    cardExpireDateValue,
    cardCvvValue
  );
  clearPaymentForm();
}

function nameValidate(nameValue, addressValue, zipCodeValue) {
  const countyRegex = /(County\s*)?[A-Za-z\-]+/i; // County name
  const eircodeRegex = /[A-Za-z]{1,2}\d{1,2}[A-Za-z\d]?\s*\d{1}[A-Za-z]{2}/i; // Eircode format
  const expression = /^[a-zA-Z]+(?:-[a-zA-Z]+)?(?: [a-zA-Z]+(?:-[a-zA-Z]+)?)?$/;
  const regex = new RegExp(expression);
  if (!nameValue.match(regex)) {
    alert("Please provide full name");
  }
  if (!addressValue.match(countyRegex)) {
    alert("Please provide a valid address");
  }
}

function cardPayment(
  cardNameValue,
  cardNumValue,
  cardExpireValue,
  cardCvvValue
) {
  const cardNum = /^\+?(\d{16}|\d{10,12})/;
  const cardExpire = /(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|[12][0-9]|3[01])/;
  const cardCvv = /\d{3}/;
  const expression = /^[a-zA-Z]+(?:-[a-zA-Z]+)?(?: [a-zA-Z]+(?:-[a-zA-Z]+)?)?$/;
  const regex = new RegExp(expression);
  if (!cardNameValue.match(regex)) {
    alert("Please provide full name");
  }
  if (!cardNumValue.match(cardNum)) {
    alert("Not a valid");
  }
  if (!cardExpireValue.match(cardExpire)) {
    alert("Not a valid Expire date ");
  }
  if (!cardCvvValue.match(cardCvv)) {
    alert("Not a valid Secure code ");
  }
}

const paymentSect = document.querySelector(".payment-form");
if (paymentSect) {
  paymentForm.addEventListener("submit", storeAddress);
  paymentForm.addEventListener("submit", storeCardInfo);
}

/* End of Section Payment/Cart */

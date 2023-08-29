// Constants
const LAPTOP  = 'Laptop';
const MOBILE = 'Mobile';
const LAPTOP_BORDER = 1024;

// Utils
function detectDeviceType(currentWidth) {
  return currentWidth > LAPTOP_BORDER ? LAPTOP : MOBILE;
}

function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function storeEmail(email) {
  const url = "https://aj4vwojhub.execute-api.ap-southeast-2.amazonaws.com/landing-api"; // Replace with your API endpoint
  const data = {
    email: email
  };

fetch(url, {
  method: "POST",
  mode: 'no-cors',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    console.log("Response data:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

  
// hide app store and play market buttons for laptop
const storeButtons = document.querySelectorAll('.article-content-button');
const hideStoreButtons = () => {
  storeButtons.forEach((button) => {
    button.style.display = 'none';
  });
}
const showStoreButtons = () => {
  storeButtons.forEach((button) => {
    button.style.display = 'flex';
  });
}
function hideStoreBtnForLaptop() {
  if (detectDeviceType(window.innerWidth) === LAPTOP) {
    hideStoreButtons();
  } else if (detectDeviceType(window.innerWidth) === MOBILE) {
    showStoreButtons();
  } else {
    null;
  }
};

// Initial upload
if (detectDeviceType(window.innerWidth) === LAPTOP) {
  hideStoreButtons();
}
if (detectDeviceType(window.innerWidth) === MOBILE) {
  showStoreButtons();
}

if (isIOS()) {
  storeButtons.forEach((button) => {
    button.setAttribute('href', 'https://apps.apple.com/pl/app/wedo-social/id6450743279');
  }); 
} else {
  storeButtons.forEach((button) => {
    button.setAttribute('href', 'https://play.google.com/store/apps/details?id=xyz.wedo');
  }); 
}

window.addEventListener('resize', hideStoreBtnForLaptop);

const submitEmailForm = document.getElementById("email-subscription-form");

submitEmailForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  storeEmail(emailInput.value);
});


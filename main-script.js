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

  const emailInput = document.getElementById("email")
  console.log("Email on submit:", emailInput.value);
});


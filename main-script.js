// Constants
const LAPTOP  = 'Laptop';
const MOBILE = 'Mobile';
const LAPTOP_BORDER = 1024;
const INITIAL_UPLOAD = 'initial upload';

// Utils
function detectDeviceType(currentWidth) {
  return currentWidth > LAPTOP_BORDER ? LAPTOP : MOBILE;
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
    button.style.display = 'block';
  });
}
function hideStoreBtnForLaptop(e) {
  if (detectDeviceType(e.target.outerWidth) === LAPTOP) {
    hideStoreButtons();
  } else if (detectDeviceType(e.target.outerWidth) === MOBILE) {
    showStoreButtons();
  } else {
    null;
  }
};

// Initial upload
if (window.innerWidth === LAPTOP) {
  hideStoreBtnForLaptop();
}
if (window.innerWidth === MOBILE) {
  showStoreButtons();
}

window.addEventListener('resize', hideStoreBtnForLaptop);

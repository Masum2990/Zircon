


// Text-infinite Animation

const text = document.querySelector(".zir-hm1-hero-text");
if (text) {
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) => `<span style="display:inline-block; letter-spacing: 55px; transform:rotate(${i * 8.6}deg)">${char}</span>`
    )
    .join("");
    
}

 // End-Text-infinite Animation


//  Slider-Card
 var swiper = new Swiper(".zir-hm1-add-to-cart-mySwiper", {
  spaceBetween: 16,
  slidesPerView: 4,
  speed: 800,
  watchSlidesProgress: true,
  mousewheel: true,
  keyboard: true,
  loop: true,
  watchSlidesProgress: true,
  breakpoints: {
    200: {
      slidesPerView: 3,
      spaceBetween: 10,
      direction: 'horizontal'
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 20,
      direction: 'horizontal'
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 16,
      direction: 'vertical'
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 16,
      direction: 'vertical'
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 20,
      direction: 'vertical'
    },
    1399: {
      slidesPerView: 4,
      spaceBetween: 16,
      direction: 'vertical'
    },

  }
  

});
var swiper2 = new Swiper(".zir-hm1-add-to-cart-mySwiper2", {
  spaceBetween: 10,
  speed: 900,
  thumbs: {
    swiper: swiper,
  },
    breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1399: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

//  End-Slider-Card


// /* quantity-bar */

(function () {
  const quantityContainer = document.querySelector(".zir-hm1-add-to-cart-quantity");
  if (!quantityContainer) {
    return;
  }

  const minusBtn = quantityContainer.querySelector(".minus");
  const plusBtn = quantityContainer.querySelector(".plus");
  const inputBox = quantityContainer.querySelector(".input-box");

  if (!minusBtn || !plusBtn || !inputBox) {
    console.error("One or more required elements (minus button, plus button, input box) not found");
    return;
  }

  updateButtonStates();

  quantityContainer.addEventListener("click", handleButtonClick);
  inputBox.addEventListener("input", handleQuantityChange);

  function updateButtonStates() {
    const value = parseInt(inputBox.value);
    const max = parseInt(inputBox.max) || Infinity; // Handle case where max might not be set
    minusBtn.disabled = value <= 1;
    plusBtn.disabled = value >= max;
  }

  function handleButtonClick(event) {
    if (event.target === minusBtn) {
      decreaseValue();
    } else if (event.target === plusBtn) {
      increaseValue();
    }
  }

  function decreaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.max(value - 1, 1);
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function increaseValue() {
    let value = parseInt(inputBox.value);
    const max = parseInt(inputBox.max) || Infinity; // Handle case where max might not be set
    value = isNaN(value) ? 1 : Math.min(value + 1, max);
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function handleQuantityChange() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : value;

    // Execute your code here based on the updated quantity value
    console.log("Quantity changed:", value);
    updateButtonStates(); // Ensure button states are updated when input value changes manually
  }
})();

// /* End-quantity-bar */




// Slider 1St 

var swiper = new Swiper(".zir-hm1-feedback-mySwiper", {
  loop: true, 
  speed: 1000,
  slidesPerView: 1,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1399: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".zir-hm1-feedback-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".zir-hm1-feedback-button-next",
    prevEl: ".zir-hm1-feedback-button-prev"
  },

});

// End-Slider 1St 

// 




AOS.init({
  // Settings that can be overridden on per-element basis, by data-aos-* attributes:
  offset: 120,  // offset (in px) from the original trigger point
  delay: 0,     // values from 0 to 3000, with step 50ms
  duration: 400,  // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true,    // whether animation should happen only once - while scrolling down
  mirror: false,  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});




// 

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});



// 
// 


function spark(event) {
  let i = document.createElement("cursol");
  // Set the position of the element based on the mouse event
  i.style.left = event.pageX + "px";
  i.style.top = event.pageY + "px";

  // Randomly scale the element
  i.style.transform = `scale(${Math.random() * 2 + 1})`;

  // Set random transition values
  i.style.setProperty("--x", getRandomTransitionValue());
  i.style.setProperty("--y", getRandomTransitionValue());
  document.body.appendChild(i);

  // Remove the element after 2 seconds
  setTimeout(() => {
    document.body.removeChild(i);
  }, 2000);
};

function getRandomTransitionValue() {
  // Generate a random value between -200 and 200 pixels
  return `${Math.random() * 400 - 200}px`;
}

// Add event listener to track mouse movements and create spark effect
document.addEventListener("mousemove", spark);




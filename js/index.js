
const test = document.querySelector(".child-box");
test.addEventListener('dblclick', function (e) {
  test.classList.toggle('large');
});

// const popBox = document.querySelector(".shelby");
// popBox.addEventListener('mouseover', function (e) {
//   popBox.classList.toggle('large');
// });

// ----- Click -----

const test = document.querySelector(".parent-container1 h1"); 
test.addEventListener("click", event => {
    test.textContent = "Coding is Awesome!"
}); 
    



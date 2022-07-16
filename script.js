// const SIZE = 10
let rectangle = document.querySelector(".display");

const keys = document.querySelectorAll(".button")

keys.forEach(function (button) {
    rectangle.value = ""
    button.addEventListener('click', function (item) {
        let input = item.currentTarget.textContent 
        rectangle.value += input
        
        if (rectangle.value.length > 10) {
            alert("Maximum of 10 digits is allowed");
            rectangle.value = rectangle.value.substr(0, 10);

        
          
        }
    })
})
const img = document.querySelector('img')
img.onclick = () => {
  console.log('clicked');
  if (rectangle.value.length === 0){
  alert("No digits left");
}
else {
    rectangle.value = rectangle.value.slice(0, -1);
}
}
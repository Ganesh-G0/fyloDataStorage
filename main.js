const slider = $("#dataSlider");
const value = $("#dataUsed");
const dataLeft = $("#dataLeft");

function data() {  
  let currentValue = slider.val();
  
  value.text(currentValue);
  dataLeft.text((1000) - (currentValue));  
  let progress = currentValue / 1000 * 100;
  slider.css("background", `
    linear-gradient(90deg, 
    hsl(6, 100%, 80%), 
    hsl(335, 100%, 65%) ${progress}%, 
    hsl(229, 57%, 11%) ${progress}%`) 
}
slider.change((event) => {
  
  value.text(event.target.value);
  dataLeft.text((1000) - (event.target.value));  
  let progress = event.target.value / 1000 * 100;
  slider.css("background", 
    `linear-gradient(90deg, 
    hsl(6, 100%, 80%), hsl(335, 100%, 65%) ${progress}%, hsl(229, 57%, 11%) ${progress}%`) 
})

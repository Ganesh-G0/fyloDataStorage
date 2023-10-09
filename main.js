let slider = document.getElementById("myRange");
let output = document.getElementById("value");
let output1 = document.getElementById("dataleft");

output.innerHTML = slider.value;
output1.innerHTML = (1000) - (slider.value);

slider.oninput = function() {
  output.innerHTML = this.value;
  output1.innerHTML = (1000) - (this.value);
}  


slider.addEventListener('mousemove', function(){
  let x = slider.value;
  let color = 'linear-gradient(90deg, hsl(6, 100%, 80%), hsl(335, 100%, 65%)' + x/10 + '%, hsl(229, 57%, 11%)' + x/10 + '%';
  slider.style.background = color;
})
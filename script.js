const c = (el)=>document.querySelector(el);

c('.menu-openner').addEventListener('click', () => {
    c('aside').style.left = '0';
});
c('.button-produtos').addEventListener('click', () => {
    c('aside').style.left = '0';
});
c('.menu-closer').addEventListener('click', ()=>{
    c('aside').style.left = '100vw';
});
c('.cart--finalizar').addEventListener('click', ()=>{
    c('aside').style.left = '100vw';
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
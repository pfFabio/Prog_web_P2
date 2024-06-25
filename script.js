let imagemIndex = 1;


const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');


window.onclick = function(event){
  if (!event.target.matches('#menu_hamburger')) {  
    menu.style.display = 'none';
  }
}

hamburger.addEventListener('click', function(event) {
  if (menu.style.display === 'grid') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'grid';
  }
})
  
function defineimagens(n) {
  mostraimagens(imagemIndex += n);
}

function mostraimagens(n) {
  let i;
  let imagens = document.getElementsByClassName("imagens");
  if (n > imagens.length) {
    imagemIndex = 1
  }
  if (n < 1) {
    imagemIndex = imagens.length
  }
  for (i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[imagemIndex-1].style.display = "block";
}


mostraimagens(imagemIndex);

setInterval(()=>{
  defineimagens(1)
}
,3000);

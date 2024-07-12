const listaImgBicicletas = document.querySelectorAll('.bicicletasIntImgs img')
const listaImgBicicletasContainer = document.querySelector('.bicicletasIntImgs')
const imagemPrincipal = listaImgBicicletas[0]

function rodarGaleria(imagem){
   imagem.addEventListener('click', escolherImagemGaleria)
}

function escolherImagemGaleria(event) {   
   if(window.matchMedia('(width >= 940px)').matches){
      listaImgBicicletasContainer.prepend(event.currentTarget)
   }
}

listaImgBicicletas.forEach(rodarGaleria)
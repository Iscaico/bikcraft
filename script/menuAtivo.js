// Menu Ativo

const linksHeaderMenu = document.querySelectorAll('.headerNav ul li a')

function ativarLinkHeaderMenu(item){
   if (window.location.href.includes(item.href)){
      item.classList.add('jsCrescerDetalheLink')
   }
}

linksHeaderMenu.forEach(ativarLinkHeaderMenu)

// Inscrever-se do seguro seleciona o seguro desejado diretamente


const parametrosURL = new URLSearchParams(window.location.search)

function checkParametro(parametro) {
   const idParametro = document.getElementById(parametro)
   if(parametro){
      idParametro.checked = true
   }
}

parametrosURL.forEach(checkParametro)

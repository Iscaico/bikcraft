const duvidasPergunta = document.querySelectorAll('.seguroPerguntasRespostas button')

function ativarResposta(event){
   const pergunta = event.currentTarget
   const perguntaRespostaConection = pergunta.getAttribute('aria-controls')
   const resposta = document.getElementById(perguntaRespostaConection)

   resposta.classList.toggle('respostaAtiva')

   const trueOrFalse = resposta.classList.contains('respostaAtiva')
   pergunta.setAttribute('aria-expanded', trueOrFalse)   
}

function eventoClick(item){
   item.addEventListener('click', ativarResposta)
}

duvidasPergunta.forEach(eventoClick)
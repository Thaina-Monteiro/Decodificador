let retornoMensagem = document.getElementById('caixaMensagem')
let codigo = document.getElementById('codigo');
let botao = document.getElementById('btn');
let texto = document.getElementById('mensagem');
let mensagemCodigo = document.createElement('p')
let incrementoChave = document.createElement(`input`);
incrementoChave.id = 'aveCesar';
incrementoChave.type = 'numero';
incrementoChave.placeholder = 'Digite a chave';

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('click', (event) => {
    let evento = event.target;

    evento.value === 'decodificar' ? botao.innerText = 'Decodificar Mensagem!' : botao.innerText = 'Codificar Mensagem!';
  })
});

document.querySelectorAll('select').forEach((select) => {
  select.addEventListener('change', (event) => {
    let evento = event.target;
    let divChaveCesar = document.getElementById('chaveDeCesar');

    evento.value === 'cesar' ? divChaveCesar.appendChild(incrementoChave) : incrementoChave.remove();
  })
});

botao.addEventListener('click', () => {

  !texto.value ? (
    alert('Opa! Você esqueceu de escrever a sua mensagem!')
  ) : codigo.value === 'cesar' && !incrementoChave.value ? (
    alert('Você precisa escolher uma chave de César!')
  ) : codigo.value === 'base64' && texto.value ? (
    exibeNaTela(base64())
  ) : codigo.value === 'cesar' && texto.value ? (
    exibeNaTela(cCesar())
  ) : (
    alert('Você precisa escolher o tipo do código!')
  )
})

//PARA MOSTRAR O RESULTADO FINAL DO CONTEÚDO DA MENSAGEM CODIFICADA OU DESCODIFICADA
let exibeNaTela = (conteudo) => mensagemCodigo.innerText = conteudo; retornoMensagem.appendChild(mensagemCodigo);


//código da base 64
let base64 = () => botao.textContent.includes('Codificar') ? window.btoa(texto.value) : window.atob(texto.value);

let cCesar = () => {
  let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let frase = texto.value;
  frase = frase.toLowerCase();
  let chaveCesar = document.getElementById('aveCesar')
  let x = parseInt(chaveCesar.value);
  let fraseCodificada = [];

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != ' ') {
      for (let j = 0; j < alfabeto.length; j++) {
        if (frase[i] == alfabeto[j]) {
          if (botao.textContent.includes('Codificar')) {
            fraseCodificada[i] = alfabeto[(j + x) % alfabeto.length];
          }
          else {
            if (j - x >= 0) {
              fraseCodificada[i] = alfabeto[(j - x)];
            }
            else {
              fraseCodificada[i] = alfabeto[alfabeto.length + (j - x)]
            }
          }
        }
      }
    }
    else {
      fraseCodificada[i] = ' ';
    }
  }
  return fraseCodificada.join('');
}

function obterId(id) {
  return document.getElementById(id)
}

function validarTexto(texto) {
  let outAvisos = obterId('outAvisos')
  if(texto == ''){
    outAvisos.textContent = 'Digite o texto a ser convertido';
    return false;
  } else {
    outAvisos.textContent = '';
    return true;
  }
}

function converterParaMaiusculas() {
  let inTexto = obterId('inTexto');

  let texto = inTexto.value;

  if(!validarTexto(texto)){
    inTexto.textContent
    return;
  }

  let maiusculas = texto.toLocaleUpperCase();
  inTexto.value = maiusculas
}

let btnMaiusculas = obterId('btnMaiusculas')
btnMaiusculas.addEventListener('click', converterParaMaiusculas)

function converterParaMinusculas() {
  let inTexto = obterId('inTexto');
  let texto = inTexto.value;

  if(!validarTexto(texto)){
    inTexto.textContent
    return;
  }

  let minusculas = texto.toLocaleLowerCase();
  inTexto.value = minusculas
}

let btnMinusculas = obterId('btnMinusculas')
btnMinusculas.addEventListener('click', converterParaMinusculas)






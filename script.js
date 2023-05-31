function calcularDias(){
  let inData = document.getElementById('inData');
  let outDias = document.getElementById('outDias');
  let outHoras = document.getElementById('outHoras')

  let data = inData.value;

  if(data == '' || data == 0){
    alert('Informe uma data.')
    inData.focus();
    return;
  }

  let hoje = new Date();
  let ateData = new Date();

  let partes = data.split('-')

  ateData.setDate(Number(partes[2]));
  ateData.setMonth(Number(partes[1] - 1));
  ateData.setFullYear(Number(partes[0]));

  let dias = Math.round((ateData - hoje) / 86400000)
  let horas = dias * 24
  outDias.value = dias;
  outHoras.value = horas;
}

let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcularDias)
function getId(id) {
  return document.getElementById(id)
}

function validateDate(date) {
  if (date == '' || date == 0) {
    return false;
  } else {
    return true;
  }
}

function warning(text) {
  let outWarning = getId('outWarning');
  outWarning.textContent = text
}

function calculateDays() {
  let inDate = getId('inDate');
  let inFinalDate = getId('inFinalDate')
  let outDays = getId('outDays');
  let outHours = getId('outHours')
  let outMinutes = getId('outMinutes')
  let outSeconds = getId('outSeconds')


  let date = inDate.value;
  let finalDate = inFinalDate.value

  if (!validateDate(date)) {
    inDate.focus();
    warning('Informe uma data inicial.');
    return;
  } else {
    outWarning.textContent = '';
  }

  if (!validateDate(finalDate)) {
    inFinalDate.focus();
    warning('Informe uma data final.');
    return;
  } else {
    warning('');
  }

  let initialDate = new Date();
  let untilTheDate = new Date();

  let parts = date.split('-')
  let parts2 = finalDate.split('-')

  initialDate.setDate(Number(parts[2]));
  initialDate.setMonth(Number(parts[1] - 1));
  initialDate.setFullYear(Number(parts[0]));

  untilTheDate.setDate(Number(parts2[2]));
  untilTheDate.setMonth(Number(parts2[1] - 1));
  untilTheDate.setFullYear(Number(parts2[0]));

  if (untilTheDate < initialDate) {
    inFinalDate.focus();
    warning('A data final não pode ser menor que a data inicial');
    return;
  }
  warning('');

  let days = Math.round((untilTheDate - initialDate) / 86400000)
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60
  outDays.value = days;
  outHours.value = hours;
  outMinutes.value = minutes;
  outSeconds.value = seconds;

}

let btnCalcular = getId('btnCalcular');
btnCalcular.addEventListener('click', calculateDays)

function enter(event) {
  if(event.key == 'Enter'){
    calculateDays();
  }
}

let inDate = getId('inDate');
let inFinalDate = getId('inFinalDate')

inDate.addEventListener('keydown', calculateDays);
inFinalDate.addEventListener('keydown', calculateDays);



export function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

export function getMonthsOfYear() {
  return Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("default", { month: "long" }),
  );
}

export function getYears() {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= currentYear - 100; i--) {
    years.push(i);
  }
  return years;
}

export function getDate(cadenaFecha) {
  const partesFecha = cadenaFecha.split('-'); 
  const year = parseInt(partesFecha[0], 10); 
  const month = parseInt(partesFecha[1], 10) - 1; 
  const day = parseInt(partesFecha[2], 10); 
  

  const date = new Date(year, month, day);
 
  return date;
}

export function realDateTimeDiff(startDate, endDate){

  const diff = Math.abs(startDate - endDate);
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  if (years > 0) {
    return `${years} ${years === 1 ? "año" : "años"}`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "mes" : "meses"}`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "día" : "días"}`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hora" : "horas"}`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
  } else {
    return `${seconds} ${seconds === 1 ? "segundo" : "segundos"}`;
  }

}

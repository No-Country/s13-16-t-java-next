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


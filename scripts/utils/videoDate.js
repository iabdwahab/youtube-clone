export function calcDate(targetDate) {

  const publishedDate = new Date(targetDate);
  const nowDate = new Date();

  const dateDurationMillisecons = nowDate - publishedDate;
  const dateDurationMinutes = dateDurationMillisecons / 60_000;
  const dateDurationHours = dateDurationMinutes / 60;
  const dateDurationDays = dateDurationHours / 24;
  const dateDurationWeeks = dateDurationDays / 7;
  const dateDurationMonths = dateDurationDays / 30;
  const dateDurationYears = dateDurationMonths / 12;

  if (dateDurationYears >= 1) {
    return publishedFormat(dateDurationYears, 'year');
    
  } else if (dateDurationMonths >= 1) {
    return publishedFormat(dateDurationMonths, 'month');
    
  } else if (dateDurationWeeks >= 1) {
    return publishedFormat(dateDurationWeeks, 'week');
    
  } else if (dateDurationDays >= 1) {
    return publishedFormat(dateDurationDays, 'day');
    
  } else if (dateDurationHours >= 1) {
    return publishedFormat(dateDurationHours, 'hour');

  }

  return publishedFormat(dateDurationMinutes, 'minute');
}


function publishedFormat(number, dateUnit) {
  return `${Math.floor(number)} ${dateUnit}${Math.floor(number) === 1 ? '' : 's'} ago`
}
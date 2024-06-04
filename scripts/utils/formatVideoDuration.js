export function formatDuration(isoFormat) {
  const indexOfT = isoFormat.indexOf('T')

  const times = isoFormat.slice(indexOfT);
  const dates = isoFormat.slice(0, indexOfT);

  const seconds = extractDurationNumber(times, 'S');
  const minutes = extractDurationNumber(times, 'M');
  const hours = extractDurationNumber(times, 'H');
  const days = extractDurationNumber(dates, 'D');
  const weeks = extractDurationNumber(dates, 'W');
  const months = extractDurationNumber(dates, 'M');
  const years = extractDurationNumber(dates, 'Y');

  const durationsArr = [years, months, weeks, days, hours, minutes, seconds];
  let result = [];

  // Loop on "arr" to check which starting time
  for (let i = 0; i < durationsArr.length; i++) {
    if (durationsArr[i]) {
      result = durationsArr.slice(i);
      break;
    }
  }

  result = result.map((el, index) => {
    // Make all times with leading zero
    if (index !== 0) {
      return el.toString().padStart(2, '0');
      
    } else {
      // Make first time not leading by zero
      return el.toString();
    }
  });

  return result.join(':');
}

function extractDurationNumber(string, letter) {
  const regex = new RegExp(`\\d+(?=${letter})`, 'ig')

  if (string.match(regex)) {
    return string.match(regex).join('');
  }

  return 0;
}
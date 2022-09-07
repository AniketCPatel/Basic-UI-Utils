const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const formatDate = (date_string) => {
  const d = new Date(date_string);

  var year = d.getFullYear();
  if (isNaN(year)) {
    return undefined;
  }
  const month = monthNames[d.getMonth()];
  var day = d.getDate();

  if (day < 10) {
    day = '0' + day;
  }
  var formattedDate = day + '-' + month + '-' + year;

  return formattedDate;
};

export const formatDateTime = (date_string) => {
  var ts = new Date(date_string);
  var year = ts.getFullYear();
  if (isNaN(year)) {
    return undefined;
  }
  // const month = monthNames[ts.getMonth()];
  let month = ts.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  var day = ts.getDate();

  if (day < 10) {
    day = '0' + day;
  }
  var formattedDate = day + '-' + month + '-' + year;
  var H = +ts.getHours();
  var h = H % 12 || 12;
  h = h < 10 ? '0' + h : h;
  var ampm = H < 12 ? ' AM' : ' PM';
  var m = +ts.getMinutes();
  m = m < 10 ? '0' + m : m;
  ts = h + ':' + m + ampm;

  return formattedDate + ' ' + ts;
};

export const containSpecialCharacter = (input) => {
  if (/[`!@#$%^&*()+=[\]{?}?;':"\\|,.<>?~]/.test(input)) {
    return true;
  }
  return false;
};

export const exceptNumber = ['e', 'E', '+', '-'];

export const YYYYMMDD = (date_string) => {
  const d = new Date(date_string);
  let year = d.getFullYear();
  if (isNaN(year)) {
    return undefined;
  }
  let month = d.getMonth() + 1;
  let day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  var formattedDate = year + '-' + month + '-' + day;
  return formattedDate;
};

export const DDMMYYYY = (date_string) => {
  const d = new Date(date_string);
  let year = d.getFullYear();
  if (isNaN(year)) {
    return undefined;
  }
  let month = d.getMonth() + 1;
  let day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  var formattedDate = day + '-' + month + '-' + year;
  return formattedDate;
};

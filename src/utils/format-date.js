export const getFormatDate = (date) => {
  const dateFragment = date.split('-');
  const formatDate = dateFragment[2] + '-' + dateFragment[1] + '-' + dateFragment[0];
  return formatDate;
};

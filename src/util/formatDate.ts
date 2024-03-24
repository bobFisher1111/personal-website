export const formatDate = (dateData: any) => {
  const date = new Date(dateData);
  const formatDateToUTC = date.toUTCString().split(" ");
  const dateDay = formatDateToUTC[1];
  const dateMonth = formatDateToUTC[2];
  const dateYear = formatDateToUTC[3];
  const displayFullDate = `${dateMonth}, ${dateDay}, ${dateYear}`;
  return displayFullDate;
};

export default formatDate;
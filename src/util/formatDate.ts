export const formatDate = (dateData: string | number | Date | null) => {
  if (dateData == null || dateData === "") {
    return "";
  }
  const date = new Date(dateData);
  const formatDateToUTC = date.toUTCString().split(" ");
  const dateDay = formatDateToUTC[1];
  const dateMonth = formatDateToUTC[2];
  const dateYear = formatDateToUTC[3];
  const displayFullDate = `${dateMonth}, ${dateDay}, ${dateYear}`;
  return displayFullDate;
};

export default formatDate;

export const getNameFromUrl = () => {
  const currentLocation = window.location.href;
  const getIdFromCurrentLocation = currentLocation.split("/").reverse()[0];
  return (getIdFromCurrentLocation);
}

export default getNameFromUrl;
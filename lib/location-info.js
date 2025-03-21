export async function getLocationData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
}
export async function getLocationLatLongList() {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
}
export async function getLocationLatLong(locationName) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
}

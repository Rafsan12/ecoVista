import { getLocationByName } from "../location-utlis";

export async function GET(request, { params }) {
  const locationData = getLocationByName(params?.name);
  return Response.json(locationData);
}

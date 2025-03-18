import { getLocations } from "./location-utlis";

export async function GET() {
  const locationData = getLocations();
  return Response.json(locationData);
}

import LocationInfo from "@/components/LocationInfo";

export default async function LocationPage({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <LocationInfo lat={latitude} lon={longitude} />;
}

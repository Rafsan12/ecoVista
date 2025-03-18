import WeatherComponent from "@/components/WeatherComponent";

export default async function WeatherPage({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <WeatherComponent lat={latitude} lon={longitude} />;
}

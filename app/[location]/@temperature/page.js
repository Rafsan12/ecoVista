import TemperatureComponent from "@/components/TemperatureComponent";

export default async function TemperaturePage({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <TemperatureComponent lat={latitude} lon={longitude} />;
}

import AQIComponents from "@/components/AQIComponents";

export default async function AqiPage({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <AQIComponents lat={latitude} lon={longitude} />;
}

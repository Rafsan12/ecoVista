import WindComponent from "@/components/WindComponent";

export default async function WindPage({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <WindComponent lat={latitude} lon={longitude} />;
}

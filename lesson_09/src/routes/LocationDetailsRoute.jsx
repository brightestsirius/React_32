import LocationCard from "../components/locations/LocationCard";
import NavigateBtn from "../components/common/NavigateBtn";

export default function LocationDetailsRoute() {
  return (
    <>
      <h3>Location Details Route</h3>
      <NavigateBtn path={"/dashboard/map"}>Back to Map</NavigateBtn>
      <LocationCard />
    </>
  );
}

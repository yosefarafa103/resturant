"use client";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
interface Props {
  position: [number, number];
}
const CompanyLocation = ({ position }: Props) => {
  return (
    <>
      <MapContainer
        //   @ts-ignore
        center={position}
        zoom={13}
        className="h-75 my-5"
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
    </>
  );
};

export default CompanyLocation;

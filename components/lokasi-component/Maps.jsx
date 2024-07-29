"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";

const markerIcon = Leaflet.divIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" id="marker"><defs><path id="a" d="M.06 64V.04H64V64z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"></use></mask><path fill="#B85756" d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32" mask="url(#b)"></path><path fill="#974D4C" d="M43.605 46.272 32.602 40.77a1.341 1.341 0 0 0-1.204 0l-11.003 5.502L32 20.161l11.605 26.111"></path><path fill="#974D4C" d="M17.641 50.501a1.347 1.347 0 0 1-1.231-1.894l14.36-32.308a1.346 1.346 0 0 1 2.46 0l14.36 32.308a1.347 1.347 0 0 1-1.833 1.751L32 43.48l-13.757 6.878a1.339 1.339 0 0 1-.602.143M32 40.628c.206 0 .413.047.602.142l11.003 5.502L32 20.161 20.395 46.272l11.003-5.502c.189-.095.396-.142.602-.142"></path><path fill="#FFFFFE" d="M32 15 17.921 46.677 32 39.638l14.079 7.039L32 15"></path><path fill="#FFFFFE" d="m32 15-1.371-.609-14.078 31.677a1.499 1.499 0 1 0 2.041 1.951L32 41.315l13.408 6.704a1.499 1.499 0 0 0 2.042-1.951L33.371 14.391a1.5 1.5 0 0 0-2.742 0L32 15l-1.371.609L43.01 43.466l-10.339-5.17a1.502 1.502 0 0 0-1.342 0l-10.339 5.17 12.381-27.857L32 15l-1.371.609L32 15"></path></g></svg>`,
  iconSize: [64, 64],
  className: "too",
});

const Maps = () => {
  return (
    <MapContainer center={[-6.5120239, 106.784551]} zoom={25} scrollWheelZoom={false} className=" w-[100%] lg:h-[60%] h-[100%] z-0">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-6.5120239, 106.784551]} icon={markerIcon} />
    </MapContainer>
  );
};

export default Maps;

import React from "react";
import markerIcon from "./../../assets/images/markerIcon.png";

// **** MAP ASSESTS ****
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: markerIcon.src,
  iconSize: [42, 42],
});

const Map = ({ location, style = { width: "100%", height: "500px" } }) => {
  // const position = [24.882876, 67.16952];

  return (
    <MapContainer
      style={style}
      center={location}
      zoom={13}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={ICON} position={location}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

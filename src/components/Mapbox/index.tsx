import css from "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { accessToken } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { usePetData } from "hooks";
import { BodyBold } from "ui/Texts";

export function Mapbox() {
  const [petData, setPetData] = usePetData();
  // acá guardo el valor del input de busqueda
  const [query, setQuery] = useState("");
  const [lng, setLng] = useState(-68.4382);
  const [lat, setLat] = useState(-34.7871);
  const [zoom, setZoom] = useState(9);
  const mapDiv = useRef<HTMLDivElement>(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapDiv.current, // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: zoom, // starting zoom
    });
  }, [mapDiv]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  async function handleClickSearch(e) {
    e.preventDefault();

    const { features } = await (
      await fetch(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          query +
          ".json?country=ar&types=place%2Caddress%2Clocality%2Cneighborhood%2Cregion%2Cdistrict&postcode%2Cpoi&autocomplete=true&fuzzyMatch=true&routing=true&access_token=" +
          accessToken
      )
    ).json();
    const lng = features["0"]?.geometry.coordinates[0];
    const lat = features["0"]?.geometry.coordinates[1];

    setLng(Number(lng));
    setLat(Number(lng));

    setPetData({
      ...petData,
      last_location_lng: lng,
      last_location_lat: lat,
      location: query,
    });

    map.current.flyTo({
      center: [lng, lat],
      zoom: 15,
      speed: 0.8,
      curve: 2,
    });
  }

  function inputChangeHandler(e) {
    setQuery(e.target.value);
  }

  function keydownInputHandler(e) {
    // si no es con form, tengo que agregar esto
    if (e.key == "Enter") {
      // evito que se dispare el submit
      e.preventDefault();
      handleClickSearch(e);
    }
  }

  return (
    <div className={css.container}>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
        rel="stylesheet"
      />
      <label className={css.label}>
        <BodyBold>UBICACIÓN</BodyBold>
      </label>

      <input
        type="text"
        name="location"
        onChange={inputChangeHandler}
        onKeyDown={keydownInputHandler}
        value={query}
        placeholder={location.pathname == "/edit-pet" ? petData.ubi : ""}
        className={css.input}
      />

      <span className={css.redButton} onClick={handleClickSearch}>
        <BodyBold>Buscar</BodyBold>
      </span>

      <div className={css.mapbox} ref={mapDiv}>
        <div className={css.sidebar}>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
    </div>
  );
}

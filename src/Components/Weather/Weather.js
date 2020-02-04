import React, { useState, useEffect, setState } from "react";
import "./Weather.scss";
import { cord } from "../Maps/Maps";
import { getB } from "../Maps/Maps";
import MapGL, { GeolocateControl } from "react-map-gl";

function Weather() {
  const [city, setItems] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, getIcon] = useState("04d");
  const [Long, getLong] = useState();
  let [Lati, getLat] = useState();

  const [searce, setSearce] = useState("");

  const [click, setClick] = useState("rya");
  const [PH, setPH] = useState("Enter location"); // sertter placeholder

  useEffect(() => {
    fetchItems();
  }, [click]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        click +
        "&units=Metric&appid=a59f23e49b1ddf43f63930034fa5bcfb"
    );

    const items = await data.json();
    const name = city;
    const temp2 = temp;
    const weather2 = weather;
    const icon2 = icon;
    const long_s = Long;
    const lati_s = Lati;
    //setSearce("Enter location:");

    console.log(items);
    try {
      setItems(items.name);
      setTemp(items.main.temp);
      setWeather(items.weather[0].description);
      getIcon(items.weather[0].icon);
      getLat(items.coord.lat);
      getLong(items.coord.lon);

      document.getElementById("myH2").style.color = "#ffffff";
    } catch (error) {
      setItems(name);
      setTemp(temp2);
      setWeather(weather2);
      getIcon(icon2);
      setSearce("Error: Invalid Input");
      getLat(lati_s);
      getLong(long_s);

      document.getElementById("myH2").style.color = "#ff0000";
    }
  };
  const updateSearch = e => {
    setSearce(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setClick(searce);
  };

  return (
    <div className="Weather">
      <div className="margin">
        <div>
          <h1>Weather</h1>
        </div>
        <form onSubmit={getSearch} className="search-form">
          <input
            id="myH2"
            type="text"
            className="search-bar"
            value={searce}
            onChange={updateSearch}
            placeholder="Enter location:"
          />
          <button type="submit" className="search-button">
            &#128269;
          </button>
        </form>

        <h2>{city}</h2>
        <p className="mag ">{temp}&#8451;</p>
        <p>{weather}</p>
      </div>
    </div>
  );
}

export default Weather;

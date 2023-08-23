import React from "react";

const City = (city) => {
  console.log(city);
  return (
    <div>
      <div>
        <h1>{city.city.main.temp}</h1>
        <h1>{city.city.name}</h1>
        <h1>{city.city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default City;

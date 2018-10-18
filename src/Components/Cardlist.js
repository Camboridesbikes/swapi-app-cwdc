import React from 'react';
import Card from './Card';

const Cardlist = ({planets}) => {

  const cardComponent = planets.map((planet, i) => {
    return(
      <Card
        key={i}
        id={i}
        name={planets[i].name}
        climate={planets[i].climate}
        population={planets[i].population}
        diameter={planets[i].diameter}
        />
    );
  });
  return(
    <div>
      {cardComponent}
    </div>
  );
}

export default Cardlist;

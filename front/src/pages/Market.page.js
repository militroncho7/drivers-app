import React, {useEffect, useState} from 'react';
import Pilot from 'components/Pilot';

const loadedPilots = [
  {
    id: 1,
    name: 'Barrichello',
    image: 'http://placekitten.com/200/300',
    teamName: 'Ferrari',
    teamImage: 'http://placekitten.com/200/300',
    price: 1000
  },
  {
    id: 2,
    name: 'Alonso',
    image: 'http://placekitten.com/200/300',
    teamName: 'McLaren',
    teamImage: 'http://placekitten.com/200/300',
    price: 2000
  }
];

export default function Market() {
  const [pilots, setPilots] = useState([]);

  useEffect(function () {
    setTimeout(function () {
      setPilots(loadedPilots);
    }, 5000);
  }, []);

  if (pilots.length === 0) {
    return <div>cargando...</div>;
  }
  return (
    <div class="pilots-list">
      {pilots.map((pilot) => (
        <Pilot {...pilot} />
      ))}
    </div>
  );
}

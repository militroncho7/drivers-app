import React, { useEffect, useState } from "react";

//Components
import Nav from "components/Nav/Nav";
import Pilot from "components/Pilot";
import Footer from "components/Footer/Footer";

export default function Team() {
  const [pilots, setPilots] = useState([]);

  useEffect(function () {
    setTimeout(function () {
      setPilots(loadedPilots);
    }, 1000);
  }, []);

  if (pilots.length === 0) {
    return <div>cargando...</div>;
  }
  return (
    <>
      <Nav />

      <div className="section-market">
        <h3>Mi Equipo</h3>
        {pilots.map((pilot) => (
          <Pilot {...pilot} />
        ))}
      </div>

      <Footer />
    </>
  );
}

const loadedPilots = [
  {
    driverId: "leclerc",
    permanentNumber: "16",
    code: "LEC",
    url: "http://en.wikipedia.org/wiki/Charles_Leclerc",
    givenName: "Charles",
    familyName: "Leclerc",
    dateOfBirth: "1997-10-16",
    nationality: "Monegasque",
    initialValue: 80000000,
    market: true,
    img:
      "https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/leclerc_pdg407.png",
    car:
      "https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/ferrari_eyjgx4.png",
    logo:
      "https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/ferrari-logo_hifosx.png",
  },
  {
    driverId: "ricciardo",
    permanentNumber: "3",
    code: "RIC",
    url: "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
    givenName: "Daniel",
    familyName: "Ricciardo",
    dateOfBirth: "1989-07-01",
    nationality: "Australian",
    initialValue: 55000000,
    market: true,
    img:
      "https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959334/drivers/pilotos/ricciardo_adiasb.png",
    car:
      "https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/renault_yle8id.png",
    logo:
      "https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/renault-logo_wqlklq.png",
  },
];

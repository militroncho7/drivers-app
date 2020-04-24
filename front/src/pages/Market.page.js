import React, {useEffect, useState} from 'react';
import axios from 'axios';

//Components
import Nav from 'components/Nav/Nav';
import Status from 'components/Status/index';
import Pilot from 'components/Pilot';
import Footer from 'components/Footer/Footer';
import Loading from 'components/Loading/index';
import getLoggedUser from 'utils/getLoggedUser';

export default function Market() {
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const user = getLoggedUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const response = await axios.get(
        `http://localhost:1234/league/${user.league}/drivers`,
        config
      );
      setPilots(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  if (pilots.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <Status />

      <div className="section-market">
        {pilots.map((pilot) => (
          <Pilot {...pilot} key={`pilot--${pilot.driverId}`} />
        ))}
      </div>

      <Footer />
    </>
  );
}

// const loadedPilots = [
// {
//   driverId: 'albon',
//   permanentNumber: '23',
//   code: 'ALB',
//   url: 'http://en.wikipedia.org/wiki/Alexander_Albon',
//   givenName: 'Alexander',
//   familyName: 'Albon',
//   dateOfBirth: '1996-03-23',
//   nationality: 'Thai',
//   initialValue: 75000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/albon_cwdqb5.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/redbull_gfhdht.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/redbull-logo_wkspuu.png'
// },
// {
//   driverId: 'bottas',
//   permanentNumber: '77',
//   code: 'BOT',
//   url: 'http://en.wikipedia.org/wiki/Valtteri_Bottas',
//   givenName: 'Valtteri',
//   familyName: 'Bottas',
//   dateOfBirth: '1989-08-28',
//   nationality: 'Finnish',
//   initialValue: 85000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/bottas_c5jaip.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/mercedes_n34yi5.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/mercedes-logo_yunevl.png'
// },
// {
//   driverId: 'gasly',
//   permanentNumber: '10',
//   code: 'GAS',
//   url: 'http://en.wikipedia.org/wiki/Pierre_Gasly',
//   givenName: 'Pierre',
//   familyName: 'Gasly',
//   dateOfBirth: '1996-02-07',
//   nationality: 'French',
//   initialValue: 55000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/gasly_t0rfyk.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/alphatauri_y1fh2g.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/alphatauri_y1fh2g.png'
// },
// {
//   driverId: 'giovinazzi',
//   permanentNumber: '99',
//   code: 'GIO',
//   url: 'http://en.wikipedia.org/wiki/Antonio_Giovinazzi',
//   givenName: 'Antonio',
//   familyName: 'Giovinazzi',
//   dateOfBirth: '1993-12-14',
//   nationality: 'Italian',
//   initialValue: 10000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/giovinazzi_n2jnn7.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/alfa-romeo_mrjgbs.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/alfa-romeo-logo_hoj4co.png'
// },
// {
//   driverId: 'grosjean',
//   permanentNumber: '8',
//   code: 'GRO',
//   url: 'http://en.wikipedia.org/wiki/Romain_Grosjean',
//   givenName: 'Romain',
//   familyName: 'Grosjean',
//   dateOfBirth: '1986-04-17',
//   nationality: 'French',
//   initialValue: 10000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/grosjean_vakdnj.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/haas_vdiokg.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/haas-logo_vp84hj.png'
// },
// {
//   driverId: 'hamilton',
//   permanentNumber: '44',
//   code: 'HAM',
//   url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
//   givenName: 'Lewis',
//   familyName: 'Hamilton',
//   dateOfBirth: '1985-01-07',
//   nationality: 'British',
//   initialValue: 100000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/hamilton_euw0w6.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/mercedes_n34yi5.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/mercedes-logo_yunevl.png'
// },
// {
//   driverId: 'hulkenberg',
//   permanentNumber: '27',
//   code: 'HUL',
//   url: 'http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg',
//   givenName: 'Nico',
//   familyName: 'Hülkenberg',
//   dateOfBirth: '1987-08-19',
//   nationality: 'German',
//   initialValue: 25000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1587198413/drivers/pilotos/Hulkenberg_pg9nru.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/renault_yle8id.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/renault-logo_wqlklq.png'
// },
// {
//   driverId: 'kubica',
//   permanentNumber: '88',
//   code: 'KUB',
//   url: 'http://en.wikipedia.org/wiki/Robert_Kubica',
//   givenName: 'Robert',
//   familyName: 'Kubica',
//   dateOfBirth: '1984-12-07',
//   nationality: 'Polish',
//   initialValue: 5000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1587198413/drivers/pilotos/kubica_pbxkbd.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/williams_qjkau9.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/williams-logo_xiihmq.png'
// },
// {
//   driverId: 'kvyat',
//   permanentNumber: '26',
//   code: 'KVY',
//   url: 'http://en.wikipedia.org/wiki/Daniil_Kvyat',
//   givenName: 'Daniil',
//   familyName: 'Kvyat',
//   dateOfBirth: '1994-04-26',
//   nationality: 'Russian',
//   initialValue: 30000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/kviat_pqmp3w.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/alphatauri_y1fh2g.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/haas-logo_vp84hj.png'
// },
// {
//   driverId: 'leclerc',
//   permanentNumber: '16',
//   code: 'LEC',
//   url: 'http://en.wikipedia.org/wiki/Charles_Leclerc',
//   givenName: 'Charles',
//   familyName: 'Leclerc',
//   dateOfBirth: '1997-10-16',
//   nationality: 'Monegasque',
//   initialValue: 80000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/leclerc_pdg407.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/ferrari_eyjgx4.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/ferrari-logo_hifosx.png'
// },
// {
//   driverId: 'kevin_magnussen',
//   permanentNumber: '20',
//   code: 'MAG',
//   url: 'http://en.wikipedia.org/wiki/Kevin_Magnussen',
//   givenName: 'Kevin',
//   familyName: 'Magnussen',
//   dateOfBirth: '1992-10-05',
//   nationality: 'Danish',
//   initialValue: 15000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/magnussen_tcnrbu.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/haas_vdiokg.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/haas-logo_vp84hj.png'
// },
// {
//   driverId: 'norris',
//   permanentNumber: '4',
//   code: 'NOR',
//   url: 'http://en.wikipedia.org/wiki/Lando_Norris',
//   givenName: 'Lando',
//   familyName: 'Norris',
//   dateOfBirth: '1999-11-13',
//   nationality: 'British',
//   initialValue: 40000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959333/drivers/pilotos/norris_d51tk6.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/mclaren_vbuxmp.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/mcalaren-logo_ii7r1q.png'
// },
// {
//   driverId: 'perez',
//   permanentNumber: '11',
//   code: 'PER',
//   url: 'http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez',
//   givenName: 'Sergio',
//   familyName: 'Pérez',
//   dateOfBirth: '1990-01-26',
//   nationality: 'Mexican',
//   initialValue: 45000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586960525/drivers/pilotos/perez_hikut8.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/racing-point_m5h7cf.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/racing-point-logo_b5veat.png'
// },
// {
//   driverId: 'raikkonen',
//   permanentNumber: '7',
//   code: 'RAI',
//   url: 'http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
//   givenName: 'Kimi',
//   familyName: 'Räikkönen',
//   dateOfBirth: '1979-10-17',
//   nationality: 'Finnish',
//   initialValue: 35000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959334/drivers/pilotos/raikkonen_sqtu6b.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/alfa-romeo_mrjgbs.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/alfa-romeo-logo_hoj4co.png'
// },
// {
//   driverId: 'ricciardo',
//   permanentNumber: '3',
//   code: 'RIC',
//   url: 'http://en.wikipedia.org/wiki/Daniel_Ricciardo',
//   givenName: 'Daniel',
//   familyName: 'Ricciardo',
//   dateOfBirth: '1989-07-01',
//   nationality: 'Australian',
//   initialValue: 55000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959334/drivers/pilotos/ricciardo_adiasb.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/renault_yle8id.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/renault-logo_wqlklq.png'
// },
// {
//   driverId: 'russell',
//   permanentNumber: '63',
//   code: 'RUS',
//   url: 'http://en.wikipedia.org/wiki/George_Russell_(racing_driver)',
//   givenName: 'George',
//   familyName: 'Russell',
//   dateOfBirth: '1998-02-15',
//   nationality: 'British',
//   initialValue: 5000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959334/drivers/pilotos/russel_m8xm23.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/williams_qjkau9.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/williams-logo_xiihmq.png'
// },
// {
//   driverId: 'sainz',
//   permanentNumber: '55',
//   code: 'SAI',
//   url: 'http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.',
//   givenName: 'Carlos',
//   familyName: 'Sainz',
//   dateOfBirth: '1994-09-01',
//   nationality: 'Spanish',
//   initialValue: 60000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959334/drivers/pilotos/sainz_eotwj4.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/mclaren_vbuxmp.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/mcalaren-logo_ii7r1q.png'
// },
// {
//   driverId: 'stroll',
//   permanentNumber: '18',
//   code: 'STR',
//   url: 'http://en.wikipedia.org/wiki/Lance_Stroll',
//   givenName: 'Lance',
//   familyName: 'Stroll',
//   dateOfBirth: '1998-10-29',
//   nationality: 'Canadian',
//   initialValue: 20000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586960525/drivers/pilotos/stroll_o9ztjn.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/racing-point_m5h7cf.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/racing-point-logo_b5veat.png'
// },
// {
//   driverId: 'max_verstappen',
//   permanentNumber: '33',
//   code: 'VER',
//   url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
//   givenName: 'Max',
//   familyName: 'Verstappen',
//   dateOfBirth: '1997-09-30',
//   nationality: 'Dutch',
//   initialValue: 90000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959334/drivers/pilotos/verstappen_iodxox.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/redbull_gfhdht.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959420/drivers/cars/redbull-logo_wkspuu.png'
// },
// {
//   driverId: 'vettel',
//   permanentNumber: '5',
//   code: 'VET',
//   url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
//   givenName: 'Sebastian',
//   familyName: 'Vettel',
//   dateOfBirth: '1987-07-03',
//   nationality: 'German',
//   initialValue: 95000000,
//   market: true,
//   img:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959334/drivers/pilotos/vettel_btgwox.png',
//   car:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/ferrari_eyjgx4.png',
//   logo:
//     'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959419/drivers/cars/ferrari-logo_hifosx.png'
// }
// ];

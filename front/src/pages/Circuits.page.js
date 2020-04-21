import React, {useEffect, useState} from 'react';
import Loading from 'components/Loading/index';

//Components
import Nav from 'components/Nav/Nav';
import Circuits from 'components/Circuits/index';
import Footer from 'components/Footer/Footer';

export default function Market() {
  const [circuits, setCircuits] = useState([]);

  useEffect(function () {
    setTimeout(function () {
      setCircuits(loadedCircuits);
    }, 500);
  }, []);

  if (circuits.length === 0) {
    return <Loading />;
  }
  return (
    <>
      <Nav />

      <div className="section-market">
        {circuits.map((pilot) => (
          <Circuits {...pilot} />
        ))}
      </div>

      <Footer />
    </>
  );
}

const loadedCircuits = [
  {
    season: '2019',
    round: '1',
    url: 'https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix',
    raceName: 'Australian Grand Prix',
    circuitId: 'albert_park',
    url: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
    circuitName: 'Albert Park Grand Prix Circuit',
    lat: '-37.8497',
    long: '144.968',
    locality: 'Melbourne',
    country: 'Australia',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959471/drivers/circuits/australia_avijnt.jpg',
    date: '2019-03-17',
    time: '05:10:00Z'
  },
  {
    season: '2019',
    round: '2',
    url: 'https://en.wikipedia.org/wiki/2019_Bahrain_Grand_Prix',
    raceName: 'Bahrain Grand Prix',
    circuitId: 'bahrain',
    url: 'http://en.wikipedia.org/wiki/Bahrain_International_Circuit',
    circuitName: 'Bahrain International Circuit',
    lat: '26.0325',
    long: '50.5106',
    locality: 'Sakhir',
    country: 'Bahrain',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959471/drivers/circuits/barhein_fcmfiq.jpg',
    date: '2019-03-31',
    time: '15:10:00Z'
  },
  {
    season: '2019',
    round: '3',
    url: 'https://en.wikipedia.org/wiki/2019_Chinese_Grand_Prix',
    raceName: 'Chinese Grand Prix',

    circuitId: 'shanghai',
    url: 'http://en.wikipedia.org/wiki/Shanghai_International_Circuit',
    circuitName: 'Shanghai International Circuit',
    lat: '31.3389',
    long: '121.22',
    locality: 'Shanghai',
    country: 'China',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959471/drivers/circuits/china_ykpavg.jpg',
    date: '2019-04-14',
    time: '06:10:00Z'
  },
  {
    season: '2019',
    round: '4',
    url: 'https://en.wikipedia.org/wiki/2019_Azerbaijan_Grand_Prix',
    raceName: 'Azerbaijan Grand Prix',
    circuitId: 'BAK',
    url: 'http://en.wikipedia.org/wiki/Baku_City_Circuit',
    circuitName: 'Baku City Circuit',
    lat: '40.3725',
    long: '49.8533',
    locality: 'Baku',
    country: 'Azerbaijan',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959471/drivers/circuits/azerbaiyan_b1vnf4.jpg',
    date: '2019-04-28',
    time: '12:10:00Z'
  },
  {
    season: '2019',
    round: '5',
    url: 'https://en.wikipedia.org/wiki/2019_Spanish_Grand_Prix',
    raceName: 'Spanish Grand Prix',
    circuitId: 'catalunya',
    url: 'http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya',
    circuitName: 'Circuit de Barcelona-Catalunya',
    lat: '41.57',
    long: '2.26111',
    locality: 'Montmeló',
    country: 'Spain',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959472/drivers/circuits/espana_qq45lu.jpg',
    date: '2019-05-12',
    time: '13:10:00Z'
  },
  {
    season: '2019',
    round: '6',
    url: 'https://en.wikipedia.org/wiki/2019_Monaco_Grand_Prix',
    raceName: 'Monaco Grand Prix',
    circuitId: 'monaco',
    url: 'http://en.wikipedia.org/wiki/Circuit_de_Monaco',
    circuitName: 'Circuit de Monaco',
    lat: '43.7347',
    long: '7.42056',
    locality: 'Monte-Carlo',
    country: 'Monaco',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959472/drivers/circuits/monaco_wmrxwd.jpg',
    date: '2019-05-26',
    time: '13:10:00Z'
  },
  {
    season: '2019',
    round: '7',
    url: 'https://en.wikipedia.org/wiki/2019_Canadian_Grand_Prix',
    raceName: 'Canadian Grand Prix',
    circuitId: 'villeneuve',
    url: 'http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve',
    circuitName: 'Circuit Gilles Villeneuve',
    lat: '45.5',
    long: '-73.5228',
    locality: 'Montreal',
    country: 'Canada',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959471/drivers/circuits/canada_fnfr4t.jpg',
    date: '2019-06-09',
    time: '18:10:00Z'
  },
  {
    season: '2019',
    round: '8',
    url: 'https://en.wikipedia.org/wiki/2019_French_Grand_Prix',
    raceName: 'French Grand Prix',
    circuitId: 'ricard',
    url: 'http://en.wikipedia.org/wiki/Paul_Ricard_Circuit',
    circuitName: 'Circuit Paul Ricard',
    lat: '43.2506',
    long: '5.79167',
    locality: 'Le Castellet',
    country: 'France',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959472/drivers/circuits/francia_wvj9e1.jpg',
    date: '2019-06-23',
    time: '13:10:00Z'
  },
  {
    season: '2019',
    round: '9',
    url: 'https://en.wikipedia.org/wiki/2019_Austrian_Grand_Prix',
    raceName: 'Austrian Grand Prix',
    circuitId: 'red_bull_ring',
    url: 'http://en.wikipedia.org/wiki/Red_Bull_Ring',
    circuitName: 'Red Bull Ring',
    lat: '47.2197',
    long: '14.7647',
    locality: 'Spielburg',
    country: 'Austria',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959471/drivers/circuits/austria_fyou0b.jpg',
    date: '2019-06-30',
    time: '13:10:00Z'
  },
  {
    season: '2019',
    round: '10',
    url: 'https://en.wikipedia.org/wiki/2019_British_Grand_Prix',
    raceName: 'British Grand Prix',
    circuitId: 'silverstone',
    url: 'http://en.wikipedia.org/wiki/Silverstone_Circuit',
    circuitName: 'Silverstone Circuit',
    lat: '52.0786',
    long: '-1.01694',
    locality: 'Silverstone',
    country: 'UK',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1587203905/drivers/circuits/gran-bretana_mtrh0a.jpg',
    date: '2019-07-14',
    time: '13:10:00Z'
  },
  {
    season: '2019',
    round: '12',
    url: 'https://en.wikipedia.org/wiki/2019_Hungarian_Grand_Prix',
    raceName: 'Hungarian Grand Prix',
    circuitId: 'hungaroring',
    url: 'http://en.wikipedia.org/wiki/Hungaroring',
    circuitName: 'Hungaroring',
    lat: '47.5789',
    long: '19.2486',
    locality: 'Budapest',
    country: 'Hungary',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959472/drivers/circuits/hungria_b5cter.jpg',
    date: '2019-08-04',
    time: '13:10:00Z'
  },
  {
    season: '2019',
    round: '13',
    url: 'https://en.wikipedia.org/wiki/2019_Belgian_Grand_Prix',
    raceName: 'Belgian Grand Prix',
    circuitId: 'spa',
    url: 'http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps',
    circuitName: 'Circuit de Spa-Francorchamps',
    lat: '50.4372',
    long: '5.97139',
    locality: 'Spa',
    country: 'Belgium',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959471/drivers/circuits/belgica_pcdibr.jpg',
    date: '2019-09-01',
    time: '13:10:00Z'
  },
  {
    season: '2019',
    round: '14',
    url: 'https://en.wikipedia.org/wiki/2019_Italian_Grand_Prix',
    raceName: 'Italian Grand Prix',
    circuitId: 'monza',
    url: 'http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza',
    circuitName: 'Autodromo Nazionale di Monza',
    lat: '45.6156',
    long: '9.28111',
    locality: 'Monza',
    country: 'Italy',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959472/drivers/circuits/italia_l6trpy.jpg',
    date: '2019-09-08',
    time: '13:10:00Z'
  },
  {
    season: '2019',
    round: '15',
    url: 'https://en.wikipedia.org/wiki/2019_Singapore_Grand_Prix',
    raceName: 'Singapore Grand Prix',
    circuitId: 'marina_bay',
    url: 'http://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit',
    circuitName: 'Marina Bay Street Circuit',
    lat: '1.2914',
    long: '103.864',
    locality: 'Marina Bay',
    country: 'Singapore',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959472/drivers/circuits/singapur_kjdg95.jpg',
    date: '2019-09-22',
    time: '12:10:00Z'
  },
  {
    season: '2019',
    round: '16',
    url: 'https://en.wikipedia.org/wiki/2019_Russian_Grand_Prix',
    raceName: 'Russian Grand Prix',
    circuitId: 'sochi',
    url: 'http://en.wikipedia.org/wiki/Sochi_Autodrom',
    circuitName: 'Sochi Autodrom',
    lat: '43.4057',
    long: '39.9578',
    locality: 'Sochi',
    country: 'Russia',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959472/drivers/circuits/rusia_e1fajz.jpg',
    date: '2019-09-29',
    time: '11:10:00Z'
  },
  {
    season: '2019',
    round: '17',
    url: 'https://en.wikipedia.org/wiki/2019_Japanese_Grand_Prix',
    raceName: 'Japanese Grand Prix',
    circuitId: 'suzuka',
    url: 'http://en.wikipedia.org/wiki/Suzuka_Circuit',
    circuitName: 'Suzuka Circuit',
    lat: '34.8431',
    long: '136.541',
    locality: 'Suzuka',
    country: 'Japan',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959472/drivers/circuits/japon_oc9xwh.jpg',
    date: '2019-10-13',
    time: '05:10:00Z'
  },
  {
    season: '2019',
    round: '18',
    url: 'https://en.wikipedia.org/wiki/2019_Mexican_Grand_Prix',
    raceName: 'Mexican Grand Prix',
    circuitId: 'rodriguez',
    url: 'http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez',
    circuitName: 'Autódromo Hermanos Rodríguez',
    lat: '19.4042',
    long: '-99.0907',
    locality: 'Mexico City',
    country: 'Mexico',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959472/drivers/circuits/mexico_dquoj4.jpg',
    date: '2019-10-27',
    time: '19:10:00Z'
  },
  {
    season: '2019',
    round: '19',
    url: 'https://en.wikipedia.org/wiki/2019_United_States_Grand_Prix',
    raceName: 'United States Grand Prix',
    circuitId: 'americas',
    url: 'http://en.wikipedia.org/wiki/Circuit_of_the_Americas',
    circuitName: 'Circuit of the Americas',
    lat: '30.1328',
    long: '-97.6411',
    locality: 'Austin',
    country: 'USA',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959471/drivers/circuits/eeuu_eh04c2.jpg',
    date: '2019-11-03',
    time: '19:10:00Z'
  },
  {
    season: '2019',
    round: '20',
    url: 'https://en.wikipedia.org/wiki/2019_Brazilian_Grand_Prix',
    raceName: 'Brazilian Grand Prix',
    circuitId: 'interlagos',
    url: 'http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace',
    circuitName: 'Autódromo José Carlos Pace',
    lat: '-23.7036',
    long: '-46.6997',
    locality: 'São Paulo',
    country: 'Brazil',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959471/drivers/circuits/brasil_gusgye.jpg',
    date: '2019-11-17',
    time: '17:10:00Z'
  },
  {
    season: '2019',
    round: '21',
    url: 'https://en.wikipedia.org/wiki/2019_Abu_Dhabi_Grand_Prix',
    raceName: 'Abu Dhabi Grand Prix',
    circuitId: 'yas_marina',
    url: 'http://en.wikipedia.org/wiki/Yas_Marina_Circuit',
    circuitName: 'Yas Marina Circuit',
    lat: '24.4672',
    long: '54.6031',
    locality: 'Abu Dhabi',
    country: 'UAE',
    img:
      'https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586959459/drivers/circuits/abu-dhabi_fkutot.jpg',
    date: '2019-12-01',
    time: '13:10:00Z'
  }
];

import React, {useState} from 'react';

//Components
import Button from 'components/ButtonLink/Button';

export default function Pilot({
  driverId,
  givenName,
  familyName,
  img,
  permanentNumber,
  initialValue,
  dateOfBirth,
  car,
  market
}) {
  // const [fichar, setFichar] = useState('');
  // function handleOnClick() {
  //   console.log(fichar);
  //   setFichar(!market);
  // }
  return (
    <>
      <div className="card-market">
        <div className="card-pilot">
          <div className="pilot-image">
            <img src={img} />
          </div>
          <div className="pilot-data">
            <div>
              <ul>
                <li>
                  <h3 className="line">
                    {givenName} {familyName}
                  </h3>
                </li>
                <li>
                  <b>Numero:</b> {permanentNumber}
                </li>
                <li>
                  <b>Valor:</b> {initialValue} €
                </li>
                <li>
                  <b>Fecha Nacimiento:</b> {dateOfBirth}
                </li>
              </ul>
            </div>
            <div>
              <img className="car-image" src={car} />
            </div>
          </div>
        </div>
        <div>
          <Button className="button">
            <b>FICHAR</b>
          </Button>
        </div>
      </div>
    </>
  );
}

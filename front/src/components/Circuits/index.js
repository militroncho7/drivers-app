import React from "react";

//Components
import Button from "components/ButtonLink/Button";

export default function Circuit({
  circuitId,
  raceName,
  circuitName,
  locality,
  country,
  img,
  date,
  onClickSignUp,
}) {
  return (
    <>
      <div className="card-market">
        <div className="card-circuit">
          <div className="pilot-image">
            <img src={img} />
          </div>
          <div className="pilot-data">
            <div>
              <ul>
                <li>
                  <h3>{raceName}</h3>
                </li>
                <li>
                  <b>Nombre:</b> {circuitName}
                </li>
                <li>
                  <b>Ciudad:</b> {locality}
                </li>
                <li>
                  <b>País:</b> {country}
                </li>
                <li>
                  <b>Fecha: </b> {date}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

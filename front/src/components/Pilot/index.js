import React, {useState} from 'react';
import getLoggedUser from 'utils/getLoggedUser';

//Components
import Button from 'components/ButtonLink/Button';

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)'
  },
  modalContent: {
    background: 'white',
    width: '400px',
    height: 'auto',
    padding: '25px'
  }
};

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
  const [isConfirming, setIsConfirming] = useState(false);
  function handleSignUp() {
    setIsConfirming(true);
  }

  function cancelSignUp() {
    setIsConfirming(false);
  }

  function confirmSignUp() {
    // @todo
  }

  const user = getLoggedUser();
  const canSignUp = initialValue < user.money;
  return (
    <>
      {isConfirming && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p>¿Confirmas el fichaje?</p>
            <button onClick={cancelSignUp}>No</button>
            <button onClick={confirmSignUp}>Sí</button>
          </div>
        </div>
      )}
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
        {canSignUp && (
          <div>
            <button className="button" onClick={handleSignUp}>
              <b>FICHAR</b>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

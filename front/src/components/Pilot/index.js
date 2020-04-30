import React, {useState} from 'react';
import axios from 'axios';
import useUserContext from 'hooks/useUserContext';
import updateLoggedUser from 'utils/updateLoggedUser';

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
  _id,
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
  const [isSigninUp, setIsSigninUp] = useState(false);
  const [error, setError] = useState(null);
  const {user, setUser} = useUserContext();
  function handleSignUp() {
    setIsConfirming(true);
  }

  function cancelSignUp() {
    setIsConfirming(false);
  }

  const confirmSignUp = async (e, value) => {
    e.preventDefault();

    const response = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      console.log(user.league._id, _id);
      return await axios.get(`http://localhost:1234/league/${user.league._id}/sign-up/${_id}`);
    };
    console.log('1');
    await response().then((response) => console.log('esto es response', response));
    console.log('2');

    setIsSigninUp(false);
  };

  const canSignUp = initialValue <= user.money;
  return (
    <>
      {isConfirming && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p>¿Confirmas el fichaje?</p>
            <button onClick={cancelSignUp}>No</button>
            <button onClick={(e) => confirmSignUp(e, e.target.value)} value={_id}>
              Sí
            </button>
            {isSigninUp && <div>Fichando...</div>}
            {error && <div>{error}</div>}
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

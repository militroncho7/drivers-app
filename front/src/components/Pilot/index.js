import React, {useState} from 'react';
import axios from 'axios';
import useUserContext from 'hooks/useUserContext';
import updateLoggedUser from 'utils/updateLoggedUser';

//Components
import Button from 'components/ButtonLink/Button';
import axios from 'axios';

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

<<<<<<< HEAD
  async function confirmSignUp(driverId) {
    try {
      const user = getLoggedUser();
=======
  async function confirmSignUp() {
    try {
>>>>>>> feature/gerardo
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
<<<<<<< HEAD
      const response = await axios.get('http:', {id: driverId}, config);
    } catch (exception) {}
    // console.log(exception)
=======
      setIsSigninUp(true);
      const response = await axios.post(
        `http://localhost:1234/league/${user.league._id}/sign-up/${_id}`,
        null,
        config
      );
      setUser(response.data);
      setIsSigninUp(false);
      updateLoggedUser({
        ...user,
        drivers: response.data.drivers
      });
      // setUser({
      //   ...user,
      //   money: 10
      // });
    } catch (exception) {
      setError(exception.response.data.message);
      setIsSigninUp(false);
    }
>>>>>>> feature/gerardo
  }

  const canSignUp = initialValue <= user.money;
  return (
    <>
      {isConfirming && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p>¿Confirmas el fichaje?</p>
            <button onClick={cancelSignUp}>No</button>
            <button onClick={confirmSignUp}>Sí</button>
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

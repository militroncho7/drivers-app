export default function updateLoggedUser(user) {
  window.localStorage.setItem('USER_API_TOKEN', JSON.stringify(user));
}

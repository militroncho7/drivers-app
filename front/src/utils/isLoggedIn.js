export default function isLoggedIn() {
  return !!window.localStorage.getItem('USER_API_TOKEN');
}

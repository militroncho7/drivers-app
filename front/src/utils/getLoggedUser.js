export default function getLoggedUser() {
  const user = window.localStorage.getItem('USER');
  if (!user) {
    throw new Error('user does not exist');
  }
  return JSON.parse(user);
}

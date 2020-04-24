import React, {createContext, useState} from 'react';

const UserContext = createContext({
  user: null,
  setUser: () => {}
});

export default UserContext;

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

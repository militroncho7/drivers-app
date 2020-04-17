import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

//Components
import LeagueView from "components/screens/Register/League";

export default function League() {
  const [newLeague, setNewleague] = useState("");
  const [error, setError] = useState("");
  const [isCreateLeague, setIsCreateLeague] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:1234/create/league", {
        newLeague,
      });
      const data = JSON.parse(response.data);
      setIsCreateLeague(true);
    } catch (exception) {
      setError(exception.message);
    }
  }

  function handleChangeNewLeague(event) {
    setNewleague(event.target.value);
  }

  // if (isCreateLeague) {
  //   return <Redirect to="/market" />;
  // }

  return (
    <LeagueView
      onSubmit={handleSubmit}
      onChangeName={handleChangeNewLeague}
      error={error}
      newLeague={newLeague}
      value="Go!"
    />
  );
}

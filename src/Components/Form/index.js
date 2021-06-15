import React from "react";
import Armado from "../Armado";

const Form = ({ user, loading, error, buttonAction, changeUser }) => (
  <div className="formContainer">
    <input
      type="text"
      className="userInput"
      value={user}
      placeholder="Buscar usuário"
      onChange={e => changeUser(e.target.value)}
    />
    <button className="searchButton" onClick={buttonAction}>
      {loading ? <Armado /> : "Buscar"}
    </button>

    <p className="errorText">{error}</p>
  </div>
);

export default Form;

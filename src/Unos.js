import React from "react";
import "./Unos.css";

const Unos = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const first = e.target.unos.value;
    document.getElementById("demo").innerHTML = first;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Unesi tekst koji zelis da se prikaze</h3>
        <br />
        <input type="text" name="unos" placeholder="Unesi" />
        <br />
        <button className="dugme">Unesi</button>
      </form>
    </div>
  );
};

export default Unos;

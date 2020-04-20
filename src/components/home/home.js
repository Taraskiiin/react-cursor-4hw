import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home__inner">
      <div className="home__inner-shadow">
        <h1 className="home__title">Испекаем куличики из песка</h1>
        <a href="tel:0675582860" className="home__number">
          +380675582860 Lars
        </a>
      </div>
    </div>
  );
}
export default Home;

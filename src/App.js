import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/home.js";
import Posts from "./components/posts/posts.js";
import Photos from "./components/photos/photos";
import Contacts from "./components/contacts/contacts";
import { Route, HashRouter } from "react-router-dom";

const contacts = [
  {
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male",
  },
  {
    id: 2,
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female",
  },
  {
    id: 3,
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+3806666666",
    gender: "",
  },
  {
    id: 4,
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    id: 5,
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319520",
    gender: "male",
  },
];

function App() {
  return (
    <HashRouter>
      <header className="header__inner">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section className="inner__page">
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/photos" component={Photos} />
          <Route path="/contacts"><Contacts contacts={contacts} /></Route>
        </div>
      </section>
    </HashRouter>
  );
}

export default App;

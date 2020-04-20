import React from "react";
import "./contact.css";
import female from "../assets/img/female.svg";
import male from "../assets/img/male.svg";
import mask from "../assets/img/mask.svg";

class Contact extends React.Component {
  getIcon = () => {
    if (this.props.gender === "female") {
      return female;
    } else if (this.props.gender === "male") {
      return male;
    } else {
      return mask;
    }
  };
  getLinktoCall = () => {
    return "tel:" + this.props.phone;
  };
  render() {
    const { firstName, lastName, phone } = this.props;
    return (
      <div className="contact__block">
        <img
          src={this.getIcon()}
          alt="gender icon"
          className="gender__img"
        ></img>
        <div className="contact__info-inner">
          <p className="first__name">Ім'я: {firstName}</p>
          <p className="last__name">Прізвище: {lastName}</p>
          <a href={this.getLinktoCall()} className="link__to-phone">
            {phone}
          </a>
        </div>
      </div>
    );
  }
}
export default Contact;

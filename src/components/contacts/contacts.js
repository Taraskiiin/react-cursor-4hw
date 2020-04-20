import React from "react";
import Contact from "../contact/сontact.js";
import "./contacts.css";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts,
      term: "",
    };
  }
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    const filter = this.state.contacts.filter((contact) => {
      return (
        (contact.lastName.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1) ||
        (contact.firstName.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1) ||
        (contact.phone.indexOf(this.state.term) !== -1)
      );
    });
    return (
      <div className="hw__inner">
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={this.searchHandler.bind(this)}
            value={this.state.term}
          />
        </form>
        <ul className="contacts__list">
          {filter.map(element => {
            return (
              <li key={element.id}>
                <Contact {...element} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Contacts;

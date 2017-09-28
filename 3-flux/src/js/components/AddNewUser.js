import React from "react";
import { Nav, NavItem } from 'react-bootstrap'
import TextFieldGroup from '../common/TextFieldGroup';
import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: '',
      img_url: 'https://s17-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQkKa1PG-a7vXhUbr-Fxj5vSfX7nmerB2MpsWcbzo3FWluOpWU7&sp=dc592d206a5345fcf14d581039154699&anticache=466946',
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log("STATE", this.state);
    console.log(this.props);

  }
  onSubmit(e) {
    e.preventDefault();
    console.log("YOU MADE IT TO ONSUBMIT");
    let userData = this.state
    TodoActions.createTodo(userData);
    console.log(":", userData);
    let form = document.getElementById('AddUserForm');
    form.reset();
    return false;
  }

  render() {
    console.log(this.props);
    const { img_url, first_name, last_name, address, city, state, zip } = this.props;

    // const icon = complete ? "\u2714" : "\u2716"
    // const space = ' ';

    // if (edit) {
    //   return (
    //     <li>
    //       <input value={text} focus="focused"/>
    //     </li>
    //   );
    // }

    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)} id="AddUserForm">


        <TextFieldGroup
          field="first_name"
          label="First Name"
          name="first_name"
          value={first_name}
          onChange={this.onChange}
         // error={errors.first}
        />

        <TextFieldGroup
          field="img_url"
          label="Profile photo"
          name="img_url"
          value={img_url}
          onChange={this.onChange}
         // error={errors.first}
        />

        <TextFieldGroup
          field="last_name"
          label="Last Name"
          name="last_name"
          value={last_name}
          onChange={this.onChange}
         // error={errors.last}
        />

        <TextFieldGroup
          field="address"
          label="Address"
          name="address"
          value={address}
          onChange={this.onChange}
         // error={errors.img_url}
        />

        <TextFieldGroup
          field="city"
          label="City"
          name="city"
          value={city}
          onChange={this.onChange}
         // error={errors.img_url}
        />
        <TextFieldGroup
          field="state"
          label="State"
          name="state"
          value={state}
          onChange={this.onChange}
         // error={errors.img_url}
        />

        <TextFieldGroup
          field="zip"
          label="Zip"
          name="zip"
          value={zip}
          onChange={this.onChange}
         // error={errors.img_url}
        />
        <div>
        <button type="submit" className="button-logo-2">Enter User</button>
  <button type="button" className="button-logo-2" data-dismiss="modal">Done</button>


        </div>
        <Nav>
          <NavItem onClick={()=>{
            this.form.reset();
          }} className="sideFont"><span className="glyphicon glyphicon-trash" aria-hidden="false"></span></NavItem>
        </Nav>
      </form>

      </div>

    );
  }
}

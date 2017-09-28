import React from "react";
import { Nav, NavItem } from 'react-bootstrap'
import TextFieldGroup from '../common/TextFieldGroup';
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class EditUser extends React.Component {
  constructor(props) {
    super();
    this.state = {
      record: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentWillMount() {
      this.setState({
        todos: TodoStore.getAll(),
      });
    console.log("WILL MOUNT", this.state, this.props);
  }

  componentDidMount(){
    this.setState({
      todos: TodoStore.getAll(),
    });
    const user_id = this.props.id;
    console.log("DID MOUNT", this.state, this.props);
    const userRecord = this.state.todos.filter((todo) => {
      console.log("FILTER", todo.id, " = ", user_id);
        return todo.id == user_id
    });
    console.log("you got a winner", userRecord[0]);
    const record = userRecord[0];
    this.setState({record : record })
    console.log("RECORD", this.state.record);
    console.log("FIRST NAME", record.first_name);
  }

  createTodos(data) {
    TodoActions.createTodo(Date.now());
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
    let form = document.getElementById('NewUserForm');
    form.reset();
    return false;
  }

  render() {
    // const { userID, id, img_url, first_name, last_name, address, city, state, zip } = this.props;
    // console.log("++++thisprops", this.props);
    //
    // const { todos } = this.state;
    // const user_id = this.props.id;
    // console.log("======id", id);
    // //const id = this.props.id;
    // console.log("TODOS", todos);
    // console.log("======userID", userID);
    // if(id === 0){
    //   console.log("oops no record");
    // }
    // const userRecord = todos.filter((todo) => {
    //   console.log("FILTER", todo.id, " = ", user_id);
    //     return todo.id == user_id
    // });
    // console.log("you got a winner", userRecord[0]);
    // const record = userRecord[0];
    // console.log("RECORD", userRecord[0], record);
    // console.log("FIRST NAME", record.first_name);

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


      <form onSubmit={this.onSubmit.bind(this)} id="NewUserForm">


        <TextFieldGroup
          field="first_name"
          label="First Name"
          name="first_name"
          value={this.state.record.first_name}
          onChange={this.onChange}
         // error={errors.first}
        />

        <TextFieldGroup
          field="img_url"
          label="Profile photo"
          name="img_url"
          value={this.state.record.img_url}
          onChange={this.onChange}
         // error={errors.first}
        />

        <TextFieldGroup
          field="last_name"
          label="Last Name"
          name="last_name"
          value={this.state.record.last_name}
          onChange={this.onChange}
         // error={errors.last}
        />

        <TextFieldGroup
          field="address"
          label="Address"
          name="address"
          value={this.state.record.address}
          onChange={this.onChange}
         // error={errors.img_url}
        />

        <TextFieldGroup
          field="city"
          label="City"
          name="city"
          value={this.state.record.city}
          onChange={this.onChange}
         // error={errors.img_url}
        />
        <TextFieldGroup
          field="state"
          label="State"
          name="state"
          value={this.state.record.state}
          onChange={this.onChange}
         // error={errors.img_url}
        />

        <TextFieldGroup
          field="zip"
          label="Zip"
          name="zip"
          value={this.state.record.zip}
          onChange={this.onChange}
         // error={errors.img_url}
        />
        <div>
        <button type="submit" className="button-logo-2">Update User</button>
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

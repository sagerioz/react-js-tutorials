import React from "react";


export default class Footer extends React.Component {
  render() {
    console.log("FOOTER PROPS", this.props);
    return (
      <footer>{this.props.myName}</footer>
    );
  }
}

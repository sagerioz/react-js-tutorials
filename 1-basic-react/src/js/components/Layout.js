import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      name: "Chinook"
    };
  }
  getVal(val){
    return "Erica" + val;
  }
  changeTitle(title) {
    this.setState({title});
  }

  render() {
    setTimeout(() => {
      this.setState({name: "PoochiPie"})
    }, 4000);
    console.log("PROPS", this.props);
    var list = [
      <Header />,
      <Header />,
      <Header />
    ]
    const myName = "Erica was here";
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />





        <h1> Its {this.getVal(" and Zayante")}!</h1>


        <Footer myName={"This is the other name"} />
        <Footer myName={myName} youName={"What's your name"}/>


        {list}

        
      </div>
    );
  }
}

import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate(){
    // this.props.history.pushState(null, "settings");
    this.props.history.replaceState(null, "settings");
  }
  render() {
    const { history } = this.props;
    console.log(history.isActive("archives"));
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout says hello");
    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
                <button onClick={this.navigate.bind(this)}>try me to go to settings</button>
                <Link to="archives" activeClassName="test">ArChIvEs</Link>
              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}

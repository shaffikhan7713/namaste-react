import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        id: "",
        avatar_url: "",
      },
    };
    console.log("Parent Constructor Called");
  }

  async componentDidMount() {
    console.log("Parent Component Did Mount Called");
    const data = await fetch("https://api.github.com/users/shaffikhan7713");
    const jsonData = await data.json();
    this.setState({ userInfo: jsonData });
  }

  componentDidUpdate() {
    console.log("Component Did Update Called");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount Called");
  }

  render() {
    console.log("Parent Render Called");
    const { name } = this.state.userInfo;
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is the about us page</h2>
        {/* <User name="Shaffi Khan" phone="1231231234" email="shaffi@gmail.com" /> */}
        <UserClass name={name} phone="1231231234" email="shaffi@gmail.com" />
      </div>
    );
  }
}

export default AboutUs;

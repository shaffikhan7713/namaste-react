import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor Called");
  }

  componentDidMount() {
    console.log("Child Component Did Mount Called");
  }

  render() {
    console.log("Child Render Called");
    const { name, phone, email } = this.props;
    return (
      <div className="user-container">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increament Count
        </button>
        <h3>Name: {name}</h3>
        <h3>Phone: {phone}</h3>
        <h3>Email: {email}</h3>
      </div>
    );
  }
}

export default UserClass;

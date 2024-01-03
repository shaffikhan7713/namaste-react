const User = (props) => {
  const { name, phone, email } = props;
  return (
    <div className="user-container">
      <h3>Name: {name}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default User;

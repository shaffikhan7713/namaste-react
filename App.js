const element = React.createElement(
  "h1",
  { id: "heading", test: "test" }, //attributes to the h1 tag
  "Hello world from React!" //children
);
console.log("element", element);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);

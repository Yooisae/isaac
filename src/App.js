import React from "react";

export default function App() {
  const [users, setUsers] = React.useState({
    "id" : "",
    "name" : ""
  });
  React.useEffect(() => {
    fetch("test/test.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="App">
      <h1>Users: {users["id"]}</h1>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [value, setvalue] = useState([]);
  const [isError, setIsError] = useState(false);

  const submit = () => {
    if (firstname == "" || lastname == "") {
      setIsError(true);
    } else {
      setvalue((olditems) => {
        return [...olditems, { firstname, lastname }];
      });
    }
  };

  return (
    <div className="card">
      <div className="form">
   
        <div className="flex">
          <label>
            Enter firstname
            <br />
            <input
              type="text"
              onChange={(e) => setfirstname(e.target.value)}
              onBlur={(e) => setIsError(false)}
              placeholder="FirstName"
            />
            <br></br>
          </label>
          <br></br>
          <label>
            Enter lastname
            <br />
            <input
              type="text"
              onChange={(e) => setlastname(e.target.value)}
              onBlur={(e) => setIsError(false)}
              placeholder="Lastname"
            />
            <br></br>
          </label>
          <button onClick={submit}>Submit</button>
        </div>
        {isError ? (
          <span className="error">Fields Should not be empty</span>
        ) : null}
      </div>

      <table id="names">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {value.map((val) => {
            return (
              <tr>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

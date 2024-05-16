import React, { useEffect } from "react";
import "./ProjectListCSS.css";
import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddDevelopersCom() {
  const [developer, setDevelper] = useState([]);
  const [add, setAdd] = useState([]);

  const [check, setCheck] = useState([]);

  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const location = useLocation();
  const selectedId = location.state.selectedId;

  const SetList = async () => {
    try {
      const response = await axios.get(
        "https://localhost:44339/api/AddDevelopers"
      );
      setDevelper(response.data);
      console.log(developer);
    } catch (error) {
      console.log("Error occured: " + error);
    }
  };

  //---------DEveloper Addition
  var count = 0;
  var addedId;

  const HandleAdd = (id) => {
    count++;

    console.log(id + " clicked");
    const newAdd = add;

    for (var i = 0; i < count; i++) {
      if (id === add[i]) {
        addedId = id;
        break;
      }
    }
    if (id === addedId) {
      alert("Already added");
    } else {
      newAdd.push(id);
      setAdd(newAdd);
    }

    console.log(add);
  };

  //--------DEveloper Remove

  const HandleRemove = (id) => {
    const newAdd = add;

    var index;
    for (var i = 0; i < add.length; i++) {
      if (id === add[i]) {
        index = i;
        console.log(index);
        break;
      }
    }
    if (add[index] === id) {
      newAdd.splice(index, 1);
      setAdd(newAdd);

      console.log(add);
    } else {
      alert("Not added");
    }
  };

  //-------------check availability
  // const checkAvailability = async () => {
  //   const addedDev = await axios.get(`https://localhost:44319/api/CheckAddedDevelopers/${selectedId}`);
  //   setCheck(addedDev);

  //   var count = check.length;
  //   for (var i = 0; i < count; i++){
  //     if(check[i].developerId === developer.userId){
  //     return(
  //       <td>Added</td>
  //     );

  //   }}

  //     return(
  //       <td>not added</td>
  //     );

  //   }

  // const assignedDev = axios.get("");
  // setCheck(assignedDev);

  useEffect(() => {
    SetList();
    //checkAvailability();
  }, []);

  const HandleSubmit = async () => {
    for (var i = 0; i < add.length; i++) {
      const data = {
        projectId: selectedId,
        developerId: add[i],
      };
      const url = "https://localhost:44339/api/AddDevelopers";

      axios
        .post(url, data)
        .then(console.log("succes"))
        .catch((e) => alert(e));
    }

    alert("Developers added: " + add);
    console.log("clicked");
    navigate(-1);
  };

  return (
    <div>
      <table className="ProjectList">
        <thead>
          <th>Developer Id</th>
          <th>Developer Username</th>
          <th>Job Role</th>
          <th>Add/Remove </th>
          <th>Status</th>
          
        </thead>

        <tbody>
          {developer.map((dev, index) => (
            <tr key={dev.userId}>
              <td>{dev.userId}</td>
              <td>{dev.userName}</td>
              <td>{dev.jobRoleName}</td>

              <td>
                <Button variant="primary" onClick={() => HandleAdd(dev.userId)}>
                  Add
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="danger"
                  onClick={() => HandleRemove(dev.userId)}
                >
                  Remove
                </Button>
              </td>
              {() => {
                const addedDev = axios.get(
                  `https://localhost:44339/api/CheckAddedDevelopers/${selectedId}`
                );
                setCheck(addedDev);

                var count = check.length;
                for (var i = 0; i < count; i++) {
                  if (check[i].developerId === dev.userId) {
                    setMessage('added');
                    return (<td>{message}</td>);
                  }
                }

                setMessage('not added')
                return (<><td>{message}</td></>);
              }}
              
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Button onClick={HandleSubmit} variant="primary">
        Submit
      </Button>
    </div>
  );
}

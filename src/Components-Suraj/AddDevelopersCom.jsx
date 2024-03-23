import React, { useEffect } from "react";
import "./ProjectListCSS.css";
import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddDevelopersCom() {
  const [developer, setDevelper] = useState([]);
  const [add, setAdd] = useState([]);

  const navigate = useNavigate();

  const location = useLocation();
  const selectedId = location.state.selectedId;

  const SetList = async () => {
    try {
      const response = await axios.get(
        "https://localhost:44319/api/AddDevelopers"
      );
      setDevelper(response.data);
      console.log(developer);
    } catch (error) {
      console.log("Error occured: " + error);
    }
  };

  const [msgArray, setMsgArray] = useState([]);

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
    }
    else {
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

  useEffect(() => {
    SetList();
  }, []);

  const HandleSubmit = async () => {
    for(var i = 0; i < add.length; i++){
      const data ={
        projectId : selectedId,
        developerId : add[i] 
      }

      axios.post('url', data)
      .then(alert("succes"))
      .catch(e => alert(e));
      
    }

    
    alert('Developers added: ' + add);
    console.log('clicked');
    navigate(-1);
  }

  return (
    <div>
      <table className="ProjectList">
        <thead>
          <th>Developer Id</th>
          <th>Developer Username</th>
          <th>Job Role</th>
          <th>Add/Remove </th>
          <th></th>
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

              {/* {add.map((item, index) => (
            <td key={index}>
              {item} - {msg[index]}
            </td>
          ))} */}

              <td>{msgArray[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Button onClick={HandleSubmit} variant="primary">Submit</Button>
    </div>
  );
}

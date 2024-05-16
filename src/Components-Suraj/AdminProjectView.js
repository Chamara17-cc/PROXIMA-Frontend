import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./FormStyle.css";
import "./AdminProjectViewCSS.css";
import axios from "axios";
import "./ProjectListComponent";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";


import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


import "./ProjectListCSS.css";

export default function AdminProjectView() {
  const [projectData, setProjectData] = useState([]);
  const location = useLocation();

  const [devData, setDevData] = useState([]);

  //  console.log(location.state.selectedId);
  const selectedId = location.state.selectedId;

  const navigate = useNavigate();

  //---------get project data in project info

  const getData = async () => {
    //    const url = `https://localhost:44319/api/AdminProjectView/${selectedId}`;    //old

    try {
      const response = await axios.get(
        `https://localhost:44339/api/AdminProjectView/${selectedId}`
      );
      setProjectData(response.data);
      console.log(projectData);
    } catch (error) {
      console.log(error);
    }
  };

  //-----------get assigned developer list in team info
  const getAssignedDev = async () => {
    try {
      const response = await axios.get(
        `https://localhost:44339/api/GetAssignedDevelopers/${selectedId}`
      );
      setDevData(response.data);
      console.log(devData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigate = async () => {
    console.log("clicked");
    navigate("/AddDevelopersPage", { state: { selectedId: selectedId } });
  };

  const HandleAssign = (id) => {
    var selectedDevId = id;
    //console.log("clicked " + selectedDevId + " " + selectedId);
    navigate("/taskcreation", { state: { selectedDevId, selectedId } });
  };

  const HandleTaskListButton = (id) => {
    var selectedDevId = id;
    console.log("clicked " + selectedDevId + " " + selectedId);
    navigate("/TaskList", {state: {selectedDevId, selectedId}});
  }

  //--------------------------------***********************   FILE UPLOAD PART  *************************-------------------

  const [basicInfo, setBasicInfo] = useState("");
  const [budgetInfo, setBudgetInfo] = useState("");
  const [timeLineInfo, setTimeLineInfo] = useState("");
  const [clientInfo, setClientInfo] = useState("");

  //------------basic info

  const handleBasicInfoChange = (event) => {
    setBasicInfo(event.target.files[0]);
    console.log("basic info selected");
  };

  const handleBasicInfoUpload = async () => {
    if (!basicInfo) {
      alert("select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", basicInfo);

    const url1 = `https://localhost:44339/api/ProjectFileUpload/BasicInfo?ProID=${selectedId}`;

    try {
      axios.post(url1, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Upload Successful");
      setBasicInfo(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  //------view basic info

  const [basicNames, setBasicNames] = useState([]);

  const GetBasicFileNames = async () => {
    const urlGetBasic = `https://localhost:44339/api/ProjectFileView/Basic?id=${selectedId}`;

    try {
      const response = await axios.get(urlGetBasic);
      setBasicNames(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //------------timeline

  const handleTimeLineInfoChange = (event) => {
    setTimeLineInfo(event.target.files[0]);
    console.log("Timeline selected");
  };

  const handleTimeLineInfoUpload = async () => {
    if (!timeLineInfo) {
      alert("select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", timeLineInfo);

    const url2 = `https://localhost:44339/api/ProjectFileUpload/TimeLine?ProID=${selectedId}`;

    try {
      axios.post(url2, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Upload Successful");
      setTimeLineInfo(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  //--view timeline info

  const [timelineNames, setTimeLineNames] = useState([]);

  const GetTimeLineNames = async () => {
    const urlGetTimeLine = `https://localhost:44339/api/ProjectFileView/TimeLine?id=${selectedId}`;

    try {
      const response = await axios.get(urlGetTimeLine);
      setTimeLineNames(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //-----------budget

  const handleBudgetInfoChange = (event) => {
    setBudgetInfo(event.target.files[0]);
    console.log("Budget info selected");
  };

  const handleBudgetInfoUpload = async () => {
    if (!budgetInfo) {
      alert("select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", budgetInfo);

    const url3 = `https://localhost:44339/api/ProjectFileUpload/BudgetInfo?ProID=${selectedId}`;

    try {
      axios.post(url3, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Upload Successful");
      setBudgetInfo(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  //--view budget info

  const [budgetNames, setBudgetNames] = useState([]);

  const GetBudgetNames = async () => {
    const urlGetBudget = `https://localhost:44339/api/ProjectFileView/BudgetInfo?id=${selectedId}`;

    try {
      const response = await axios.get(urlGetBudget);
      setBudgetNames(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //-----------client

  const handleClientInfoChange = (event) => {
    setClientInfo(event.target.files[0]);
    console.log("Client info selected");
  };

  const handleClientInfoUpload = async () => {
    if (!clientInfo) {
      alert("select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", clientInfo);

    const url4 = `https://localhost:44339/api/ProjectFileUpload/ClientDoc?ProID=${selectedId}`;

    try {
      axios.post(url4, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Upload Successful");
      setClientInfo(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  //--view ClientDocument info

  const [clientDocNames, setClientDocNames] = useState([]);

  const GetClientDocNames = async () => {
    const urlGetClientDoc = `https://localhost:44339/api/ProjectFileView/ClientDoc?id=${selectedId}`;

    try {
      const response = await axios.get(urlGetClientDoc);
      setClientDocNames(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  //---------------------**********DOWNLOAD PROJECT FILES***********------------------------

  const download = async (filePath, fileName) => {
    const urlDownload = `https://localhost:44339/api/ProjectFileDownload/DownloadProjectFile?FilePath=${filePath}&FileName=${fileName}`;
    
    

    try {
      // const response = await axios.get(url2);
      // console.log(response)

      const response = await axios.get(urlDownload, {
        responseType: 'blob' // Specify blob response type for downloading
      });
      console.log("downloaded");
      const blob = new Blob([response.data], { type: response.data.type });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      alert("Downloaded");


    } catch (error) {
      console.log(error);  
    }
  }



  useEffect(() => {
    getData();
    getAssignedDev();
    GetBasicFileNames();
    GetTimeLineNames();
    GetBudgetNames();
    GetClientDocNames();
  },[clientInfo, basicInfo, timeLineInfo, budgetInfo]);

  return (
    <div className="Section">
      <Tabs
        defaultActiveKey="project"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="project" title="Project Info">
          {projectData.map((pro) => (
            <div className="project-detail">
              <h3 className="card-topic">{pro.projectName}</h3>
              <p className="ViewItems">{pro.projectDescription}</p>
              <p className="ViewItems">Project Id : {pro.projectId}</p>
              <p className="ViewItems">Technologies : {pro.technologies}</p>
              <p className="ViewItems">Project StartDate : {pro.p_StartDate}</p>
              <p className="ViewItems">Project DueDate : {pro.p_DueDate}</p>
              <p className="ViewItems">Duration : {pro.duration}</p>
              <p className="ViewItems">Objectives : {pro.objectives}</p>
            </div>
          ))}
          <div></div>

          
        </Tab>

        <Tab eventKey="devTeam" title="Team Info">
          {projectData.map((pro) => (
            <div className="project-detail">
              <h3 className="card-topic">{pro.teamName}</h3>
            </div>
          ))}
          <div className="project-detail">
            <p className="ViewItems">Project Manager Name: manager01</p>

            <br />

            <h3 className="card-topic">Developers</h3>
            <table className="ProjectList">
              <thead>
                <th>DeveloperId</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job Role</th>
                <th></th>
                
              </thead>

              <tbody>
                {devData.map((dev, index) => (
                  <tr key={dev.developerId}>
                    <td>{dev.userId}</td>
                    <td>{dev.firstName}</td>
                    <td>{dev.lastName}</td>
                    <td>{dev.jobRoleName}</td>
                    <td>
                      <Button onClick={() => HandleAssign(dev.userId)}>
                        Assign Task
                      </Button>
                      &nbsp; &nbsp;
                      <Button style={{marginRight:"-100px"}} onClick={() => HandleTaskListButton(dev.userId)}>
                        Task List
                      </Button>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Button onClick={handleNavigate} variant="outline-primary">
            Add developers
          </Button>
          
        </Tab>
        <Tab eventKey="client" title="Client Info">
          <div className="project-detail">
            <h3 className="card-topic">Client Name</h3>
            <p className="ViewItems">Description</p>
            <p className="ViewItems">Project Id : abc</p>
            <p className="ViewItems">Category : bcd</p>
            <p className="ViewItems">Start Date : 2000</p>
            <p className="ViewItems">End Date : 3000</p>
            <p className="ViewItems">Duration :</p>
            <p className="ViewItems">Objectives :</p>
            <p className="ViewItems"></p>
            {/* You can add more details here */}
          </div>
        </Tab>
        <Tab eventKey="budget" title="Resources">
          <div className="project-detail">
            <h3 className="card-topic">Project Resources</h3>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Basic Info: </Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="file"
                  size="sm"
                  style={{ width: "250px" }}
                  onChange={handleBasicInfoChange}
                />
                <Button
                  onClick={handleBasicInfoUpload}
                  style={{ marginLeft: "60px", marginBottom: "4px" }}
                >
                  Upload
                </Button>
              </div>
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label> Time Line Info: </Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="file"
                  size="sm"
                  style={{ width: "250px" }}
                  onChange={handleTimeLineInfoChange}
                />
                <Button
                  onClick={handleTimeLineInfoUpload}
                  style={{ marginLeft: "60px", marginBottom: "4px" }}
                >
                  Upload
                </Button>
              </div>
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>Budget Info: </Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="file"
                  size="sm"
                  style={{ width: "250px" }}
                  onChange={handleBudgetInfoChange}
                />
                <Button
                  onClick={handleBudgetInfoUpload}
                  style={{ marginLeft: "60px", marginBottom: "4px" }}
                >
                  Upload
                </Button>
              </div>
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>Client Declarement: </Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="file"
                  size="sm"
                  style={{ width: "250px" }}
                  onChange={handleClientInfoChange}
                />
                <Button
                  onClick={handleClientInfoUpload}
                  style={{ marginLeft: "60px", marginBottom: "4px" }}
                >
                  Upload
                </Button>
              </div>
            </Form.Group>
          </div>

          <h3 className="card-topic">Uploaded Resources</h3>
          <div style={{ display: "flex" }}>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Basic Info: </Form.Label>

              {basicNames.map((file, index) => (
                <ul>
                  <li onClick={() => download(file.localStoragePath, file.fileName)} key={file.fileId}><button style={{borderRadius:"7px", padding:"0.5px"}}>{file.fileName}</button></li>
                </ul>
              ))}
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>TimeLine Info: </Form.Label>

              {timelineNames.map((file, index) => (
                <ul>
                  <li onClick={() => download(file.localStoragePath, file.fileName)} key={file.fileId}><button style={{borderRadius:"7px", padding:"0.5px"}}>{file.fileName}</button></li>
                </ul>
              ))}
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>Budget Info: </Form.Label>

              {budgetNames.map((file, index) => (
                <ul>
                  <li onClick={() => download(file.localStoragePath, file.fileName)} key={file.fileId}><button style={{borderRadius:"7px", padding:"0.5px"}}>{file.fileName}</button></li>
                </ul>
              ))}
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>ClientDocument Info: </Form.Label>

              {clientDocNames.map((file, index) => (
                <ul>
                  <li onClick={() => download(file.localStoragePath, file.fileName)} key={file.fileId}><button style={{borderRadius:"7px", padding:"0.5px", backgroundColor:"whitesmoke"}}>{file.fileName}</button></li>
                </ul>
              ))}
            </Form.Group>
            
          </div>
          <p style={{color:"red"}}>*click on file to download</p>
        </Tab>
      </Tabs>
    </div>
  );
}

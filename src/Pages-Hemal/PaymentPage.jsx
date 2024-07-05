import React, { useState, useEffect } from "react";
import Sidebar from "../Compornents/Sidebar"; // Correct path
import Topbar from "../Compornents/Topbar"; // Correct path
import "../Pages/PageStructure.css";
import "./Payment.css";
import axios from "axios";
import CardComponent from "../Components-Hemal/CardComponent"; // Correct path

function Payment() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);

  const getall = async () => {
    try {
      const response = await axios.get("https://localhost:44339/api/AdminClientPayment/GetClientPayments");
      const projects = await axios.get("https://localhost:44339/api/AdminClientPayment/GetClientProjects");
      setData(response.data);
      setTableData(response.data);
      setProjects(projects.data);
    } catch (e) {
      console.log(e);
    }
  };

  const PaymentAccept = async (id) => {
    try {
      await axios.get(`https://localhost:44339/api/AdminClientPayment/PaymentAccept?id=${id}`);
      getall();
    } catch (e) {
      console.log(e);
    }
  };

  const PaymentReject = async (id) => {
    try {
      await axios.get(`https://localhost:44339/api/AdminClientPayment/PaymentReject?id=${id}`);
      getall();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getall();
  }, []);

  useEffect(() => {
    if (selectedProject !== 0) {
      const x = data.filter(item => item.projectId == selectedProject);
      setTableData(x);
    } 
    if(selectedProject ===0){
      setTableData(data);
    }
  }, [selectedProject, data]);

  const acceptedPayments = tableData.filter(item => item.mode === "accepted" || item.mode=="accept" ).length;
  const rejectedPayments = tableData.filter(item => item.mode === "rejected" || item.mode==="reject").length;
  const pendingPayments = tableData.filter(item => item.mode === "pending").length;
  const Total = tableData
    .filter(item => item.mode === "accepted" || item.mode=="accept")
    .reduce((sum, item) => sum + item.paymentAmount, 0);

  return (
    <div className="Paymentpage">
      <Topbar />
      <Sidebar />
      <div className="Content">
        <CardComponent
          acceptedPayments={acceptedPayments}
          rejectedPayments={rejectedPayments}
          pendingPayments={pendingPayments}
          Total={Total}
        />
        <div className="d-flex align-items-center justify-content-center mt-4">
          <Dropdown projects={projects} onChange={setSelectedProject} />
        </div>
        <div className="table-container">
          <Table PaymentAccept={PaymentAccept} PaymentReject={PaymentReject} data={tableData} />
        </div>
        <div className="text-center">
          <button className="btn btn-info btn-lg mt-3 color-white" type="button">
            <i className="fas fa-download mr-2"></i> Download
          </button>
        </div>
      </div>
    </div>
  );
}

const Dropdown = ({ projects, onChange }) => {
  return (
    <div>
      <select onChange={(e) => onChange(e.target.value)} className="form-control">
        <option value={0}>All Projects</option>
        {projects.map((project) => (
          <option key={project.projectId} value={project.projectId}>
            {project.projectName}
          </option>
        ))}
      </select>
    </div>
  );
};

const Table = ({ data, PaymentAccept, PaymentReject }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Project</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Mode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.projectName}</td>
              <td>Rs:{row.paymentAmount}</td>
              <td>{row.date}</td>
              <td>{row.status ? "Physical" : "Online"}</td>
              <td>
                {row.mode === "pending" ? (
                  <>
                    <button onClick={() => PaymentAccept(row.paymentId)} className="btn btn-success btn-sm">
                      Accept
                    </button>
                    <button onClick={() => PaymentReject(row.paymentId)} className="btn btn-warning btn-sm ml-2">
                      Reject
                    </button>
                  </>
                ) : (
                  row.mode
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payment;

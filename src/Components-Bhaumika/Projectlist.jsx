import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


function Projectlist() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7044/api/DeveloperProject/GetAllProject');
        setProjects(response.data);
        console.log(projects);
      } catch (error) {
        setError(error);
        alert(error);
        console.log("Error occured: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading projects...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Project Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.projectId}>
                <td>{project.projectId}</td>
                <td>{project.projectName}</td>
                <td>{project.projectStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );


}
  
export default Projectlist
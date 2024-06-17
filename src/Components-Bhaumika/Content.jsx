import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './Content.css'


function Content() {

  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        //DeveloperId == 5
        const response = await axios.get('https://localhost:7008/api/DeveloperTeam/GetAllTeams/5');
        setTeams(response.data);
        console.log(teams);
      } catch (error){
        setError(error);
        alert(error);
        console.log("Error occured: " + error);
      } finally {
        setLoading(false);
      }
    };




    fetchData();
  }, []);


  var selectedId;


  const TeamSelection = (id) => {
    selectedId = id;
    navigate('/TeamDescriptionDeveloper',{state:{selectedId:selectedId}});
  };



    return (
<div className='MainContent'>

<div className='MainTitle'><h2>Teams</h2></div>

<div>
      {loading && <p>Loading teams...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Team Name</th>
              <th>Project Name</th>
              <th>Project Status</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr 
              key={team.projectId}
              onClick = {() =>TeamSelection(team.projectId)}
              >
                <td>{team.projectId}</td>
                <td>{team.teamName}</td>
                <td>{team.projectName}</td>
                <td>{team.projectStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>



</div>



 
)
}
    export default Content;
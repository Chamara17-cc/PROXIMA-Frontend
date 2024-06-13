import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';



function Tasklist() {


  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        //DeveloperID == 5
        const response = await axios.get('https://localhost:7008/api/DeveloperTask/GetAllTasks/5');
        setTasks(response.data);
        console.log(tasks);
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

  var selectedId;
  var selectedTaskId;


  const TaskSelection = (id) => {
    selectedId = id;
    navigate('/TaskDescriptionDeveloper',{state:{selectedId:selectedId}});
  };

  const TaskSelectionNew = (taskid) => {
      console.log(taskid);
   
    selectedTaskId = taskid;
  
   navigate('/TaskRecord',{state:{selectedTaskId:selectedTaskId}});

  };







    return (
      <div>
      {loading && <p>Loading tasks...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task Name</th>
              <th>Task Duedate</th>
              <th>Task Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr 
              >
                <td>{task.taskId}</td>
                <td 
                key={task.taskId}
              onClick = {() =>TaskSelection(task.taskId)}>{task.taskName}</td>
                <td>{task.taskDueDate}</td>
                <td
                onClick = {() =>TaskSelectionNew(task.taskId)}
                >{task.taskStatus}</td>
              </tr>
            ))}
          </tbody>
          </table>
      )}
    </div>
    )
}
  
export default Tasklist
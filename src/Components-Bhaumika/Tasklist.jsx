import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';



function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7044/api/DeveloperTask/GetAllTasks');
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

    return (
      <div>
      {loading && <p>Loading tasks...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <Table striped bordered hover>
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
              <tr key={task.taskId}>
                <td>{task.taskId}</td>
                <td>{task.taskName}</td>
                <td>{task.taskDueDate}</td>
                <td>{task.taskStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
    )
}
  
export default Tasklist
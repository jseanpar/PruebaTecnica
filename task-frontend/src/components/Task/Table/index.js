import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
} from 'reactstrap';

import './style.css'
import * as tasksActions from '../../../actions/tasksActions';

const TableTasks = (props) => {

  const { deleteTask } = props;

  return (
    <div className="Table">
      <Button color="success">
        <Link to='/addtask'>
          Add New Task
        </Link>
      </Button>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Date</th>
            <th>Active</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, key) => (
            <tr key={key}>
              <td>{task.description}</td>
              <td>{task.createDate}</td>
              <td>{task.active}</td>
              <td>
                <Button color="primary">
                  <Link to={`/addtask/${task._id}`}>
                    Editar
                  </Link>
                </Button>
              </td>
              <td>
                <Button onClick={() => deleteTask(task._id)} color="danger">
                  Eliminar
                  </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}


const mapStateToProps = ({ tasksReducer }) => tasksReducer;


export default connect(mapStateToProps, tasksActions)(TableTasks);
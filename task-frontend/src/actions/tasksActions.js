import axios from 'axios'


import { GET_TASKS, LOADING, ERROR } from '../types/tasksTypes'

export const getTasks = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING
    })

    const response = await axios.get('http://localhost:3001/api/tasks/')

    dispatch({
      type: GET_TASKS,
      payload: response.data.data
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message
    })
  }
}

export const changeDescription = (description) => (dispatch) => {

  dispatch({
    type: 'CHANGE_DESCRIPTION',
    payload: description
  })

}

export const changeCreateDate = (createDate) => (dispatch) => {

  dispatch({
    type: 'CHANGE_CREATEDATE',
    payload: createDate
  })

}

export const changeActive = (active) => (dispatch) => {

  dispatch({
    type: 'CHANGE_ACTIVE',
    payload: active
  })

}

export const addTask = (newTask) => async (dispatch) => {

  console.log(newTask);

  dispatch({
    type: LOADING
  })

  try {
    const response = await axios.post('http://localhost:3001/api/tasks', newTask);
    dispatch({
      type: 'AGGREGATED',
    });
    alert('Task create successfully');
    console.log(response);
    window.location.reload(false);
    this.props.history.push("/");
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
}

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    const response = await
      axios.delete(`http://localhost:3001/api/tasks/${taskId}`)
    console.log(response)
    window.location.reload(false);
  } catch (err) {
    console.log(err.message)
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
}


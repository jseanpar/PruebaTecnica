import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as tasksActions from '../../../actions/tasksActions';

class AddTaskForm extends Component {

    changeDescription = (event) => {
        this.props.changeDescription(event.target.value)
        console.log(event.target.value);
    }

    changeCreateDate = (event) => {
        this.props.changeCreateDate(event.target.value)
        console.log(event.target.value);
    }

    changeActive = (event) => {
        this.props.changeActive(event.target.value)
        console.log(event.target.value);
    }

    save = () => {
        const { description, createDate, active, addTask } = this.props;
        const newTask = {
            description,
            createDate,
            active
        }
        addTask(newTask);
    }

    render() {
        return (
            <div>
                <h1>Create New Task</h1>
                <input required
                    type="text"
                    value={this.props.description}
                    onChange={this.changeDescription}
                    placeholder="Enter Task Description" />
                <br /><br />
                <input required
                    type="date"
                    value={this.props.createDate}
                    onChange={this.changeCreateDate}
                    placeholder="Enter Date" />
                <br /><br />
                <input required
                    type="text"
                    value={this.props.active}
                    onChange={this.changeActive}
                    placeholder="Enter Active" />
                <br /><br />
                <button onClick={this.save}
                >Save</button>
            </div>
        );
    }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, tasksActions)(AddTaskForm);
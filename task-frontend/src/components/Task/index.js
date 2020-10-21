import React, { Component } from 'react'
import { connect } from 'react-redux'

import Table from './Table'
import Loading from '../Loading'
import Fatal from '../Fatal'

import * as tasksActions from '../../actions/tasksActions'

class Tasks extends Component {
  componentDidMount() {
    if (!this.props.tasks.length) {
      this.props.getTasks()
    }
  }

  render() {
    if (this.props.isLoading) return <Loading />

    if (this.props.error) return <Fatal error={this.props.error} />

    return <Table />
  }
}

const mapStateToProps = (reducers) => {
  return reducers.tasksReducer;
}

export default connect(mapStateToProps, tasksActions)(Tasks)

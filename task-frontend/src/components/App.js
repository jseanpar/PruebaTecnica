import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Tasks from './Task'
import AddTaskForm from './Task/AddTask'
import Navbar from './Navbar'
import NotFound from './NotFound'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="Layout">
      <Switch>
        <Route exact path='/tasks' component={Tasks} />
        <Route exact path='/addtask' component={AddTaskForm} />
        <Route exact path='/addtask/:id' component={AddTaskForm} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
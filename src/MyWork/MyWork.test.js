import React from 'react'
import ReactDOM from 'react-dom'
import MyWork from './MyWork'
import {BrowserRouter} from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><MyWork /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})

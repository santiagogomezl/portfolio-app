import React from 'react'
import ReactDOM from 'react-dom'
import PortfolioItem from './PortfolioItem'
import {BrowserRouter} from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><PortfolioItem /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})

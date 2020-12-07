import React from 'react'
import ReactDOM from 'react-dom'
import PortfolioItem from './PortfolioItem'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PortfolioItem />, div)
  ReactDOM.unmountComponentAtNode(div)
})

import React from 'react'
import ReactDOM from 'react-dom/server'
import AutoScalingText from '../auto-scaling-text'

test('renders ssr mode', () => {
  ReactDOM.renderToString(<AutoScalingText />)
})

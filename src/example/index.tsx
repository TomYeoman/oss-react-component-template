import React from 'react'
import ReactDOM from 'react-dom/client'
import MyCounter from '../components/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <MyCounter
      items={[
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
      ]}
    />
  </React.StrictMode>,
)


import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './router/Router'

function App() {


  return (
    <div className="max-w-[1160px] mx-auto">
      <RouterProvider router={Router}>

      </RouterProvider>
    </div>
  )
}

export default App

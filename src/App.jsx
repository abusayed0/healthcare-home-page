
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './router/Router'

function App() {


  return (
    <div className="bg-[#FBFBFB]">
      <RouterProvider router={Router}>

      </RouterProvider>
    </div>
  )
}

export default App

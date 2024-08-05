import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Bag from './routes/Bag.tsx'
import Home from './routes/Home.tsx'
import { Provider } from 'react-redux'
import mynthraStore from './store/mynthraStore.ts'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/bag",
        element:<Bag />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={mynthraStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

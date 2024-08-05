import { Outlet } from 'react-router-dom'
import "../App.css"
import Footer from '../component/Footer'
import Header from '../component/Header'
// import FetchItems from '../component/FetchItems'



function App() {


  return (
    <>
      <div>
        <Header />
        {/* <FetchItems /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App

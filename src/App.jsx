import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Main from "./components/Main"
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const[showModal, setShowModal] = useState(false)

  function handleToggleModal(){
    setShowModal(!showModal)

  }

  useEffect(() =>{
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apidata)
        console.log('DATA\n', apiData)

      }catch(err){
        console.log(err.message)
      }
      
    }
    // fetchAPIData();
  }, [])
  return (
    <>
     { data ? (<Main/>): (
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
     )}
    {showModal && (
      <SideBar handleToggleModal={handleToggleModal}/>
      )}
    <Footer handleToggleModal={handleToggleModal}  />

    </>
  )
}
export default App;































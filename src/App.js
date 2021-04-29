import './App.css'
import React,{useState,useEffect} from 'react'
import Loading from './components/Loading/Loading.jsx'
import Hotel from './components/Hotel/Hotel.jsx'

const App = () => {

  const[data, setData] = useState([])
  const[loading, setLoading] = useState(false)

useEffect(() => {

  
setLoading(true)
setData([])

fetch(`api/hotels`)

    .then( (response)=>(response.json()))
    .then( (resadat)=>(setData(resadat)))
    .catch( (error) => {
                        console.log('error', error);
                        setData(null);
                      } )
    .finally(() => {
                  console.log('fetch end');
                  setLoading(false);
                })


  return () => {
   // cleanup
  }
}, [])


console.log('hotels=', data);


  return (
    <div className="App">
      <h1>Hotels ({data.length})</h1>
           {loading && <Loading/>}

            {( data === null )
                            ?<p>Upps Something happend</p>
                            :data.map(  (hotel , i) => <div className="hotels"> {hotel.name}
                                                      <Hotel hotel={hotel}/>
                                                      </div> 
                                     ) 
            
            }



    </div>
  )
}

export default App

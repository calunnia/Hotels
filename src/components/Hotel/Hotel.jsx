import React,{useState} from 'react'
import Subscribe from '../Suscribe/Suscribe.jsx'

function Hotel({hotel}) {    
   
    
    console.log('hotel.stars=',hotel.name,hotel.stars,(new Date()).toISOString() );
const [show, setShow]  = useState(false)                 // kell e a usestatebe valami ?
const[subscribe,setSubscribe] = useState(false)



    return (
        <div>

            <button onClick = { () => (setShow(!show)) }>  { show  ?  'show less' : 'show more'}    </button>
              
            { show  ?  <div>
                            <p>{ hotel.city}  (  { hotel.stars} &#9733; ) </p>

                            <button onClick = { () => (setSubscribe(!subscribe)) }> Require more information about</button>

                            {subscribe && <Subscribe />}
                        </div>
                     : ''
            }
            
                                                                         
          
        </div>
    )
}

export default Hotel

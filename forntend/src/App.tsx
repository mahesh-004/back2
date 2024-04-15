import { useEffect, useState } from "react"
import axios from "axios";

interface joke{
  id:number,
  title:string,
  content:string
}

function App() {
  const [jokes,setjokes]=useState([]);

  useEffect(()=>{
    axios.get("/api/jokes")
      .then((res)=>{
        const jokesarr=res.data;
        setjokes(jokesarr)
      })
      .catch(({err})=>{
        console.log(err)
      })
  },[])
  

  return (
    <>
      chai aur fullstack
      <p>
        JOKES:{jokes.length}
      </p>

      {jokes.map(({id,title,content}:joke)=>{
        
        return(
          <div key={id}>
           
            <h3>
            
            {title}
          </h3>
          <div>
            {content}
          </div>

          </div>
        )
          
        

      })}
    </>
    
      
  )
}

export default App

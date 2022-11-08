import { useState } from 'react'
import Conversor from "../components/Conversor";
import New from "../components/New";

function Home() {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([0]);
    var addList = ()=>{
      setList([...list, 0])
    }
  
    return (
      <div className="App">
        { list.map((item:number, key:number) => {
          return <Conversor key={key} nome={key}></Conversor>
        }) }
        <New onClick={()=>addList()}></New>
      </div>
    )
  }
  
  export default Home
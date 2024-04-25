import { useState } from 'react';
import './itemDate.css';



function ItemDate(props){

  // use state is just the setter

  const[month1,setMonth]=useState(props.month);

  function clickHnadler(){
    setMonth("september");
    console.log("button clicked")
  }

  const day=props.day;
  const month=props.month;
  const year=props.year;
  
return(
  <div className='mfg-date'>
    <div>{day}</div>
    <div>{month1}</div>
    <div>{year}</div>

    <button onClick={clickHnadler}>submit</button>
    {/* function calls will be increased beacuse of () */}
  </div>
)
}

export default ItemDate;
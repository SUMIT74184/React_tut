import React,{ useState } from 'react';

import "./App.css";
import "./Components/item";
import Item from "./Components/item";
import ItemDate from "./Components/itemDate";
import NewProduct from './Components/NewProduct';

function App() {
  let itemTwoName = "surfi";
  const response = [
    {
      itemName: "nirma",
      itemMonth: "june",
      itemDay: 23,
      itemYear:1992
    },
    {
      itemName: "surfexcel",
      itemMonth: "july",
      itemDay: 23,
      itemYear:1992
    },
    {
      itemName: "555",
      itemMonth: "august",
      itemDay: 26,
      itemYear:1992
    },
  ];
    function PrintProductdata(data){
      console.log("i am inside the app.js");
      console.log(data);
    }
 
  return (
    // single parent is followed
    <div>
      <NewProduct pranay={PrintProductdata}
      />
      {/* console.log("i am inside the app") */}
      <Item name={response[0].itemName}> hello this props.children</Item>
      <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

      {/* <ItemDate></ItemDate> */}
      <div className="App">hello this is react tut</div>

      
    </div>
  );
}

export default App;

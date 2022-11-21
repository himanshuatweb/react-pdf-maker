import jsPDF from 'jspdf';
import {renderToString} from 'react-dom/server'

import personData from './data/person';

import './App.css';

const handleClick = () =>{
  const doc = new jsPDF();

  
  doc.text("Top 10 Performer Of The Week ",10, 20);
  doc.line(10,25,100,25,'S')
  let inc =0;

  personData.forEach(function(person,idx){
    doc.text(person.first_name + " " + person.last_name +" is at "+ idx+1, 10,30+inc);
    inc+=7;
  })

  doc.save("reactToPdf.pdf")
}


function App() {

  return (
    <div className="main-app">
       <h1>Saving JSON as pdf</h1>

       <h3>Top 10 </h3>
       <button onClick={handleClick}>Download Data</button>
      <div className="person-data">
        {personData.map( function(person,idx){
          return <p key={person.id}> {person.first_name} {person.last_name} is at  {idx+1} </p>
 
        } )} 
      </div>
    </div>
  );
}

export default App;

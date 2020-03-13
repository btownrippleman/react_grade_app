import React from 'react';
import logo from './logo.svg';
import './App.css';
import Records from "./components/Records/Records"
import axios from "axios";

class App extends React.Component {


state = { records : [] }

componentDidMount(){


    const url =  "http://localhost:8080/ReadXML/getJson"
    axios.get(url).then(
        response =>{
          console.log(response.data)
            this.setState({records: response.data["class"]["student"]   })})   
}

  state =  {"records": [ { "firstname": "Naman", "subject": "Math", "id": 101, "marks": 83, "lastname": "Kumar" }, { "firstname": "Kapil", "subject": "Chemistry", "id": 102, "marks": 60, "lastname": "Kumar" }, { "firstname": "Harsh", "subject": "English", "id": 103, "marks": 70, "lastname": "Singh" }, { "firstname": "Jitesh", "subject": "Physics", "id": 104, "marks": 76, "lastname": "Singh" } ]}
  

  render(){
    let grades = this.state.records.map(obj=>obj.marks)
  return (
  //   <div className="App">
  // <h1>Grade Analysis App</h1>
  <div class="row">
    <div class="col"></div>
    <div class="col-10" id="container" class="container">
    <Records records={this.state.records} />
    <h1>Average Grade: {grades.reduce((a,b)=>a+b)/grades.length}</h1>
    </div>
    <div class="col">
    </div>
  </div>
// </div>
  );
 }
 
  
}



export default App;

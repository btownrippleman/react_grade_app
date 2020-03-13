import React from 'react';


// var CONTACTS = {"class": {"student": [ { "firstname": "Naman", "subject": "Math", "id": 101, "marks": 83, "lastname": "Kumar" }, { "firstname": "Kapil", "subject": "Chemistry", "id": 102, "marks": 60, "lastname": "Kumar" }, { "firstname": "Harsh", "subject": "English", "id": 103, "marks": 70, "lastname": "Singh" }, { "firstname": "Jitesh", "subject": "Physics", "id": 104, "marks": 76, "lastname": "Singh" } ]}}


class Record extends React.Component {
  render() {
    return (<div>
          <tr>
      <td>{this.props.contact["firstname"]}</td>
      <td>{this.props.contact["lastname"]}</td>
      <td>{this.props.contact["subject"]}</td>
      <td>{this.props.contact["id"]}</td>
      <td>{this.props.contact["marks"]}</td>
    </tr></div>
  
    );
  }
}


export default Record;
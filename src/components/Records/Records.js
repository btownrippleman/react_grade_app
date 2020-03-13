import React from 'react';
import Record from './Record/Record'

class Records extends React.Component {

    render(){

    let rows = this.props.records.map((obj)=>(<Record contact = {obj}/>)) 
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th><i className="fa fa-fw "></i>FirstName</th>
            <th><i className="fa fa-fw "></i>LastName</th>
            <th><i className="fa fa-fw "></i>Subject</th>
            <th><i className="fa fa-fw "></i>ID</th>
            <th><i className="fa fa-fw "></i>Grade</th>
            
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      
        );
    }
}

export default Records;
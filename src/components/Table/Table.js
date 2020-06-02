import React ,{ Component} from 'react';
import './Table.css';
import { BrowserRouter ,Router, Link } from 'react-router-dom';

class Table extends Component {
   state  = {
      tablevalue : [
         {name : 'amit', classs : '12th', section : 'B', rollno : 53, marks : 51, status: 'None'},
         {name : 'amit', classs : '12th', section : 'B', rollno : 53, marks : 21, status: 'None'},
         {name : 'amit', classs : '12th', section : 'B', rollno : 53, marks : 51, status: 'None'},
         {name : 'amit', classs : '12th', section : 'B', rollno : 53, marks : 31, status: 'None'},
         {name : 'amit', classs : '12th', section : 'B', rollno : 53, marks : 71, status: 'None'}
      ]
   };
   statusHandler = () => {
      const tabledata = this.state.tablevalue.slice();
      tabledata.map((per) => {
         if(per.marks < 50 ){
            per.status = 'Fail';
         }
         else{
            per.status = 'Pass';
         }
      });
      this.setState({tablevalue : tabledata})
   }
  render() {     
     let person = (                
           this.state.tablevalue.map((per) => (
            <tr>
               <td>{per.name}</td>
               <td>{per.classs}</td>
               <td>{per.section}</td>
               <td>{per.rollno}</td>
               <td>{per.marks}</td>
               <td>{per.status}</td>
            </tr>            
           ))               
     );       
     
     return (
         <div>
            <table>
               <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Roll no</th>
                  <th>Marks</th>
                  <th>Status</th>
               </tr>
               {person}
            </table>          
            <button
            onClick={this.statusHandler}>Get Status</button>  
         </div>  
     );    
  }
}

export default Table;
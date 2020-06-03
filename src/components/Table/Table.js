import React ,{ Component } from 'react';
import './Table.css';
import axios from 'axios';

class Table extends Component {
  state = {
     tablevalue : [],
     selectedperson : {}
  }
   dataHandler = () => {
      axios.get("http://localhost:5000/getdata").then((response) => {
         this.setState({tablevalue : Object.values(response.data)})
      });
      
   }
  
   statusHandler = () => {
      const tabledata = this.state.tablevalue.slice();
      tabledata.forEach((per) => {
         if(per.marks < 50 && per.marks >= 0 ){
            per.status = 'Fail';
         }
         else if(per.marks >=50 && per.marks <=100){
            per.status = 'Pass';
         }
         else{
            per.status = 'Wrong input';
         }
      });
      this.setState({tablevalue : tabledata})
   }
   editMarks = (index) => {
      this.state.tablevalue.filter((per) => (per._id === index )).map(per => this.setState({selectedperson : per}));
      console.log(this.state.selectedperson);
      
   }

   editHandler = (event) => {
      const selectedperson_temp = this.state.selectedperson;
      selectedperson_temp.marks = event.target.value;
      this.setState({selectedperson : selectedperson_temp});      
   }
   updateMarks = () => {
      let tablevalue_temp = this.state.tablevalue;
      tablevalue_temp.filter((per) => (per._id === this.state.selectedperson._id)).map((per) => (per.marks = this.state.selectedperson.marks));
      this.setState({tablevalue : tablevalue_temp})
      console.log("temp",tablevalue_temp);
      console.log(this.state.tablevalue);
      this.setState({selectedperson : {}})
   }
  render() { 

      let person = (
         Object.keys(this.state.selectedperson).length === 0 && this.state.selectedperson.constructor === Object ?
         null :
         <div>
            <p>Name : {this.state.selectedperson.name}</p>
            <p>Class : {this.state.selectedperson.class}</p>
            <p>Section : {this.state.selectedperson.section}</p>
            <p>Roll no : {this.state.selectedperson.rollno}</p>
            <p>Marks : {this.state.selectedperson.marks}</p>
            <p>Status : {this.state.selectedperson.status}</p>
            <input type="number" placeholder={this.state.selectedperson.marks} onChange={this.editHandler}></input>
            <button onClick={this.updateMarks}>Update marks</button>             
         </div>          
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
            {this.state.tablevalue.map((per) => (
               <tr>
                  <td>{per.name}</td>
                  <td>{per.class}</td>
                  <td>{per.section}</td>
                  <td>{per.rollno}</td>
                  <td onClick = {() => (this.editMarks(per._id))}>{per.marks}</td>
                  <td>{per.status}</td>
               </tr>            
               ))}
         </table>          
         <button
         onClick={this.statusHandler}>Get Status</button>  
         <button
         onClick={this.dataHandler}>Get Data</button>         
         {person}
      </div>  
     );    
  }
}

export default Table;
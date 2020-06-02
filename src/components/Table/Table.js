import React from 'react';
import { BrowserRouter ,Router, Link } from 'react-router-dom'
function Table() {
  return (
      <div>
         <table border = "1">
         <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
         </tr>
         
         <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
         </tr>
      </table>
      </div>      
  );
}

export default Table;
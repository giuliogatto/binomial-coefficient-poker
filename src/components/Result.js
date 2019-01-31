import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => 
{
  
  return(
    <div class='row'>  
      <div class='col'>
        <table>
          <tr>
            <td>
              {result.description} probability:
            </td>
            <td style={{padding:'20px'}}>
              {result.numerator}<br/>
              <hr style={{color:'black'}}/>
              {result.denominator}
            </td>
            <td>
               = {result.result} %
            </td>
          </tr>
        </table>
         
      </div>
    </div>
  )
}

Result.propTypes = {
  result: PropTypes.object.isRequired,
}

export default Result
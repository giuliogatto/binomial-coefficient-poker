import React from 'react'
import { connect } from 'react-redux'
import { updateCard } from '../actions'
import { suitMap,rankMap,cards,getRankStartPosition,getRankEndPosition } from '../components/Helpers';

const CardUpdater = ({ dispatch, id, rank, suit, update }) => {
  let newrank
  let newsuit
 
  return (
    <div class='col' style={{marginTop:'20px'}}>  
      <h3>Card-{id}</h3>  
          <select class="form-control" onChange={(e) => update({'rank':parseInt(newrank.value), 'id':id, 'suit':newsuit.value})} ref={node2 => (newrank = node2)} defaultValue = {rank} value={newrank}>
            {
              Object.keys(rankMap).map(key => 
                {             
                  return <option value={key}>{rankMap[key]}</option>
                }
              )
            }  
          </select>
          <select class="form-control" onChange={(e) => update({'rank':parseInt(newrank.value), 'id':id, 'suit':newsuit.value})} ref={node => (newsuit = node)} defaultValue = {suit}  value={newsuit}>
            {
              Object.keys(suitMap).map(key => 
                {              
                  return <option value={key}>{suitMap[key]}</option>
                }
              )
            }  
          </select>
    </div>
  )
}

export default connect()(CardUpdater)
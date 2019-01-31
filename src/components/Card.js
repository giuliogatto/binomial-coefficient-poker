import React from 'react';
import PropTypes from 'prop-types';
import { suitMap,rankMap,cards,getRankStartPosition,getRankEndPosition } from '../components/Helpers';


const Card = ({ id,rank,suit }) => 
{
  
  return(
    <div class='col'>  
      <div style={{fontSize:"120px",color: suit=='H' || suit=='D'? 'red':'black'}}>
        { cards[suit].substring(getRankStartPosition(rank),getRankEndPosition(rank)) }
      </div>
    </div>
  )
}

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}

export default Card
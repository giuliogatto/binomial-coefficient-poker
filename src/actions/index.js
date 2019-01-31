import { updateCard } from './updateCard'
import { updateResult } from './updateResult'
import { binomialCoefficient,factorial,handsMap,areCardsOrdered } from '../components/Helpers';

export function update(options) {
  return function(dispatch,getState) {
    
    dispatch(updateCard(options));

    // compute the binomial coefficient based on state
    let cards = getState().cards;
    let ranks = {}
    let suits = {}
    cards.map(x => {
        if (typeof(ranks[x.rank]) != "undefined"){
          ranks[x.rank] =  ranks[x.rank] + 1
        }else{
          ranks[x.rank] = 1
        }         
      }
    );
    cards.map(x => {
        if (typeof(suits[x.suit]) != "undefined"){
          suits[x.suit] =  suits[x.suit] + 1
        }else{
          suits[x.suit] = 1
        }         
      }
    );
    //console.log('ranks',ranks)
    //console.log('suits',suits)
    let distinct_ranks = Object.values(ranks).sort(function(a, b){return b-a});
    let distinct_suits = Object.values(suits).sort(function(a, b){return b-a});

    //console.log(distinct_ranks,distinct_suits);

    if(distinct_ranks.length == 5){
      let ordered = areCardsOrdered(ranks);
      //console.log('ordered',ordered)
      // Flush or Strait Flush or Royal Flush
      if(distinct_suits.length == 1){    
        if(ordered.isroyalflush){
          // Royal Flush
          dispatch(updateResult({result: {result:4/2598960*100,numerator:1098240,denominator:4,description: handsMap[9]}}));
        }
        if(!ordered.isroyalflush && ordered.ordered){
          // Straight Flush
          dispatch(updateResult({result: {result:36/2598960*100,numerator:1098240,denominator:36,description: handsMap[8]}}));
        }
        if(!ordered.isroyalflush && !ordered.ordered){
          // Flush
          dispatch(updateResult({result: {result:5108/2598960*100,numerator:1098240,denominator:5108,description: handsMap[5]}}));
        }
      }

      // Straight or All cards are different
      if(distinct_suits.length > 1){
        if(ordered.ordered){
          // Straight
          dispatch(updateResult({result: {result:10200/2598960*100,numerator:10200,denominator:2598960,description: handsMap[4]}}));
        }else{
          // No combination
          dispatch(updateResult({result: {result:1302540/2598960*100,numerator:1302540,denominator:2598960,description: handsMap[0]}}));
        }
        
      }

    }

    if(distinct_ranks.length == 4){
      // Pair
      dispatch(updateResult({result: {result:1098240/2598960*100,numerator:1098240,denominator:2598960,description: handsMap[1]}}));
    }

    if(distinct_ranks.length == 3){
      // Three of a Kind
      if(Math.max(...distinct_ranks) == 3){
        dispatch(updateResult({result: {result:54912/2598960*100,numerator:54912,denominator:2598960,description: handsMap[3]}}));
      }
      // Double Pair
      if(Math.max(...distinct_ranks) == 2){
        dispatch(updateResult({result: {result:123552/2598960*100,numerator:123552,denominator:2598960,description: handsMap[2]}}));
      }   
    }

    if(distinct_ranks.length == 2){
      // Full House
      if(Math.max(...distinct_ranks) == 3){
        dispatch(updateResult({result: {result:3744/2598960*100,numerator:3744,denominator:2598960,description: handsMap[6]}}));
      }
      // Four of a Kind
      if(Math.max(...distinct_ranks) == 4){
        dispatch(updateResult({result: {result:624/2598960*100,numerator:624,denominator:2598960,description: handsMap[7]}}));
      }
    }

    // let denominator = binomialCoefficient(52,5);

    // let numerator = 1

    

    // for(let i=13; i > 13 - elements.length; i--){
    //   console.log(i,i-(13-elements.length)-1,elements[i-(13-elements.length)-1],binomialCoefficient(4,elements[i-(13-elements.length)-1]))
    //   numerator = numerator *  i * binomialCoefficient(4,elements[i-(13-elements.length)-1])
    //   console.log('numerator',numerator)
    // }

    // console.log(denominator,ranks,elements);


    // dispatch(updateResult({result: {result:numerator/denominator,numerator,denominator}}));
    
  }
}

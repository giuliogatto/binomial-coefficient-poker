export const suitMap = {
    S: "Spades",
    H: "Hearts",
    C: "Clubs",
    D: "Diamonds"
};

export const rankMap = {
    "1": "Ace",
    "2": "Deuce",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "10": "Ten",
    "11": "Jack",
    "12": "Queen",
    "13": "King"
};

export const cards ={
  'S':"🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂬🂮🂭",
  'H':"🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂼🂾🂽",
  'D':"🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃌🃎🃍",
  'C':"🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃜🃞🃝"
}
export const handsMap = [
    "No useful combination",
    "Pair",
    "Two Pair",
    "Three of a kind",
    "Straight",
    "Flush",
    "Full house",
    "Four of a kind",
    "Straight flush",
    "Royal flush", 
];

export function getRankStartPosition(rank){
  return rank*2-2
}

export function getRankEndPosition(rank){
  return rank*2
}

export function binomialCoefficient(a, b) {
  let numerator = factorial(a);
  let denominator = factorial(a-b) *  factorial(b);
  return numerator / denominator;
}

export function factorial(x) {
   if(x==0) return 1;
   return x * factorial(x-1);
}

function sortNumber(a,b) {
  return a - b;
}

function isOrdered(xs) {
    for (var i = 1; i < xs.length; i++) {
        if (xs[i] !== xs[i - 1] && xs[i] != xs[i - 1] + 1) {
            return false;
        }
    }
    return true;
}

export function areCardsOrdered(ranks) {
  let ordered = false
  let maxcard = 0
  let isroyalflush = false
  let royalflush = [1,10,11,12,13]
  let cards = Object.keys(ranks)
  cards = cards.map(x => parseInt(x)).sort(sortNumber);
  let ordered = isOrdered(cards)
  let maxcard = Math.max(...cards)

  // special case for the rotal flush
  isroyalflush = isEqual(cards,royalflush)

  return {ordered, maxcard,isroyalflush}
}

export function isEqual (value, other) {

	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {

		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {

			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;

};


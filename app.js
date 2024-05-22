// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
const invalid6 = [7, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

function validateCred(card) {
  let startIndex = card.length - 1;
  let sum = 0
  let isSecond = false
  //console.log(`Start Index: ${startIndex}`)
  for (i = startIndex; i >= 0; i--) {

      //console.log(`Current Index: ${i}`)
      
    if (!isSecond) {
      sum += card[i]
    } else {
      //console.log(`I will double ${card[i]}`)
      let doubled = card[i] * 2;

      if (doubled >= 10) {
        doubled -= 9
      }

      sum += doubled
    }
    isSecond = !isSecond
  }
  console.log(`Luhn Sum: ${sum}`)
  console.log(sum % 10)

  if (sum % 10 === 0) { 
    return true
  } else {
    return false
  }
}

function findInvalidCards(cards) {
  let invalidCards = []
  for (let card of cards) {
    if (!validateCred(card)) {
      console.log("hehe")
      invalidCards.push(card)
    }
  }
  return invalidCards
}

function idInvalidCardCompanies(cards) {
  let companies = [
    {
      name: 'Amex',
      id: 3,
      invalidCount: 0
    },
    {
      name: 'Visa',
      id: 4,
      invalidCount: 0
    },
    {
      name: 'Mastercard',
      id: 5,
      invalidCount: 0
    },
    {
      name: 'Discover',
      id: 6,
      invalidCount: 0
    }
  ]
  let cardCount = 1
  for (let card of cards) {
    let checkId = card[0]
    let found = false;
    for (let company of companies) {
      if (company.id === checkId) {
        company.invalidCount++;
        console.log(`Breaking at card ${cardCount}`)
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(`Company with id ${checkId} not found!\nCard: ${cardCount}`)
      }
    cardCount++
  }

  const invalidCardCompanies = companies.filter((company) => {
    return company.invalidCount > 0
  }).map(company => company.name)

  console.log(invalidCardCompanies)
  return invalidCardCompanies
}

let invalidCards = findInvalidCards([valid1, valid2, valid3, valid4, valid5, invalid3, invalid5])

console.log(`There are ${invalidCards.length} invalid card(s)!`)

console.log(validateCred(valid2));

console.log(idInvalidCardCompanies(invalidCards))







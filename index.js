function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// the else if statement is referencing both needs in the indexTest.js

//at first i thought it woul dbe 2 else if statements but you can but them both into one using the &&

function ternaryCheckCity(city){
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

// the ? acts as the if statement and the : acts as the else statement. === strict equality operator 

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

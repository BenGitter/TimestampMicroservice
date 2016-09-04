module.exports = function(input){
  // return natural date
  // and unix timestamp
  // or null if 'date' is invalid
  var unix,
      natural,
      date,
      response,
      months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // If Unix timestamp is provided
  if(!isNaN(parseInt(input, 10)) && input.match(/[^0-9]/) === null ){
    unix = parseInt(input, 10);     // parse parameter to int
    date = new Date(unix*1000); // get date from Unix timestamp
    
    // Not a valid date
    if(isNaN(date.getTime())){
      unix = null;
      natural = null;
    }
    else{
      // Set natural
      natural = months[date.getMonth()] + " " + date.getDate() + ", " + (date.getYear() + 1900);
    }
    
  }
  // If a natural date is provided
  else{
    date = new Date(input);

    // Not a valid date
    if(isNaN(date.getTime())){
      unix = null;
      natural = null;
    } 
    else{
      // Set natural
      natural = months[date.getMonth()] + " " + date.getDate() + ", " + (date.getYear() + 1900);
    
      // Set unix
      unix = Date.parse(input)/1000;
    }
  }

  
  //
  //{"unix":1450134000,"natural":"December 15, 2015"}

  // Build response
  response = { "unix": unix, "natural": natural };

  return response;
};
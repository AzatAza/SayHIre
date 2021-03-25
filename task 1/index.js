function badAPI() {
  var brakets = str.split(''),
      open = ['{', '['],
      close = ['}', ']'],
      stack = [],
      openbr,
      closebr;
  if ((str.split('"').length - 1) % 2 === 0) {
    
  } else {
    return false;
  };
  
  for (let i = 0; i < brakets.length; i++) {
    openbr = open.indexOf(brakets[i]);
    if (openbr !== -1) {
      stack.push(openbr);
      continue;
    }
    closebr = close.indexOf(brakets[i]);
    if (closebr !== -1) {
      openbr = stack.pop();
      if (closebr !== openbr) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

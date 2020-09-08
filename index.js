

function takeANumber(line, name) {
  line.push(name) ;
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var message = `${line.length === 0 ? 'There is nobody waiting to be served!' : `Currently serving ${line[0]}.`}`;
  line.shift();
  return message
}

function currentLine(line) {
  if (line.length === 0) {
    message = 'The line is currently empty.';
  } else {
    for (i = 0; i < line.length; i ++) {
      
    }
  }
  return `${line.length === 0 ? 'The line is currently empty.' : `${for (i = 0; i < line.length; i ++) {return `${i+1}. ${line[i]}`}`;
}
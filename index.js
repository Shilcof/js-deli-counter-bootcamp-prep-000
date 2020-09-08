

function takeANumber(line, name) {
  line.push(name) ;
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var message = `${line.length === 0 ? 'The line is currently empty.
  ' : `Currently serving ${line[0]}.`}`;
  line.shift();
  return message
}
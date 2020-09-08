

function takeANumber(line, name) {
  line.push(name) ;
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var message = `${line.length === 0 ? 'There is nobody waiting to be served!' : `Currently serving ${line[0]}.`}`;
  line.shift();
  return message
}
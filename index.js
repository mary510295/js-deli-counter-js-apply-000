//function takeANumber(katzDeliLine, newName) {
//  katzDeliLine.push(newName)
//  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in/ line.`
//}

function takeANumber(katzDeliLine) {
  var newNumber = katzDeliLine.length+1
  katzDeliLine.push(newNumber)
  return ` You are number ${newNumber} in line.`
}

console.log(takeANumber(katzDeliLine))

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {return "There is nobody waiting to be served!"}
  else {return `Currently serving ${katzDeliLine.shift()}.`}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length===0) {return "The line is currently empty."}
  else {
  let arr = []
    for(var i=0; i<katzDeliLine.length; i++) {
    arr.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
  return `The line is currently:${arr}`
  }
}
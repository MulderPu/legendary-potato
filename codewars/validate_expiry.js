var checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  var codeValid = false
  var dateValid = false
  var currentMsec = Date.parse(currentDate)
  var expiredMsec = Date.parse(expirationDate)
  if (enteredCode === correctCode) {
    codeValid = true
  }
  if (currentMsec <= expiredMsec) {
    dateValid = true
  }
  if (codeValid === true && dateValid === true) {
    return true
  } else {
    return false
  }
}

var enteredCode = '123a'
var correctCode = '123'
var currentDate = 'September 5, 2014'
var expirationDate = 'October 1, 2014'
console.log(checkCoupon(enteredCode, correctCode, currentDate, expirationDate))

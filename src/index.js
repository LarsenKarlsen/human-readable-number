module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
    let unit = number % 10
    let ten = (number % 100 >= 10) ? Math.floor(number % 100 / 10) : 0
    let hundred = (number / 100 >= 1) ? Math.floor(number / 100) : 0
  
    console.log(`unit: ${unit}\nten: ${ten}\nhundred: ${hundred}`)
  
    if (number === 0) {
      return units[0]
    } else if (ten > 0 && ten < 2 && hundred === 0) {
      return teens[unit]
    }
  
    let unitReadable = (unit >= 1 && ten !== 1) ? units[unit]: ""
    let tenReadable = ten > 1 ? tens[ten]: ten === 1 ? teens[unit] : ""
    let hundredReadable = hundred > 0 ? units[hundred] + " hundred": ""
    return `${hundred > 0 ? hundredReadable + " ": ""}${ten > 0? tenReadable + " ":""}${unitReadable}`.trimEnd()
}

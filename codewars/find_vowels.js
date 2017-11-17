var vowelIndices = (word) => {
	var array = word.split('')
	var temp_array = array
  var result = array.map((letter) => {
		if (letter.match(/[aeiouyAEIOUY]/)){
			var index = temp_array.indexOf(letter) + 1
			temp_array[index-1] = 'B'
			return index
		} else {
			return ''
		}
  }).filter((char) => {
    return char !== ''
  })

  return result
}

var word = 'YoMama'
console.log(vowelIndices(word))

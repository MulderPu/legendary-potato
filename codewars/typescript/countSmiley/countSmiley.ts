let countSmiley = (arr: string[]) => {
	return arr.filter((data) => {
		return /^[:;][-~]?[)D]$/.test(data)
	}).length
}

let arr:string[] = [';~(' , ';o)' , ';oD' , ';-D' , ':)' , ';~)' , ':~>']
console.log(countSmiley(arr))

# ds18b20 reader
var temp = require('redi-ds18b20')
temp(1,(data)=>{
	console.log('current temp',data)
})

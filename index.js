let ds18b20 = require('ds18b20')
module.exports = (interval,callback)=>{
	let lasttemp = 0
	setInterval(()=>{
		ds18b20.sensors((err, ids)=>{
			for( let i=0; i<ids.length; i++ ){
			 	ds18b20.temperature(ids[i],(err, value)=>{
			 		if(value!=lasttemp){
			 			lasttemp = value
			 			callback(value)
			 		}
				})
			}
		})
	},interval*1000)
}
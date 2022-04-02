const data = d3.csv('data/LearnWithLeon stream statistics - ClassData.csv').then((data) => {
	data.forEach((x) => {
		//change strings to numbers
		x.Class = +x.Class
		x['Average concurrent viewers'] = +x['Average concurrent viewers']
		x['Peak viewers'] = +x['Peak viewers']

		//remove percent sign and change to a number
		function removePercentSign(str, property) {
			return str[property] = Number(str[property].slice(0, str[property].length - 1))
		}
		removePercentSign(x, 'Percent change in average concurrent viewers ')
		removePercentSign(x, 'Percent change in average concurrent viewers from first class')
		removePercentSign(x, 'Percent left on average concurrent viewers from first class')

		//parse date
		x.date = new Date(String(x.date));

		//convert hh:mm:ss to seconds
		x.durationInSeconds = x.Duration.split(':').reduce((sum, newValue, i) => {
			if (i === 0) {
				return sum + 3600 * +newValue;
			}
			if (i === 1) {
				return sum + 60 * +newValue;
			}
			return sum + +newValue;
		}, 0);
		return x;
	});
	console.log(data);
	return data;
});

// d3
// 	.select('.averageConcurrentViewers')
// 	.selectAll('p')
// 	.data(data)
// 	.enter()
// 	.append('p');
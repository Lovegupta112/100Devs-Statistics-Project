d3
	.select('.averageConcurrentViewers')
	.selectAll('p')
	.data(data)
	.enter()
	.append('p');

const data = d3.csv('data/LearnWithLeon stream statistics - ClassData.csv').then((data) => {
	data.forEach((x) => {
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

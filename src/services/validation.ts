export function chooseLogo(title: string) {
	console.log(title)
	if (title === 'Clear') {
		return './clear.png'
	} else if (title === 'Clouds') {
		return './cloud.png'
	} else if (title === 'Rain' || title === 'Thunderstorm') {
		return './rain.png'
	} else if (title === 'Mist') {
		return './mist.png'
	} else {
		return './cloud.png'
	}
}

export function roundInfo(param: number) {
	return Math.round(param)
}

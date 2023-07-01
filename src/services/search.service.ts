import axios from 'axios'

const API_KEY: string = '95a7a261382b8dcf05c5b2619ea9db83'

export const SearchService = {
	async gedData(city: string) {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
		)

		return response.data
	},
}

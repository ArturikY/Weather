import styles from './Search.module.scss'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { IInfo } from '../../types/info.interface'
import { useState } from 'react'
import { SearchService } from '../../services/search.service'
import { roundInfo } from '../../services/validation'
import { ISetInfo } from '../../types/setInfo.interface'

export const Search: React.FC<ISetInfo> = ({ setInfo }) => {
	const [city, setCity] = useState('')

	const searchWeather = async (city: string) => {
		const data = await SearchService.gedData(city)

		const newInfo: IInfo = {
			title: data.weather[0].main,
			temperature: roundInfo(data.main.temp - 273),
			description: data.weather[0].description,
			humidity: roundInfo(data.main.humidity),
			wind: roundInfo(data.wind.speed),
		}

		setInfo(newInfo)
		document.querySelector('.info')?.classList.add('active')
	}

	return (
		<div className={styles.container}>
			<div className={styles.location_logo}>
				<MdLocationOn />
			</div>
			<form action='#' className={styles.form}>
				<input
					type='text'
					className={styles.input}
					placeholder='Enter Location'
					onChange={e => setCity(e.target.value)}
					value={city}
				/>
			</form>
			<div onClick={() => searchWeather(city)} className={styles.search_logo}>
				<AiOutlineSearch />
			</div>
		</div>
	)
}

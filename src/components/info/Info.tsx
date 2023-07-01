import styles from './Info.module.scss'
import { WiHumidity } from 'react-icons/wi'
import { BsWind } from 'react-icons/bs'
import { IInfo } from '../../types/info.interface'
import { chooseLogo } from '../../services/validation'

export const Info: React.FC<{ info: IInfo }> = ({ info }) => {
	return (
		<div className='info'>
			<div className={styles.image}>
				<img src={`${chooseLogo(info.title)}`} />
			</div>
			<div className={styles.data}>
				<div className={styles.temperature}>
					<h2>{info.temperature}</h2>
					<div>&deg;C</div>
				</div>
				<p className={styles.description}>{info.description}</p>
			</div>
			<div className={styles.parameters}>
				<div className={styles.humidity}>
					<div className={styles.logo}>
						<WiHumidity />
					</div>
					<div className={styles.value}>
						<span>{info.humidity}%</span>
						<p>Humidity</p>
					</div>
				</div>
				<div className={styles.wind}>
					<div className={styles.logo}>
						<BsWind />
					</div>
					<div className={styles.value}>
						<span>{info.wind}M/s</span>
						<p>Wind Speed</p>
					</div>
				</div>
			</div>
		</div>
	)
}

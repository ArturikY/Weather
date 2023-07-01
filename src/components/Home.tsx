import { useState } from 'react'
import { Info } from './info/Info'
import { Search } from './search/Search'
import { IInfo } from '../types/info.interface'

export const Home: React.FC = () => {
	const [info, setInfo] = useState<IInfo>({
		title: '',
		temperature: 0,
		description: '',
		humidity: 0,
		wind: 0,
	})

	return (
		<div className='content'>
			<div className='main'>
				<Search setInfo={setInfo} />
				<Info info={info} />
			</div>
		</div>
	)
}

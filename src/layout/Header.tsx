import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { SearchInput } from '../components/ui/SearchInput'
import { Netflix } from '../icons/Netflix'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Header: React.FC<Props> = (props) => {
	return (
		<div {...props}>
			<header className='h-16'>
				<div className='flex h-full items-center justify-between'>
					<div className='flex items-center gap-6'>
						<Link to='/'>
							<Netflix className='h-auto w-28 p-2 text-[#e50914]' />
						</Link>
						<Navbar className='hidden lg:flex' />
					</div>

					<SearchInput className='hidden lg:flex' />
				</div>
			</header>
		</div>
	)
}

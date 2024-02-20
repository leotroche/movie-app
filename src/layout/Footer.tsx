import { Github } from '../icons/Github'
import { LinkedIn } from '../icons/LinkedIn'

const SOCIAL_NETWORKS = [
	{
		name: 'Github',
		icon: Github,
		to: 'https://github.com/',
	},
	{
		name: 'LinkedIn',
		icon: LinkedIn,
		to: 'https://www.linkedin.com/',
	},
]

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer: React.FC<Props> = (props) => {
	return (
		<div {...props}>
			<footer className='flex h-48 flex-col items-center justify-center gap-8'>
				<p className='text-center text-lg'>
					This website is made with 💕 for educational purposes.
				</p>
				<div className='flex gap-12'>
					{SOCIAL_NETWORKS.map(({ name, icon: Icon, to }) => {
						return (
							<a
								key={name}
								className='rounded-full p-2 transition-colors hover:bg-white/50'
								href={to}
								rel='noreferrer'
								target='_blank'
							>
								<Icon className='h-auto w-10' />
							</a>
						)
					})}
				</div>
			</footer>
		</div>
	)
}

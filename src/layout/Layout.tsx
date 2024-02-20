import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
	return (
		<div className='space-y-12'>
			<Header className='sticky top-0 z-10 bg-gradient-to-b from-[#060606] to-[#141414] px-main' />
			<main className='min-h-dvh px-main'>
				<Outlet />
			</main>
			<Footer className='bg-body px-main' />
		</div>
	)
}

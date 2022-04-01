import Head       from 'next/head'
import { FC }     from 'react'
import { Navbar } from '../ui'

interface Props {
	title?: string
}

export const Layout: FC<Props> = ( { children, title } ) => {
	const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin

	return (
		<>
		<Head>
			<title>{ title || 'Pokemon App' }</title>
			<meta name={ 'author' } content={ 'Eduardo Garza' } />
			<meta name={ 'description' } content={ `Informacion sobre el pokemon ${ title }` } />
			<meta name={ 'keyword' } content={ `${ title }, pokemon, pokedex` } />
			<meta property="og:title" content={ `Información sobre ${ title }` } />
			<meta property="og:description" content={ `Esta es la pagina sobre ${ title }` } />
			<meta property="og:image" content={ `${ origin }/img/banner.png` } />
		</Head>

		<Navbar />

		<main>
			{ children }
		</main>
	</>
	)
}

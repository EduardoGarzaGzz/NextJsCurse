import Head       from 'next/head'
import { FC }     from 'react'
import { Navbar } from '../ui/Navbar'

interface Props {
	title?: string
}

export const Layout: FC<Props> = ( { children, title } ) => (
	<>
		<Head>
			<title>{ title || 'Pokemon App' }</title>
			<meta name={ 'author' } content={ 'Eduardo Garza' } />
			<meta name={ 'description' } content={ `Informacion sobre el pokemon ${ title }` } />
			<meta name={ 'keyword' } content={ `${ title }, pokemon, pokedex` } />
		</Head>

		<Navbar />

		<main>
			{ children }
		</main>
	</>
)

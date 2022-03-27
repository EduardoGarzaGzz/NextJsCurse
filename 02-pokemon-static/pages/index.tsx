import { Button }        from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout }        from '../components/layouts'

const HomePage: NextPage = () => {
	return (
		<Layout title={ 'Lista de pokemons' }>
			<h1>Hola mundo</h1>
			<Button color={ 'gradient' }>Click</Button>
		</Layout>
	)
}

export default HomePage

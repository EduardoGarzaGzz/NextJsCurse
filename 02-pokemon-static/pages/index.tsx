import { Grid }                                                 from '@nextui-org/react'
import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { pokeApi }                                              from '../api'
import { Layout }                                               from '../components/layouts'
import { PokemonCard }                                          from '../components/pokemon'
import { PokemonListResponse, SmallPokemon }                    from '../interfaces'

interface Props {
	pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ( { pokemons } ) => {
	return (
		<Layout title={ 'Lista de Pokémon' }>
			<h1>Hola mundo</h1>

			<Grid.Container gap={ 2 } justify={ 'flex-start' }>
				{ pokemons.map( ( pokemon: SmallPokemon, idx: number ) =>
					<PokemonCard key={ idx } pokemon={ pokemon } />
				) }
			</Grid.Container>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async ( ctx: GetStaticPropsContext ) => {
	const { data }                 = await pokeApi.get<PokemonListResponse>( `/pokemon?limit=151` )
	const pokemons: SmallPokemon[] = data.results.map( ( el: SmallPokemon, idx: number ) => ( {
		...el,
		id : idx + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${ idx + 1 }.png`
	} ) )
	return {
		props: {
			pokemons
		}
	}
}

export default HomePage

import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter }                                                                    from 'next/router'
import { FC }                                                                           from 'react'
import { pokeApi }                                                                      from '../../api'
import { Layout }                                                                       from '../../components/layouts'
import { PokemonFull }                                                                  from '../../interfaces'

interface Props {
	pokemon: PokemonFull
}

const PokemonPage: FC<Props> = ( { pokemon } ) => {
	const router = useRouter()

	return (
		<Layout title={ 'Algun pokemon' }>
			<h1>{ pokemon.name }</h1>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async ( ctx: GetStaticPathsContext ) => {
	const pokemons151 = [ ...Array( 151 ) ].map( ( _, idx ) => `${ idx + 1 }` )

	return {
		paths   : pokemons151.map( id => ( {
			params: { id }
		} ) ),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ( { params }: GetStaticPropsContext ) => {
	const { id }   = params as { id: string }
	const { data } = await pokeApi.get<PokemonFull>( `/pokemon/${ id }` )

	return {
		props: {
			pokemon: data
		}
	}
}

export default PokemonPage

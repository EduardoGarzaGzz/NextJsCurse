import { Button, Card, Container, Grid, Image, Text }                                             from '@nextui-org/react'
import confetti                                                                                   from 'canvas-confetti'
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { useState }                                                                               from 'react'
import { pokeApi }                                                                                from '../../api'
import { Layout }                                                                                 from '../../components/layouts'
import { PokemonFull, PokemonListResponse }                                                       from '../../interfaces'
import { getPokemonInfo, localFavorites }                                                         from '../../utils'

interface Props {
	pokemon: PokemonFull
}

const PokemonByNamePage: NextPage<Props> = ( { pokemon } ) => {
	const [ isInFavorites, setIsFavorites ] = useState( localFavorites.isExistInFavorites( pokemon.id ) )

	const onToggleFavorite = () => {
		localFavorites.toggleFavorite( pokemon.id )
		setIsFavorites( !isInFavorites )

		if ( isInFavorites ) return

		const randomInRange = ( min: number, max: number ) => Math.random() * ( max - min ) + min

		for ( let i = 0; i < 25; i++ ) {
			confetti( {
				zIndex       : 999,
				angle        : randomInRange( 55, 125 ),
				spread       : randomInRange( 50, 70 ),
				particleCount: randomInRange( 10, 50 ),
				origin       : {
					x: randomInRange( 0, 1 ),
					y: randomInRange( 0, 1 )
				}
			} )
		}
	}

	return (
		<Layout title={ pokemon.name }>
			<Grid.Container gap={ 2 } css={ {
				marginTop: '5px'
			} }>
				<Grid xs={ 12 } sm={ 4 }>
					<Card hoverable css={ { padding: '30px' } }>
						<Card.Body>
							<Card.Image
								src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
								alt={ pokemon.name }
								width={ '100%' }
								height={ 200 }
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={ 12 } sm={ 8 }>
					<Card>
						<Card.Header css={ {
							display       : 'flex',
							justifyContent: 'space-between'
						} }>
							<Text h1 transform={ 'capitalize' }>{ pokemon.name }</Text>
							<Button color={ 'gradient' } ghost={ !isInFavorites } onClick={ onToggleFavorite }>
								{ isInFavorites ? 'En Favoritos' : 'Guardar en favoritos' }
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={ 30 }>Sprites:</Text>
							<Container direction={ 'row' } display={ 'flex' }>
								<Image
									src={ pokemon.sprites.front_default }
									alt={ pokemon.name }
									width={ 100 }
									height={ 100 } />
								<Image
									src={ pokemon.sprites.back_default }
									alt={ pokemon.name }
									width={ 100 }
									height={ 100 } />
								<Image
									src={ pokemon.sprites.front_shiny }
									alt={ pokemon.name }
									width={ 100 }
									height={ 100 } />
								<Image
									src={ pokemon.sprites.back_shiny }
									alt={ pokemon.name }
									width={ 100 }
									height={ 100 } />
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async ( ctx: GetStaticPathsContext ) => {
	const { data }               = await pokeApi.get<PokemonListResponse>( `/pokemon?limit=1` )
	const pokemonsName: string[] = data.results.map( ( { name } ) => name )

	return {
		paths   : pokemonsName.map( name => ( {
			params: { name }
		} ) ),
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ( { params }: GetStaticPropsContext ) => {
	const { name } = params as { name: string }
	const pokemon = await getPokemonInfo( name )

	if ( !pokemon ) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			pokemon
		}
	}
}

export default PokemonByNamePage

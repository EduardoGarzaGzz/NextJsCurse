import { Button, Card, Container, Grid, Image, Text }                                             from '@nextui-org/react'
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { useState }                                                                               from 'react'
import { pokeApi }                                                                                from '../../api'
import { Layout }                                                                                 from '../../components/layouts'
import { PokemonFull }                                                                            from '../../interfaces'
import { localFavorites }                                                                         from '../../utils'

interface Props {
	pokemon: PokemonFull
}

const PokemonPage: NextPage<Props> = ( { pokemon } ) => {
	const [ isInFavorites, setIsFavorites ] = useState( localFavorites.isExistInFavorites( pokemon.id ) )

	const onToggleFavorite = () => {
		localFavorites.toggleFavorite( pokemon.id )
		setIsFavorites( !isInFavorites )
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

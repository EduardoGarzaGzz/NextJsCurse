import { Container, Image, Text } from '@nextui-org/react'

export const NoFavorites = ( {} ) => (
	<Container css={ {
		display       : 'flex',
		flexDirection : 'column',
		height        : 'calc( 100vh - 100px )',
		alignItems    : 'center',
		justifyContent: 'center',
		alignSelf     : 'center'
	} }>
			<Text h1>No hay favoritos</Text>
			<Image css={ {
				opacity: 0.1
			} }
				   width={ 250 }
				   height={ 250 }
				   src={ 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png' }
				   alt={ 'Pokemon 17' } />
	</Container>
)

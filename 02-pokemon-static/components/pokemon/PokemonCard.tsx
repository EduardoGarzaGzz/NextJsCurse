import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter }             from 'next/router'
import { FC }                    from 'react'
import { SmallPokemon }          from '../../interfaces'

interface Props {
	pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ( { pokemon } ) => {
	const { id, img, name } = pokemon
	const router            = useRouter()
	const onClickPokemon    = () => {
		router.push( `/name/${ pokemon.name }` ).then()
	}

	return (
		<Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 }>
			<Card hoverable clickable onClick={ onClickPokemon }>
				<Card.Body css={ { p: 1 } }>
					<Card.Image src={ img } width={ '100%' } height={ 140 } />
				</Card.Body>
				<Card.Footer>
					<Row justify={ 'space-between' }>
						<Text>{ name }</Text>
						<Text>#{ id }</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	)
}

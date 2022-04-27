import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { FC }                                         from 'react'

export const EntryCard: FC = () => {

	return (
		<Card sx={ { marginBottom: 1 } }>
			<CardContent>
				<Typography sx={ { whiteSpace: 'pre-line' } }>Esto es la description</Typography>
			</CardContent>
			<CardActions sx={ { display: 'flex', justifyContent: 'end', paddingRight: 2 } }>
				<Typography variant={ 'body2' }>hace 30 minutos</Typography>
			</CardActions>
		</Card>
	)
}

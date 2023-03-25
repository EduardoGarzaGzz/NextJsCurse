import { Card, CardActions, CardContent, CircularProgress, Typography } from '@mui/material'
import { DragEvent, FC, useContext } from 'react'
import { UIContext } from '../../context/ui'
import { Entry } from '../../interfaces'
import { useRouter } from "next/router";
import { dateFunctions } from '../../utils'

interface Props {
	entry: Entry
}

export const EntryCard: FC<Props> = ( { entry } ) => {
	const { startDragging, endDragging } = useContext( UIContext )
	const router = useRouter()

	const onDragStart = ( event: DragEvent ) => {
		event.dataTransfer.setData( 'text', entry._id )
		startDragging()
	}

	const onDragEnd = () => {
		endDragging()
	}

	const onClick = () => {
		router.push( `/entries/${ entry._id }` ).catch()
	}

	return (
		<Card sx={ { marginBottom: 1 } }
			  draggable={ true }
			  onClick={ onClick }
			  onDragStart={ onDragStart }>
			<CardContent>
				<Typography sx={ { whiteSpace: 'pre-line' } }>{ entry.description }</Typography>
			</CardContent>
			<CardActions sx={ { display: 'flex', justifyContent: 'end', paddingRight: 2 } }>
				<Typography variant={ 'body2' }>
					{ dateFunctions.getFormatDistanceToNow( entry.createAt ) } { ( false ) ?
					<CircularProgress size={ 10 }/> : '' }
				</Typography>
			</CardActions>
		</Card>
	)
}

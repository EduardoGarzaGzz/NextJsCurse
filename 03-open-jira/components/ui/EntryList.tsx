import { List, Paper } from '@mui/material'
import { FC }          from 'react'
import { EntryCard }   from './EntryCard'

export const EntryList: FC = () => {

	return (
		<div>
			<Paper sx={ {
				height         : 'calc(100vh - 250px)',
				overflow       : 'scroll',
				backgroundColor: 'transparent',
				padding        : 1
			} }>
				<List sx={ { opacity: 1 } }>
					<EntryCard />
				</List>
			</Paper>
		</div>
	)
}

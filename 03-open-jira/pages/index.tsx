import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import type { NextPage }                       from 'next'
import { Layout }                              from '../components/layouts'
import { EntryList }                           from '../components/ui'

const HomePage: NextPage = () => {
	return (
		<Layout title={ 'Home open jira' }>
			<Grid container spacing={ 2 }>
				<Grid item xs={ 12 } sm={ 4 }>
					<Card sx={ { height: 'calc( 100vh - 100px )' } }>
						<CardHeader title={ 'Pendientes' } />
						<CardContent>
							<EntryList />
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={ 12 } sm={ 4 }>
					<Card sx={ { height: 'calc( 100vh - 100px )' } }>
						<CardHeader title={ 'En progreso' } />
						<CardContent>
							<EntryList />
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={ 12 } sm={ 4 }>
					<Card sx={ { height: 'calc( 100vh - 100px )' } }>
						<CardHeader title={ 'Completadas' } />
						<CardContent>
							<EntryList />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default HomePage

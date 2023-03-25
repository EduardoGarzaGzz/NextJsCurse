import { Layout } from "../../components/layouts";
import {
	Button,
	capitalize,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	IconButton,
	Radio,
	RadioGroup,
	TextField
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Entry, EntryStatus } from "../../interfaces";
import { ChangeEvent, FC, useContext, useMemo, useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { dbEntries } from "../../database";
import { EntriesContext } from "../../context/entries";
import { dateFunctions } from '../../utils'

interface Props {
	entry: Entry
}

const validStatus: EntryStatus[] = [ 'pending', 'in-progress', "finished" ]

export const EntryPage: FC<Props> = ( { entry } ) => {
	const { updateEntry, deleteEntry } = useContext( EntriesContext )
	const [ inputValue, setInputValue ] = useState( entry.description )
	const [ status, setStatus ] = useState<EntryStatus>( entry.status )
	const [ touched, setTouched ] = useState( false )
	const isNotValid = useMemo( () => inputValue.length <= 0 && touched, [ inputValue, touched ] )

	const onInputValueChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
		setInputValue( event.target.value )
	}

	const onStatusChanged = ( event: ChangeEvent<HTMLInputElement>, value: string ) => {
		setStatus( value as EntryStatus )
	}

	const onSave = () => {
		if ( inputValue.trim().length === 0 ) return

		const updatedEntry: Entry = {
			...entry,
			description: inputValue,
			status
		}

		updateEntry( updatedEntry, true )
	}

	const onClickEntryDelete = () => {
		deleteEntry( entry._id )
	}

	return (
		<Layout title={ inputValue.substring( 0, 20 ) + '...' }>
			<Grid container justifyContent={ 'center' } sx={ { marginTop: 2 } }>
				<Grid item xs={ 12 } sm={ 8 } md={ 6 }>
					<Card>
						<CardHeader title={ 'Entrada:' }
									subheader={ `Creada ${ dateFunctions.getFormatDistanceToNow( entry.createAt ) }` }/>
						<CardContent>
							<TextField sx={ { marginTop: 2, marginBottom: 1 } }
									   fullWidth
									   autoFocus
									   multiline
									   value={ inputValue }
									   onChange={ onInputValueChanged }
									   onBlur={ () => setTouched( true ) }
									   helperText={
										   isNotValid && 'Ingrese un valor'
									   }
									   error={
										   isNotValid
									   }
									   label={ 'Nueva entrada' }
									   placeholder={ 'Nueva entrada' }/>
							<FormControl>
								<FormLabel>Estado:</FormLabel>
								<RadioGroup row value={ status } onChange={ onStatusChanged }>
									{
										validStatus.map( option => (
											<FormControlLabel key={ option }
															  label={ capitalize( option ) }
															  value={ option }
															  control={ <Radio/> }/>
										) )
									}
								</RadioGroup>
							</FormControl>
						</CardContent>
						<CardActions>
							<Button startIcon={ <SaveOutlinedIcon/> }
									variant={ 'contained' }
									disabled={ inputValue.length <= 0 }
									fullWidth
									onClick={ onSave }>
								Save
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
			<IconButton onClick={ onClickEntryDelete }
						sx={ {
							position: 'fixed',
							bottom: 30,
							right: 30,
							backgroundColor: 'error.dark'
						} }>
				<DeleteOutlinedIcon/>
			</IconButton>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ( { params }: GetServerSidePropsContext ) => {
	const { id } = params as { id: string }
	const entry = await dbEntries.getEntryById( id )

	if ( !entry ) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			entry
		}
	}
}

export default EntryPage

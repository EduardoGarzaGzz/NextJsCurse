import { FC, useEffect, useReducer } from 'react'
import { Entry } from '../../interfaces'
import { EntriesContext, entriesReducer } from './'
import entriesApi from "../../apis/entriesApi";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

export interface EntriesState {
	entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: []
}

export const EntriesProvider: FC = ( { children } ) => {
	const [ state, dispatch ] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE )
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()

	const addNewEntry = async ( description: string ) => {
		const { data } = await entriesApi.post<Entry>( '/entries', {
			description
		} )
		dispatch( { type: '[Entry] Add-Entry', payload: data } )
	}

	const updateEntry = async ( { _id, description, status }: Entry, showSnackbar = false ) => {
		try {
			const { data } = await entriesApi.put<Entry>( `entries/${ _id }`, { description, status } )
			dispatch( { type: '[Entry] Entry-Update', payload: data } )

			if ( showSnackbar )
				enqueueSnackbar( 'Entrada actualizada', {
					variant: 'success',
					autoHideDuration: 1500,
					anchorOrigin: {
						vertical: 'top',
						horizontal: 'right'
					}
				} )
		} catch ( error ) {
			console.log( { error } )
		}
	}

	const refreshEntries = async () => {
		const { data } = await entriesApi.get<Entry[]>( 'entries' )
		dispatch( { type: '[Entry] Refresh-Data', payload: data } )
	}

	const deleteEntry = async ( _id: string ): Promise<void> => {
		const { data } = await entriesApi.delete( `entries/${ _id }` )
		dispatch( { type: '[Entry] Entry-Delete', payload: data } )
		router.push( '/' ).catch()

		enqueueSnackbar( 'Entrada eliminada', {
			variant: 'warning',
			autoHideDuration: 1500,
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'right'
			}
		} )
	}

	useEffect( () => {
		refreshEntries().finally()
	}, [] )

	return (
		<EntriesContext.Provider value={ {
			...state,
			addNewEntry,
			updateEntry,
			deleteEntry
		} }>
			{ children }
		</EntriesContext.Provider>
	)
}

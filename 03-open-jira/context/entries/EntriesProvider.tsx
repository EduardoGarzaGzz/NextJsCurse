import { FC, useReducer }                 from 'react'
import { v4 as uuidv4 }                   from 'uuid'
import { Entry }                          from '../../interfaces'
import { EntriesContext, entriesReducer } from './'

export interface EntriesState {
	entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id        : uuidv4(),
			description: 'Pendiente: Going to the afterworld doesn’t meet moonlight anymore than knowing creates outer tantra.Pol, a bene calcaria',
			status     : 'pending',
			createAt   : Date.now()
		},
		{
			_id        : uuidv4(),
			description: 'En progreso: Going to the afterworld doesn’t meet moonlight anymore than knowing creates outer tantra.Pol, a bene calcaria',
			status     : 'in-progress',
			createAt   : Date.now() - 1000000
		},
		{
			_id        : uuidv4(),
			description: 'Finalizado: Going to the afterworld doesn’t meet moonlight anymore than knowing creates outer tantra.Pol, a bene calcaria',
			status     : 'finished',
			createAt   : Date.now() - 152000
		}
	]
}

export const EntriesProvider: FC = ( { children } ) => {
	const [ state, dispatch ] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE )
	const addNewEntry         = ( description: string ) => {
		const newEntry: Entry = {
			_id     : uuidv4(),
			createAt: Date.now(),
			description,
			status  : 'pending'
		}

		dispatch( { type: '[Entry] Add-Entry', payload: newEntry } )
	}

	const updateEntry = ( entry: Entry ) => {
		dispatch( { type: '[Entry] Entry-Update', payload: entry } )
	}

	return (
		<EntriesContext.Provider value={ {
			...state,
			addNewEntry,
			updateEntry
		} }>
			{ children }
		</EntriesContext.Provider>
	)
}

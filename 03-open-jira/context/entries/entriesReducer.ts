import { Entry } from '../../interfaces'
import { EntriesState } from './EntriesProvider'

type EntriesActionType =
	| { type: '[Entry] Add-Entry', payload: Entry }
	| { type: '[Entry] Entry-Update', payload: Entry }
	| { type: '[Entry] Entry-Delete', payload: string }
	| { type: '[Entry] Refresh-Data', payload: Entry[] }

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {
	switch ( action.type ) {
		case '[Entry] Add-Entry':
			return {
				...state,
				entries: [ ...state.entries, action.payload ]
			}
		case '[Entry] Entry-Update':
			return {
				...state,
				entries: state.entries.map( entry => {
					if ( entry._id === action.payload._id ) return action.payload
					return entry
				} )
			}
		case '[Entry] Refresh-Data':
			return {
				...state,
				entries: [ ...action.payload ]
			}
		case '[Entry] Entry-Delete':
			return {
				...state,
				entries: state.entries.filter( entry => entry._id !== action.payload )
			}
		default:
			return state
	}
}

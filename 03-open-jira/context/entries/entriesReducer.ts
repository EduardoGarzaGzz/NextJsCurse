import { Entry }        from '../../interfaces'
import { EntriesState } from './EntriesProvider'

type EntriesActionType =
	| { type: '[Entry] Add-Entry', payload: Entry }
	| { type: '[Entry] Entry-Update', payload: Entry }

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
		default:
			return state
	}
}

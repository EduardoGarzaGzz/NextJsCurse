import { createContext } from 'react'
import { Entry }         from '../../interfaces'

interface EntriesProps {
	entries: Entry[],
	addNewEntry: ( description: string ) => void
	updateEntry: ( entry: Entry ) => void
}

export const EntriesContext = createContext( {} as EntriesProps )

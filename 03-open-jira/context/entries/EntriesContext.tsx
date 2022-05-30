import { createContext } from 'react'
import { Entry }         from '../../interfaces'

interface EntriesProps {
	entries: Entry[],
	addNewEntry: ( description: string ) => void
}

export const EntriesContext = createContext( {} as EntriesProps )

import { createContext } from 'react'
import { Entry }         from '../../interfaces'

interface EntriesProps {
	entries: Entry[]
}

export const EntriesContext = createContext( {} as EntriesProps )

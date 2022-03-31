const LOCAL_STORAGE_FAVORITES = 'favorites'

const toggleFavorite = ( id: number ): void => {
	let favorites: number[] = JSON.parse( localStorage.getItem( LOCAL_STORAGE_FAVORITES ) || '[]' )

	if ( favorites.includes( id ) ) {
		favorites = favorites.filter( pokeId => pokeId !== id )
	} else {
		favorites.push( id )
	}

	localStorage.setItem( LOCAL_STORAGE_FAVORITES, JSON.stringify( favorites ) )
}

const isExistInFavorites = ( id: number ): boolean => {
	if ( typeof window === 'undefined' ) return false

	const favorites: number[] = JSON.parse( localStorage.getItem( LOCAL_STORAGE_FAVORITES ) || '[]' )
	return favorites.includes( id )
}

const pokemons = (): number[] => {
	return JSON.parse( localStorage.getItem( LOCAL_STORAGE_FAVORITES ) || '[]' )
}

export default {
	toggleFavorite,
	isExistInFavorites,
	pokemons
}

import { NextPage }                      from 'next'
import { useEffect, useState }           from 'react'
import { Layout }                        from '../../components/layouts'
import { FavoritePokemons, NoFavorites } from '../../components/pokemon'
import { localFavorites }                from '../../utils'

interface Props {

}

export const FavoritesPage: NextPage<Props> = ( {} ) => {
	const [ favoritePokemons, setFavoritePokemons ] = useState<number[]>( [] )

	useEffect( () => {
		setFavoritePokemons( localFavorites.pokemons() )
	}, [] )

	return (
		<Layout title={ 'Pokemons - Favoritos' }>
			{
				favoritePokemons.length === 0
				? ( <NoFavorites /> )
				: ( <FavoritePokemons favoritePokemons={ favoritePokemons } /> )
			}
	</Layout>
	)
}

export default FavoritesPage

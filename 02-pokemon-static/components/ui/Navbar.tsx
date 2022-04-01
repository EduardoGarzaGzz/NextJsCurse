import { Image, Link, Spacer, Text, useTheme } from '@nextui-org/react'
import NextLink                                from 'next/link'

export const Navbar = () => {
	const { theme } = useTheme()

	return (
		<div style={ {
			display       : 'flex',
			width         : '100%',
			flexDirection : 'row',
			alignItems    : 'center',
			justifyContent: 'start',
			padding       : '0 20px',
			background    : theme?.colors.gray900.value
		} }>
			<NextLink href={ '/' } passHref>
				<Link>
					<Image
						alt={ 'Icono de la app' }
						width={ 70 }
						height={ 70 }
						src={ 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png' } />
				</Link>
			</NextLink>
			<NextLink href={ '/' } passHref>
				<Link>
					<Text color={ 'white' } h2>P</Text>
					<Text color={ 'white' } h3>okémon!</Text>
				</Link>
			</NextLink>
			<Spacer css={ { flex: 1 } } />
			<NextLink href={ '/favorites' } passHref>
				<Link>
					<Text color={ 'white' }>Favoritos</Text>
				</Link>
			</NextLink>
		</div>
	)
}

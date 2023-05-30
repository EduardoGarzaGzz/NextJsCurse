import { FC, useContext, useState } from "react";
import {
	AppBar,
	Badge,
	Box,
	Button,
	IconButton,
	Input,
	InputAdornment,
	Link,
	Toolbar,
	Typography
} from "@mui/material";
import NextLink from "next/link";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/router";
import { UiContext } from "@/context";
import { ClearOutlined } from "@mui/icons-material";

interface Props {
}

export const Navbar: FC<Props> = () => {
	const { toggleSideMenu } = useContext( UiContext )
	const { asPath, push } = useRouter()

	const [ searchTerm, setSearchTerm ] = useState( '' )
	const [ isSearchVisible, setIsSearchVisible ] = useState( false )

	const onSearchTerm = () => {
		if ( searchTerm.trim().length === 0 ) return

		push( `/search/${ searchTerm }` )
	}

	return (
		<AppBar>
			<Toolbar>
				<NextLink href={ '/' }>
					<Link component={ 'span' } display={ 'flex' } alignItems={ 'center' }>
						<Typography variant={ 'h6' }>Teslo |</Typography>
						<Typography sx={ { ml: 0.5 } }>Shop</Typography>
					</Link>
				</NextLink>
				<Box flex={ 1 }/>
				<Box sx={ { display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } } } className={ 'fadeIn' }>
					<NextLink href={ '/category/men' }>
						<Link component={ 'span' }>
							<Button color={ asPath === '/category/men' ? 'primary' : 'info' }>Hombres</Button>
						</Link>
					</NextLink>
					<NextLink href={ '/category/women' }>
						<Link component={ 'span' }>
							<Button color={ asPath === '/category/women' ? 'primary' : 'info' }>Mujeres</Button>
						</Link>
					</NextLink>
					<NextLink href={ '/category/kid' }>
						<Link component={ 'span' }>
							<Button color={ asPath === '/category/kid' ? 'primary' : 'info' }>Niños</Button>
						</Link>
					</NextLink>
				</Box>
				<Box flex={ 1 }/>
				{
					isSearchVisible
						? (
							<Input sx={ { display: { xs: 'none', sm: 'flex' } } }
								   value={ searchTerm }
								   className={ 'fadeIn' }
								   onChange={ ( e ) => setSearchTerm( e.target.value ) }
								   onKeyPress={ ( e ) => e.key === 'Enter' ? onSearchTerm() : null }
								   type='text'
								   placeholder="Buscar..."
								   endAdornment={
									   <InputAdornment position="end">
										   <IconButton onClick={ () => setIsSearchVisible( false ) }
													   aria-label="toggle password visibility">
											   <ClearOutlined/>
										   </IconButton>
									   </InputAdornment>
								   }
							/>
						)
						: (
							<IconButton sx={ { display: { xs: 'none', sm: 'flex' } } }
										onClick={ () => setIsSearchVisible( true ) }>
								<SearchOutlined/>
							</IconButton>
						)
				}
				<IconButton sx={ { display: { xs: 'flex', sm: 'none' } } } onClick={ () => toggleSideMenu() }>
					<SearchOutlined/>
				</IconButton>
				<NextLink href={ '/cart' }>
					<Link component={ 'span' }>
						<Badge badgeContent={ 2 } color={ 'secondary' }>
							<ShoppingCartOutlined/>
						</Badge>
					</Link>
				</NextLink>
				<Button onClick={ () => toggleSideMenu() }>Menu</Button>
			</Toolbar>
		</AppBar>
	)
}

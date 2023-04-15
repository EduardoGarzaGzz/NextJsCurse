import { FC } from "react";
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

interface Props {

}

export const Navbar: FC<Props> = () => {
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
				<Box sx={ { display: { xs: 'none', sm: 'block' } } }>
					<NextLink href={ '/category/men' }>
						<Link component={ 'span' }>
							<Button>Hombres</Button>
						</Link>
					</NextLink>
					<NextLink href={ '/category/woman' }>
						<Link component={ 'span' }>
							<Button>Mujeres</Button>
						</Link>
					</NextLink>
					<NextLink href={ '/category/kid' }>
						<Link component={ 'span' }>
							<Button>Niños</Button>
						</Link>
					</NextLink>
				</Box>
				<Box flex={ 1 }/>
				<IconButton>
					<SearchOutlined/>
				</IconButton>
				<NextLink href={ '/cart' }>
					<Link component={ 'span' }>
						<Badge badgeContent={ 2 } color={ 'secondary' }>
							<ShoppingCartOutlined/>
						</Badge>
					</Link>
				</NextLink>
				<Button>Menu</Button>
			</Toolbar>
		</AppBar>
	)
}

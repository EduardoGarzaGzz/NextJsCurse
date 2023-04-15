import React, { FC } from "react";
import { ShopLayout } from "@/components/layouts";
import { Box, Link, Typography } from "@mui/material";
import RemoveShoppingCartOutlined from "@mui/icons-material/RemoveShoppingCartOutlined";
import NextLink from "next/link";

interface Props {
	children?: React.ReactNode
}

const EmptyPage: FC<Props> = ( {} ) => {
	return (
		<ShopLayout title={ 'Carrito vació' } pageDescription={ 'No hay articulos en el carrito' }>
			<Box display={ 'flex' }
				 justifyContent={ 'center' }
				 alignItems={ 'center' }
				 height={ 'calc(100vh - 200px)' } sx={ {
				flexDirection: { xs: 'column', sm: 'row' }
			} }>
				<RemoveShoppingCartOutlined sx={ { fontSize: 100 } }/>
				<Box display={ 'flex' } flexDirection={ 'column' } alignItems={ 'center' }>
					<Typography marginLeft={ 2 }>Su carrito esta vació</Typography>
					<NextLink href={ '/' }>
						<Link component={ 'span' } typography={ 'h4' } color={ 'secondary' }>
							Regresar
						</Link>
					</NextLink>
				</Box>
			</Box>
		</ShopLayout>
	)
}

export default EmptyPage

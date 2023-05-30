import React, { FC } from "react";
import { useProducts } from "@/hooks";
import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";
import FullScreenLoading from "@/components/ui/FullScreenLoading";
import { ProductList } from "@/components/products";

interface Props {
	children?: React.ReactNode
}

const WomenCategoryPage: FC<Props> = ( {} ) => {
	const { products, isLoading } = useProducts( '/products?gender=women' )
	return (
		<ShopLayout title={ 'Teslo-Shop - Women category' }
					pageDescription={ 'Encuentra los mejores productos de teslo aqui' }>
			<Typography variant={ 'h1' } component={ 'h1' }>Mujer</Typography>
			<Typography variant={ 'h2' }>Todos los productos de mujer</Typography>
			{
				isLoading
					? <FullScreenLoading/>
					: <ProductList products={ products }/>
			}
		</ShopLayout>
	)
}

export default WomenCategoryPage

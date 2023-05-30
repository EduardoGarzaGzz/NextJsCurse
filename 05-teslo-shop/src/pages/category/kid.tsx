import React, { FC } from "react";
import { useProducts } from "@/hooks";
import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";
import FullScreenLoading from "@/components/ui/FullScreenLoading";
import { ProductList } from "@/components/products";

interface Props {
	children?: React.ReactNode
}

const KidCategoryPage: FC<Props> = ( {} ) => {
	const { products, isLoading } = useProducts( '/products?gender=kid' )
	return (
		<ShopLayout title={ 'Teslo-Shop - Kid category' }
					pageDescription={ 'Encuentra los mejores productos de teslo aqui' }>
			<Typography variant={ 'h1' } component={ 'h1' }>Niño</Typography>
			<Typography variant={ 'h2' }>Todos los productos de niño</Typography>
			{
				isLoading
					? <FullScreenLoading/>
					: <ProductList products={ products }/>
			}
		</ShopLayout>
	)
}

export default KidCategoryPage

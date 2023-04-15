import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";
import { initialData } from "@/database/products";
import React from "react";
import { ProductList } from "@/components/products";


export default function Home() {
	return (
		<ShopLayout title={ 'Teslo-Shop - Home' }
					pageDescription={ 'Encuentra los mejores productos de teslo aqui' }>
			<Typography variant={ 'h1' } component={ 'h1' }>Tienda</Typography>
			<Typography variant={ 'h2' }>Todos los productos</Typography>
			<ProductList products={ initialData.products as any[] }/>
		</ShopLayout>
	)
}

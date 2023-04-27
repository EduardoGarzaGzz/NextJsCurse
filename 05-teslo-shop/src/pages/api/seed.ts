import { NextApiRequest, NextApiResponse } from "next";
import { db, seedData } from '@/database'
import Product from "@/models/Product";

type ResponseData = {}

export default async function handler( req: NextApiRequest, res: NextApiResponse<ResponseData> ) {

	if ( process.env.NODE_ENV === 'production' ) {
		return res.status( 401 ).json( { message: 'No tienes acceso a este API' } )
	}

	try {
		await db.connect()
		await Product.deleteMany( {} )
		await Product.insertMany( seedData.initialData.products )
	} finally {
		await db.disconnect()
	}


	res.status( 200 ).json( { message: 'Proceso realizado correctamente.' } )
}

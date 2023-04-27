import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "@/interfaces";
import { db } from '@/database'
import Product from "@/models/Product";


type ResponseData = {}
	| IProduct

const getProductBySlug = async ( req: NextApiRequest, res: NextApiResponse<ResponseData> ) => {
	await db.connect()

	const { slug } = req.query
	const product = await Product.findOne( { slug } ).lean()

	await db.disconnect()

	if ( !product ) {
		return res.status( 400 ).json( { message: `No se encontró el slug: ${ slug }` } )
	}

	return res.status( 200 ).json( product as IProduct )
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<ResponseData> ) {

	switch ( req.method ) {
		case 'GET':
			return getProductBySlug( req, res )
		default:
			return res.status( 400 ).json( { message: 'Bad request.' } )
	}
}

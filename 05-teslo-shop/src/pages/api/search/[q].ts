import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "@/interfaces";
import { db } from '@/database'
import Product from "@/models/Product";


type ResponseData = {}
	| IProduct[]

const searchProducts = async ( req: NextApiRequest, res: NextApiResponse<ResponseData> ) => {
	let { q = '' } = req.query

	if ( q.length === 0 ) {
		return res.status( 400 ).json( { message: 'Bad request.' } )
	}

	q = q.toString().toLowerCase()
	await db.connect()

	const products = await Product.find( {
		$text: { $search: q }
	} ).select( 'title images prices inStock slug -_id' )
		.lean()

	await db.disconnect()

	return res.status( 200 ).json( products )
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<ResponseData> ) {

	switch ( req.method ) {
		case 'GET':
			return searchProducts( req, res )
		default:
			return res.status( 400 ).json( { message: 'Bad request.' } )
	}
}

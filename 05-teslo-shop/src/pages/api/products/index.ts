import { NextApiRequest, NextApiResponse } from "next";
import { db, SHOP_CONSTANTS } from '@/database'
import Product from "@/models/Product";
import { IProduct } from "@/interfaces";

type ResponseData = {}
	| IProduct[]

const getProducts = async ( req: NextApiRequest, res: NextApiResponse<ResponseData> ) => {
	await db.connect()

	let conditions = {}
	const { gender = 'all' } = req.query

	if ( gender !== 'all' && SHOP_CONSTANTS.validGender.includes( gender as string ) ) {
		conditions = { gender }
	}

	const products = await Product.find( conditions )
		.select( 'title images price inStock slug -_id' )
		.lean()

	await db.disconnect()

	return res.status( 200 ).json( products )
};

export default async function handler( req: NextApiRequest, res: NextApiResponse<ResponseData> ) {
	switch ( req.method ) {
		case 'GET':
			return getProducts( req, res )
		default:
			return res.status( 400 ).json( { message: 'Bad request.' } )
	}
}

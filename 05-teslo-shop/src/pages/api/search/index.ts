import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {}
export default async function handler( req: NextApiRequest, res: NextApiResponse<ResponseData> ) {
	switch ( req.method ) {
		default:
			return res.status( 400 ).json( { message: 'Bad request.' } )
	}
}

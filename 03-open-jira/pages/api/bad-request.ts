import { NextApiRequest, NextApiResponse } from "next";

type Data = {
	message: string | string[]
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
	const { message = 'Bad request' } = req.query

	res.status( 200 ).json( { message } )
}

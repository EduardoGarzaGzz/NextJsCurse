import { NextApiRequest, NextApiResponse } from "next";
import { Entry, IEntry } from "../../../models";
import { db } from '../../../database'
import mongoose from "mongoose";

type Data = { message: string }
	| string
	| IEntry
	| IEntry[]

const getOne = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
	await db.connect()

	const { id } = req.query
	const entry = await Entry.findById( id )

	if ( !entry ) {
		await db.disconnect()
		return res.status( 400 ).json( { message: 'No hay entrada con ese id: ' + id } )
	}

	await db.disconnect()
	return res.status( 200 ).json( entry! )
}

const updateEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
	await db.connect()

	const { id } = req.query
	const entryToUpdate = await Entry.findById( id )

	if ( !entryToUpdate ) {
		await db.disconnect()
		return res.status( 400 ).json( { message: 'No hay entrada con ese id: ' + id } )
	}

	const {
		description = entryToUpdate.description,
		status = entryToUpdate.status
	} = req.body

	try {
		const updateEntry = await Entry.findByIdAndUpdate( id, {
			description,
			status
		}, { runValidators: true, new: true } )

		await db.disconnect()
		return res.status( 200 ).json( updateEntry! )
	} catch ( error: any ) {
		await db.disconnect()

		console.error( { error } )
		return res.status( 200 ).json( { message: error.errors.status.message } )
	}
}

const deleteEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
	await db.connect()

	const { id } = req.query
	const entry = await Entry.findById( id )

	if ( !entry ) {
		await db.disconnect()
		return res.status( 400 ).json( { message: 'No hay entrada con ese id: ' + id } )
	}

	await entry.deleteOne()
	await db.disconnect()
	return res.status( 200 ).json( entry!._id )
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
	const { id } = req.query

	if ( !mongoose.isValidObjectId( id ) )
		return res.status( 400 ).json( { message: 'El id no es valido: ' + id } )

	switch ( req.method ) {
		case 'GET':
			return getOne( req, res )
		case 'PUT':
			return updateEntry( req, res )
		case 'DELETE':
			return deleteEntry( req, res )
		default:
			return res.status( 400 ).json( { message: 'Metodo no existe' } )
	}
}

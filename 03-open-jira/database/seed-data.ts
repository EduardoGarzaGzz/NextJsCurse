interface SeedData {
	entries: SeedEntry[]
}

interface SeedEntry {
	description: string
	status: string
	createAt: number
}

export const seedData: SeedData = {
	entries: [
		{
			description: 'Pendiente: Going to the afterworld doesn’t meet moonlight anymore than knowing creates outer tantra.Pol, a bene calcaria',
			status: 'pending',
			createAt: Date.now()
		},
		{
			description: 'En progreso: Going to the afterworld doesn’t meet moonlight anymore than knowing creates outer tantra.Pol, a bene calcaria',
			status: 'in-progress',
			createAt: Date.now() - 1000000
		},
		{
			description: 'Finalizado: Going to the afterworld doesn’t meet moonlight anymore than knowing creates outer tantra.Pol, a bene calcaria',
			status: 'finished',
			createAt: Date.now() - 152000
		}
	]
}

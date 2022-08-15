const database = require('../models');

class MesaController {
	static async pegaTodasMesas(req, res) {
		try {
			const todasMesas = await database.Mesas.findAll();
			return res.status(200).json(todasMesas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaMesa(req, res) {
		const { id } = req.params;
		try {
			const umaMesa = await database.Mesas.findOne({ where: { id: Number(id) } });
			return res.status(200).json(umaMesa);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaMesa(req, res) {
		const novaMesa = req.body;
		try {
			const novaMesaCriada = await database.Mesas.create(novaMesa);
			return res.status(201).json(novaMesaCriada);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	static async atualizaMesa(req, res) {
		const { id } = req.params;
		try {
			const novasInfo = await req.body;
			await database.Mesas.update(novasInfo, { where: { id: +id } });
			const mesaAtualizada = await database.Mesas.findOne({ where: { id: +id } });
			if (!mesaAtualizada) return res.status(404).send(`Mesa de id ${id} não existe`);
			return res.status(200).send(`Mesa de id ${id} atualizada com sucesso`);
		} catch (err) {
			res.status(500).send(error.message);
		}
	}

	static async apagaMesa(req, res) {
		const { id } = req.params;
		try {
			await database.Mesas.destroy({ where: { id: Number(id) } });
			return res.status(200).json({ mensagem: `Mesa id ${id} deletado` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = MesaController;
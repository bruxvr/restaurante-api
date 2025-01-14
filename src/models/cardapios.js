'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Cardapios extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Cardapios.hasMany(models.Pedidos, { foreignKey: 'cardapio_id' });
		}
	}
	Cardapios.init(
		{
			nome: DataTypes.STRING,
			categoria: DataTypes.STRING,
			descricao: DataTypes.STRING,
			imagem: DataTypes.STRING,
			porcao: DataTypes.STRING,
			preco: DataTypes.FLOAT,
		},
		{
			sequelize,
			modelName: 'Cardapios',
		}
	);
	return Cardapios;
};

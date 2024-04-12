const models = require("../database/models");

const createUser = async (req, res) => {
	try{
		const user = await models.Rick.create(req.body);
		return res.status(201).json({
			user
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const getAllUsers = async (req, res) => {
	console.log('getting users');
	try {
		console.log(1)
		const users = await models.Rick.findAll({
			include: [
			]
		});
		console.log (2)
		return res.status(200).json({ users});
	} catch (error) {
		console.log(error)
		return res.status(500).send(error.message);
	}
};

module.exports = {
	createUser,
	getAllUsers
};

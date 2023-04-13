const prisma = require("../prisma/client/prisma");

class UserDAO {
	constructor() {
		this.user = prisma;
	}

	async getAllUsers() {
		return await user.findMany();
	}

	async getFiltredUser(filters) {
		return await user.findMany({ where: filters });
	}

	async addNewUser(user) {
		return await user.create({ data: user });
	}

	async getUserByID(ID) {
		return await this.user.find({
			where: {
				uid: ID,
			},
		});
	}

	async getUserByEmail(email) {
		return await this.user.find({
			where: {
				email: email,
			},
		});
	}

	async deleteUser(ID) {
		return await this.user.delete({
			where: {
				uid: ID,
			},
		});
	}
	async updateUser(updates, ID) {
		return await this.user.find({
			where: {
				uid: ID,
			},
			data: updates,
		});
	}
}

const userDAO = new UserDAO();

module.exports = userDAO;

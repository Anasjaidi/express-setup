const userDAO = require("../models/userDAO");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const AppError = require("../errors/AppError");

class Auth {
  constructor() {
    this.userDAO = userDAO
  }

  async signup(user) {
    const newUser = await this.userDAO.addNewUser(user)

    const token = await this.generateToken(user.uid, process.env.JWT_SECRET_KEY, process.env.JWT_EXPIRES_IN)

    return {newUser, token}
  }

  async signin(credentails) {
    const user = await this.userDAO.getUserByEmail(credentails.email)

    if (!user || !this.compare(credentails.password, user.password)) {
      throw new AppError.Unauthorized("invalid email, or password.");
    }
  }

  async hash(payload, salt) {
    return await bcrypt.hash(payload, salt)
  }
  
  async compare(candidate, member) {
    return await bcrypt.compare(candidate, member)
  }

  async generateToken(payload, SECRET_KEY, EXPIRE_IN) {
    return jwt.sign({id: payload}, SECRET_KEY, {expiresIn: EXPIRE_IN})
  }

  async verifyToken(token, SECRET_KEY) {
    return jwt.verify(token, SECRET_KEY)
  }
}

const auth = new Auth

module.exports = auth
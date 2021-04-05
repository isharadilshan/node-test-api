const { User } = require("../models/user");

module.exports = class UserService {
  async createUser(data) {
    const { userName, displayName, password } = data;

    const new_user = new User({
      userName,
      displayName,
      password,
    });

    const response = await new_user.save();
    const res = response.toJSON();
    delete res.__v;
    return res;
  }

  async getUser(data) {
    const { userName, password } = data;
    return User.find({ userName: userName, password: password });
  }
};

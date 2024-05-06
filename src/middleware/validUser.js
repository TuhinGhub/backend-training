const userSchema = require("../config/validationJoi");

const validUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(200).json({ message: error.details[0].message });
  }
  next();
};
module.exports = validUser;

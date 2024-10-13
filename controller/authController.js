const user = require("../db/models/user");

const signup = async (req, res, next) => {
    const body = req.body;

    if(!['1'].includes(body.userType)) {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid user type',
        });
    }

    const newUser = await user.create({
        userType: body.userType,
        nickname: body.nickname,
        email: body.email,
        password: body.password,
        confirmPassword: body.confirmPassword,
        birthDate: body.birthDate
    });

    if(!newUser) {
        return res.status(400).json({
            status: 'fail',
            message: 'Failed to create the user',
        });
    }

    res.status(201).json({
        status: 'success',
        data: newUser
    });
}

module.exports = {signup}
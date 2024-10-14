const user = require("../db/models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
}

const signup = catchAsync(async (req, res, next) => {
    const body = req.body;

    if(!['1'].includes(body.userType)) {
        throw new AppError('Invalid user type', 400);
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
        throw new AppError('Failed to create the user', 400);
    }

    const result = newUser.toJSON();

    delete result.password;

    result.token = generateToken({
        id: result.id,
    })

    res.status(201).json({
        status: 'success',
        data: result
    });
});

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        throw new AppError('Incorrect email or password', 400);
    }

    const result = await user.findOne({where: {email}});
    if(!result || !(await bcrypt.compare(password, result.password))) {
        throw new AppError('Incorrect email or password', 400);
    }

    const token = generateToken({
        id: result.id,
    });

    return res.json({
        status: 'success',
        token
    })
});

module.exports = { signup, login }
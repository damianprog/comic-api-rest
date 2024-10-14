const comic = require("../db/models/comic");
const user = require("../db/models/user");
const userComic = require("../db/models/userComic");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const createUserComic = catchAsync(async (req, res, next) => {
    const body = req.body;
    const userId = req.user.id;

    const newUserComic = await userComic.create({
        category: body.category,
        userId: userId,
        comicId: body.comicId
    });

    return res.status(201).json({
        status: 'success',
        data: newUserComic,
    })
});

const getUserComicById = catchAsync(async (req, res, next) => {
    const userComicId = req.params.userComicId;
    const result = await userComic.findByPk(userComicId, {include: ['user', 'comic']});
    if(!result) {
        throw new AppError('Invalid userComicId', 400);
    }
    return res.json({
        status: 'success',
        data: result,
    })
});

const getUserComicsByUserId = catchAsync(async (req, res, next) => {
    const userId = req.params.userId;
    const results = await userComic.findAll({
        where: {userId},
        include: ['user', 'comic']
    });
    if(!results) {
        throw new AppError('UserComics for given userId do not exist');
    }
    return res.json({
        status: 'success',
        data: results,
    });
});

module.exports = {createUserComic, getUserComicById, getUserComicsByUserId}
const review = require("../db/models/review");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const createReview = catchAsync(async (req, res, next) => {
    const body = req.body;
    const userId = req.user.id;
    const comicId = req.params.comicId

    const newReview = await review.create({
        comicId,
        userId,
        text: body.text,
    });

    return res.status(201).json({
        status: 'success',
        data: newReview,
    });
});

const getComicReviews = catchAsync(async (req, res, next) => {
    const comicId = req.params.comicId;
    const results = await review.findAll({
        where: {comicId},
        include: ['user', 'comic']
    });
    if(!results) {
        throw new AppError('Reviews for given comicId do not exist');
    }
    return res.json({
        status: 'success',
        data: results,
    });
});

module.exports = {createReview, getComicReviews};
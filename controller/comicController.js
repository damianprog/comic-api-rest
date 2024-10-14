const comic = require("../db/models/comic");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const createComic = catchAsync(async (req, res, next) => {
    const body = req.body;

    const newComic = await comic.create({
        id: body.id,
        title: body.title,
        coverImage: body.coverImage,
        onsaleDate: body.onsaleDate,
        writer: body.writer,
        inker: body.inker,
        penciler: body.penciler,
        description: body.description,
        seriesId: body.seriesId,
        linkingUrl: body.linkingUrl,
    });

    return res.status(201).json({
        status: 'success',
        data: newComic,
    });
});

const updateComic = catchAsync(async (req, res, next) => {
    const comicId = req.params.comicId;
    const body = req.body;

    const result = await comic.findOne({
        where: {id: comicId}
    });

    if(!result) {
        throw new AppError('Invalid comic id', 400);
    }

    result.id = body.id;
    result.title = body.title;
    result.coverImage = body.coverImage;
    result.onsaleDate = body.onsaleDate;
    result.writer = body.writer;
    result.inker = body.inker;
    result.penciler = body.penciler;
    result.description = body.description;
    result.seriesId = body.seriesId;
    result.linkingUrl = body.linkingUrl;
    
    const updatedResult = await result.save();

    return res.json({
        status: 'success',
        data: updatedResult
    });
});

const getComicById = catchAsync(async (req, res, next) => {
    const comicId = req.params.comicId;
    const result = await comic.findByPk(comicId);
    if(!result) {
        throw new AppError('Invalid comic id', 400);
    }
    return res.json({
        status: 'success',
        data: result,
    });
});

module.exports = {createComic, updateComic, getComicById}
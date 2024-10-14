const user = require('../db/models/user');
const userDetails = require('../db/models/userDetails');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const createUserDetails = catchAsync(async (req, res, next) => {
    const body = req.body;
    const userId = req.user.id;

    const newUserDetails = await userDetails.create({
        profileImage: body.profileImage,
        backgroundImage: body.backgroundImage,
        profileImagePublicId: body.profileImagePublicId,
        backgroundImagePublicId: body.backgroundImagePublicId,
        about: body.about,
        interests: body.interests,
        userId: userId,
    });

    return res.status(201).json({
        status: 'success',
        data: newUserDetails,
    });
});

const getUserDetailsByUserId = catchAsync(async (req, res, next) => {
    const userId = req.params.userId;
    const result = await userDetails.findOne({
        include: user,
        where: {userId: userId}
    });
    if(!result) {
        throw new AppError('UserDetails for given userId does not exist');
    }
    return res.json({
        status: 'success',
        data: result,
    });
});

module.exports = {createUserDetails,getUserDetailsByUserId}
const userDetails = require('../db/models/userDetails');
const catchAsync = require('../utils/catchAsync');

const createUserDetails = catchAsync(async (req, res, next) => {
    const body = req.body;

    const newUserDetails = await userDetails.create({
        profileImage: body.profileImage,
        backgroundImage: body.backgroundImage,
        profileImagePublicId: body.profileImagePublicId,
        backgroundImagePublicId: body.backgroundImagePublicId,
        about: body.about,
        interests: body.interests,
        userId: 1,
    });

    return res.status(201).json({
        status: 'success',
        data: newUserDetails,
    });
});

module.exports = {createUserDetails}
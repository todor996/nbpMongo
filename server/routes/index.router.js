const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlGift=require('../controllers/gift.contoller');
const ctrlComment=require('../controllers/comment.controller');
const ctrlRating=require('../controllers/rating.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/gift',ctrlGift.addGift);
router.get('/gifts',ctrlGift.getAllGifts);
router.get('/gift/:id',ctrlGift.getGiftById);
router.delete('/gift/:id',ctrlGift.removeGift);
router.get('/comments/:id',ctrlComment.getAllCommentsForGift);
router.post('/comment',ctrlComment.addComment);
router.get('/rating/:id',ctrlRating.getRatingForGift);
router.post('/rating',ctrlRating.addRating);
module.exports = router;




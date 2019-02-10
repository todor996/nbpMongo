const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlGift=require('../controllers/gift.contoller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/gift',ctrlGift.addGift);
router.get('/gifts',ctrlGift.getAllGifts);
router.get('/gift/:id',ctrlGift.getGiftById);
router.delete('/gift/:id',ctrlGift.removeGift);
module.exports = router;




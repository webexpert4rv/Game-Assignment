/** src/routes/api.ts */
import express from 'express';
import controller from '../controllers/api';
const router = express.Router();

router.get('/', controller.sayHelloFunction);

router.post('/check/winner', controller.checkWinner);

export = router;
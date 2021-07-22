/** src/server.ts */
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/api';


const router: Express = express();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(bodyParser.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(bodyParser.json());

router.use(cors());


/** Routes */
router.use('/', routes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
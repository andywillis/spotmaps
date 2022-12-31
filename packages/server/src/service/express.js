import path from 'path';
import express from 'express';
import http from 'http';
import helmet from 'helmet';
import expressStaticGzip from 'express-static-gzip';
import compression from 'compression';

import rootname from '../../rootname';

// file deepcode ignore UseCsurfForExpress: <please specify a reason of ignoring this>
const app = express();

const buildPath = path.join(rootname, '../client/build');

app.use('/', expressStaticGzip(buildPath));
app.use(express.static(buildPath));
app.use(helmet());
app.use(express.json());
app.use(compression());

const port = process.env.PORT || 4000;

// file deepcode ignore HttpToHttps: <please specify a reason of ignoring this>
const server = http.createServer(app);

export { app, port, server };

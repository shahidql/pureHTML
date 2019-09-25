import * as express from 'express';
import Server from './server';

const port = process.env.PORT || 8080;

new Server(express, port).run();
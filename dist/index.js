"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server_1 = require("./server");
const port = process.env.PORT || 8080;
new server_1.default(express, port).run();
//# sourceMappingURL=index.js.map
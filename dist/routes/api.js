"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
router.get('/fetch-data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const apiUrl = 'https://gemini.incois.gov.in/OceanDataAPI/api/wqns/Kochi/currentspeed';
    try {
        const response = yield axios_1.default.get(apiUrl, {
            headers: {
                'Authorization': `${process.env.API_KEY}`
            }
        });
        res.json(response.data);
    }
    catch (error) {
        console.error('Error fetching data:', (_a = error.response) === null || _a === void 0 ? void 0 : _a.status, (_b = error.response) === null || _b === void 0 ? void 0 : _b.data);
        res.status(500).send(`Error fetching data: ${error.message}`);
    }
}));
exports.default = router;

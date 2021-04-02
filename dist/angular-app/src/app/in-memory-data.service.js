"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDataService = void 0;
/**
 * Hero-oriented InMemoryDbService with method overrides.
 */
const core_1 = require("@angular/core");
let InMemoryDataService = class InMemoryDataService {
    constructor() {
        /** True if in-mem service is intercepting; all requests pass thru when false. */
        this.active = true;
        /** In-memory database data */
        this.db = {};
    }
    /** Create the in-memory database on start or by command */
    createDb(reqInfo) {
        this.db = getDbData();
        if (reqInfo) {
            const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
            if (body.clear === true) {
                // tslint:disable-next-line:forin
                for (const coll in this.db) {
                    this.db[coll].length = 0;
                }
            }
            this.active = !!body.active;
        }
        return this.db;
    }
    /**
     * Override `parseRequestUrl`
     * Manipulates the request URL or the parsed result.
     * If in-mem is inactive, clear collectionName so that service passes request thru.
     * If in-mem is active, after parsing with the default parser,
     * @param url from request URL
     * @param utils for manipulating parsed URL
     */
    parseRequestUrl(url, utils) {
        const parsed = utils.parseRequestUrl(url);
        parsed.collectionName = this.active
            ? mapCollectionName(parsed.collectionName)
            : undefined;
        return parsed;
    }
};
InMemoryDataService = __decorate([
    core_1.Injectable()
], InMemoryDataService);
exports.InMemoryDataService = InMemoryDataService;
/**
 * Remap a known singular collection name ("hero")
 * to the plural collection name ("heroes"); else return the name
 * @param name - collection name from the parsed URL
 */
function mapCollectionName(name) {
    return ({
        hero: 'heroes',
        villain: 'villains',
    }[name] || name);
}
/**
 * Development data
 */
function getDbData() {
    const products = [
        {
            id: 10,
            name: 'Strawberries',
            description: '16oz package of fresh organic strawberries',
            quantity: '1',
        },
        {
            id: 20,
            name: 'Sliced bread',
            description: 'Loaf of fresh sliced wheat bread',
            quantity: 1,
        },
        {
            id: 30,
            name: 'Apples',
            description: 'Bag of 7 fresh McIntosh apples',
            quantity: 1,
        },
    ];
    return { products };
}
//# sourceMappingURL=in-memory-data.service.js.map
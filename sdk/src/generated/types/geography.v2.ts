/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/countries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get All Countries
         * @description Get a list of all countries available. A country or territory, identifiable by an ISO 3166 country code.
         */
        get: operations["getCountries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/countries/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        /**
         * Get a Country
         * @description Returns a single *Country*.  Gets a country. A country or territory, identifiable by an ISO 3166 country code.
         */
        get: operations["getCountry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/countries/{country_id}/states": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                country_id: string;
            };
            cookie?: never;
        };
        /**
         * Get All Countryʼs States
         * @description Returns a list of *States* belonging to a *Country*.
         *     A state or province, identifiable by an ISO 3166 subdivision code.
         */
        get: operations["getCountryStates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/countries/{country_id}/states/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                country_id: string;
                id: string;
            };
            cookie?: never;
        };
        /**
         * Get a Countryʼs State
         * @description Returns a *State*.
         *     A state or province, identifiable by an ISO 3166 subdivision code.
         */
        get: operations["getCountryState"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/countries/count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a Count of All Countries
         * @description Returns a count of all countries.
         */
        get: operations["getCountriesCount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/countries/states/count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a Count of All States
         * @description Returns a count of all states.
         */
        get: operations["getStatesCount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/countries/states": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get All States
         * @description Returns a list of all states.
         */
        get: operations["getStates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/countries/{country_id}/states/count": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                country_id: string;
            };
            cookie?: never;
        };
        /**
         * Get a Count of Country’s States
         * @description Returns a count of a countryʼs states.
         */
        get: operations["getCountryStatesCount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * country_Full
         * @example {
         *       "id": 13,
         *       "country": "Australia",
         *       "country_iso2": "AU",
         *       "country_iso3": "AUS",
         *       "states": {
         *         "url": "https://api.bigcommerce.com/stores/{store_hash}/v2/countries/13/states",
         *         "resource": "/countries/13/states"
         *       }
         *     }
         */
        country_Full: {
            /**
             * @description Id of the country.
             * @example 13
             */
            id?: number;
        } & components["schemas"]["country_Base"] & {
            states?: components["schemas"]["countriesStates_Full"];
        };
        /**
         * countriesStates_Full
         * @description Refers to the `states` object return in `GET` countries requests.
         */
        countriesStates_Full: {
            /** @example https://api.bigcommerce.com/stores/{store_hash}/v2/countries/13/states */
            url?: string;
            /** @example /countries/13/states */
            resource?: string;
        };
        /**
         * countriesState_Full
         * @description Refers to the state returned in `GET` states requests.
         * @example {
         *       "id": 208,
         *       "state": "Australian Capital Territory",
         *       "state_abbreviation": "ACT",
         *       "country_id": 13
         *     }
         */
        countriesState_Full: {
            /**
             * @description Numeric ID of the state/province.
             * @example 208
             */
            id?: number;
            /**
             * @description Name of the state/province.
             * @example Australian Capital Territory
             */
            state?: string;
            /**
             * @description Abbreviation for the state/province.
             * @example ACT
             */
            state_abbreviation?: string;
            /**
             * @description Numeric ID of the state’s/province’s associated country.
             * @example 13
             */
            country_id?: number;
        };
        /** country_Base */
        country_Base: {
            /**
             * @description Country name.
             * @example Australia
             */
            country?: string;
            /**
             * @description 2-letter country code.
             * @example AU
             */
            country_iso2?: string;
            /**
             * @description 3-letter country code.
             * @example AUS
             */
            country_iso3?: string;
        };
        count_Full: {
            count?: number;
        };
    };
    responses: {
        countriesResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["country_Full"];
            };
        };
        countriesStatesResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["countriesState_Full"];
            };
        };
        countryCollection_Resp: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["country_Full"][];
            };
        };
        countriesStatesCollectionResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["countriesState_Full"][];
            };
        };
        countResponse: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["count_Full"];
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getCountries: {
        parameters: {
            query?: {
                /** @description Number of pages. */
                page?: number;
                /** @description Count per page. */
                limit?: number;
                country?: string;
                country_iso2?: string;
                country_iso3?: string;
            };
            header: {
                Accept: string;
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["countryCollection_Resp"];
        };
    };
    getCountry: {
        parameters: {
            query?: never;
            header: {
                Accept: string;
                "Content-Type": string;
            };
            path: {
                /** @description The ID of the country. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["countriesResponse"];
        };
    };
    getCountryStates: {
        parameters: {
            query?: {
                /** @description Name of the state/province. */
                state?: string;
                /** @description Abbreviation for the state/province. */
                state_abbreviation?: string;
                /** @description Number of pages. */
                page?: number;
                /** @description Count per page. */
                limit?: number;
            };
            header: {
                Accept: string;
                "Content-Type": string;
            };
            path: {
                /** @description Id of the country */
                country_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["countriesStatesCollectionResponse"];
        };
    };
    getCountryState: {
        parameters: {
            query?: never;
            header: {
                Accept: string;
                "Content-Type": string;
            };
            path: {
                /** @description Id of the country */
                country_id: number;
                /** @description Id of the states */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["countriesStatesResponse"];
        };
    };
    getCountriesCount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["countResponse"];
        };
    };
    getStatesCount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["countResponse"];
        };
    };
    getStates: {
        parameters: {
            query?: {
                /** @description The number of results to return per request. */
                limit?: number;
                /** @description The ordered grouping of results to return. */
                page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["countriesStatesCollectionResponse"];
        };
    };
    getCountryStatesCount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                country_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["countResponse"];
        };
    };
}
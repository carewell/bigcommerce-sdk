/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/payments/methods": {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        /**
         * Get All Payment Methods
         * @deprecated
         * @description Gets the list of enabled payment methods. Default sorting is by payment method, alphabetically from A to Z.
         *
         *     > #### Note
         *     > Avoid using this API operation if possible. It is not supported; therefore, all enabled providers may not appear.
         *
         */
        get: operations["getAllPaymentMethods"];
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
         * payment_Base
         * @example {
         *       "code": "squarev2",
         *       "name": "Square",
         *       "test_mode": false
         *     }
         */
        payment_Base: {
            /**
             * @description Unique platform-wide code identifying the payment method.
             * @example squarev2
             */
            code?: string;
            /**
             * @description Descriptive name of the payment method.
             * @example Square
             */
            name?: string;
            /**
             * @description Determines whether the payment gateway is in test mode. Always false for offline payment methods.
             * @example false
             */
            test_mode?: boolean;
        };
    };
    responses: never;
    parameters: {
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
        Accept: string;
        /** @description Request a specific page of results. The value of the limit query parameter determines the number of responses per page. */
        PageQuery: number;
        /** @description Set the number of responses per page. */
        LimitQuery: number;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getAllPaymentMethods: {
        parameters: {
            query?: {
                /** @description Request a specific page of results. The value of the limit query parameter determines the number of responses per page. */
                page?: components["parameters"]["PageQuery"];
                /** @description Set the number of responses per page. */
                limit?: components["parameters"]["LimitQuery"];
            };
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["payment_Base"][];
                };
            };
        };
    };
}

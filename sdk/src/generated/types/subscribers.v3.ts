/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/customers/subscribers": {
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
         * Get Subscribers
         * @description Returns a list of *Subscribers*. Optional filter parameters can be passed in.
         */
        get: operations["getSubscribers"];
        put?: never;
        /**
         * Create a Subscriber
         * @description Creates a *Subscriber*.
         *
         *     **Required Fields**
         *     * email
         *
         *     **Read Only Fields**
         *     * id
         */
        post: operations["createSubscriber"];
        /**
         * Delete Subscribers
         * @description By default, it deletes all subscribers. Use a filter to avoid deleting all subscribers in a store.
         */
        delete: operations["deleteSubscribers"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/customers/subscribers/{subscriber_id}": {
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
         * Get a Subscriber
         * @description Returns a *Subscriber*.
         */
        get: operations["getSubscriber"];
        /**
         * Update a Subscriber
         * @description Updates a *Subscriber*.
         *
         *     **Read Only Fields**
         *     * id
         */
        put: operations["updateSubscriber"];
        post?: never;
        /**
         * Delete a Subscriber
         * @description Deletes a *Subscriber*.
         */
        delete: operations["deleteSubscriber"];
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
         * subscriber_Full
         * @description Full subscriber object returned in responses.
         */
        subscriber_Full: components["schemas"]["subscriber_Base"] & {
            /** @description The unique numeric ID of the subscriber; increments sequentially. */
            id?: number;
            /**
             * Format: date-time
             * @description The date on which the subscriber was modified.
             *
             */
            date_modified?: string;
            /**
             * Format: date-time
             * @description The date of which the subscriber was created.
             *
             */
            date_created?: string;
            /**
             * @description Shows what active subscriptions a shopper may have. If the consents array is empty, the user has unsubscribed or didn’t enable the newsletter subscription checkbox during checkout.
             * @example [
             *       "marketing_newsletter"
             *     ]
             */
            consents?: string[];
        };
        /**
         * subscriber_Base
         * @description Common Subscriber properties.
         */
        subscriber_Base: {
            /** @description The email of the subscriber. Must be unique.
             *      */
            email?: string;
            /** @description The first name of the subscriber.
             *      */
            first_name?: string;
            /** @description The last name of the subscriber.
             *      */
            last_name?: string;
            /** @description The source of the subscriber. Values are: `storefront`, `order`, or `custom`.
             *      */
            source?: string;
            /** @description The ID of the source order, if source was an order.
             *      */
            order_id?: number | null;
            /** @description The channel ID where the subscriber was created. */
            channel_id?: number;
        };
        Subscriber: {
            /** @description The unique numeric ID of the subscriber; increments sequentially.
             *      */
            id?: number;
            /** @description The email of the subscriber. Must be unique.
             *      */
            email?: string;
            /** @description The first name of the subscriber.
             *      */
            first_name?: string;
            /** @description The last name of the subscriber.
             *      */
            last_name?: string;
            /** @description The source of the subscriber. Values are: `storefront`, `order`, or `custom`.
             *      */
            source?: string;
            /** @description The ID of the source order, if source was an order.
             *      */
            order_id?: number | null;
        } & {
            /**
             * Format: date-time
             * @description The date on which the subscriber was modified.
             *
             */
            date_modified?: string;
            /**
             * Format: date-time
             * @description The date of which the subscriber was created.
             *
             */
            date_created?: string;
        };
        /**
         * subscriber_Post
         * @description The model for a POST to create a subscriber.
         *
         */
        subscriber_Post: components["schemas"]["subscriber_Base"];
        /**
         * subscriber_Put
         * @description The model for a PUT to update a subscriber.
         *
         */
        subscriber_Put: components["schemas"]["subscriber_Base"];
        /**
         * Collection Meta
         * @description Data about the response, including pagination and collection totals.
         */
        CollectionMeta: {
            /**
             * Pagination
             * @description Data about the response, including pagination and collection totals.
             */
            pagination?: {
                /**
                 * @description Total number of items in the result set.
                 *
                 * @example 36
                 */
                total?: number;
                /**
                 * @description Total number of items in the collection response.
                 *
                 * @example 36
                 */
                count?: number;
                /**
                 * @description The amount of items returned in the collection per page, controlled by the limit parameter.
                 *
                 * @example 50
                 */
                per_page?: number;
                /**
                 * @description The page you are currently on within the collection.
                 *
                 * @example 1
                 */
                current_page?: number;
                /**
                 * @description The total number of pages in the collection.
                 *
                 * @example 1
                 */
                total_pages?: number;
                /** @description Pagination links for the previous and next parts of the whole collection.
                 *      */
                links?: {
                    /** @description Link to the previous page returned in the response.
                     *      */
                    previous?: string;
                    /**
                     * @description Link to the current page returned in the response.
                     *
                     * @example ?page=1&limit=50
                     */
                    current?: string;
                    /** @description Link to the next page returned in the response.
                     *      */
                    next?: string;
                };
            };
        };
        /**
         * Pagination
         * @description Data about the response, including pagination and collection totals.
         */
        Pagination: {
            /**
             * @description Total number of items in the result set.
             *
             * @example 36
             */
            total?: number;
            /**
             * @description Total number of items in the collection response.
             *
             * @example 36
             */
            count?: number;
            /**
             * @description The amount of items returned in the collection per page, controlled by the limit parameter.
             *
             * @example 50
             */
            per_page?: number;
            /**
             * @description The page you are currently on within the collection.
             *
             * @example 1
             */
            current_page?: number;
            /**
             * @description The total number of pages in the collection.
             *
             * @example 1
             */
            total_pages?: number;
            /** @description Pagination links for the previous and next parts of the whole collection.
             *      */
            links?: {
                /** @description Link to the previous page returned in the response.
                 *      */
                previous?: string;
                /**
                 * @description Link to the current page returned in the response.
                 *
                 * @example ?page=1&limit=50
                 */
                current?: string;
                /** @description Link to the next page returned in the response.
                 *      */
                next?: string;
            };
        };
        /**
         * Response meta
         * @description Response metadata.
         */
        OpenMeta: {
            [key: string]: unknown;
        };
        /** Error Response */
        ErrorResponse: {
            /** @description The HTTP status code.
             *      */
            status?: number;
            /** @description The error title describing the particular error.
             *      */
            title?: string;
            type?: string;
            instance?: string;
        } & {
            /** Detailed Errors */
            errors?: {
                [key: string]: unknown;
            };
        };
        /**
         * Base Error
         * @description Error payload for the BigCommerce API.
         *
         */
        BaseError: {
            /** @description The HTTP status code.
             *      */
            status?: number;
            /** @description The error title describing the particular error.
             *      */
            title?: string;
            type?: string;
            instance?: string;
        };
        /**
         * Not Found
         * @description Error payload for the BigCommerce API.
         */
        NotFound: {
            /** @description 404 HTTP status code.
             *      */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
        };
        /** Detailed Errors */
        DetailedErrors: {
            [key: string]: unknown;
        };
    };
    responses: {
        subscriberCollection_Resp: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    data?: components["schemas"]["subscriber_Full"][];
                    meta?: components["schemas"]["CollectionMeta"];
                };
            };
        };
        subscriber_Resp: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    data?: components["schemas"]["subscriber_Full"];
                    meta?: components["schemas"]["OpenMeta"];
                };
            };
        };
    };
    parameters: {
        /** @description Filter items by email.
         *      */
        FilterEmailParam: string;
        /** @description Filter items by first_name.
         *      */
        FilterFirstNameParam: string;
        /** @description Filter items by last_name.
         *      */
        FilterLastNameParam: string;
        /** @description Filter items by source.
         *      */
        FilterSourceParam: string;
        /** @description Filter items by order_id.
         *      */
        FilterOrderIdParam: number;
        /** @description Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15` */
        FilterDateModifiedParam: string;
        /** @description Filter items by date_created.
         *      */
        FilterDateCreatedParam: string;
        /** @description Specifies the page number in a limited (paginated) list of products. */
        PageParam: number;
        /** @description Controls the number of items per page in a limited (paginated) list of products. */
        LimitParam: number;
        /** @description Scripts field name to sort by.
         *      */
        ScriptsSortKeyParam: "name" | "description" | "date_created" | "date_modified";
        /** @description Sort direction. Acceptable values are: `asc`, `desc`.
         *      */
        DirectionParam: "asc" | "desc";
        /** @description Filter items by ID.
         *      */
        IdParam: number;
        /** @description The ID of the subscriber requested.
         *      */
        SubscriberIdParam: number;
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
        Accept: string;
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
        ContentType: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getSubscribers: {
        parameters: {
            query: {
                /** @description Filter items by email.
                 *      */
                email?: components["parameters"]["FilterEmailParam"];
                /** @description Filter items by first_name.
                 *      */
                first_name?: components["parameters"]["FilterFirstNameParam"];
                /** @description Filter items by last_name.
                 *      */
                last_name?: components["parameters"]["FilterLastNameParam"];
                /** @description Filter items by source.
                 *      */
                source?: components["parameters"]["FilterSourceParam"];
                /** @description Filter items by order_id.
                 *      */
                order_id?: components["parameters"]["FilterOrderIdParam"];
                /** @description Filter items by date_created.
                 *      */
                date_created?: components["parameters"]["FilterDateCreatedParam"];
                /** @description Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15` */
                date_modified?: components["parameters"]["FilterDateModifiedParam"];
                /** @description Specifies the page number in a limited (paginated) list of products. */
                page?: components["parameters"]["PageParam"];
                /** @description Controls the number of items per page in a limited (paginated) list of products. */
                limit?: components["parameters"]["LimitParam"];
                /** @description Filter items by ID.
                 *      */
                id: components["parameters"]["IdParam"];
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
                    "application/json": {
                        data?: components["schemas"]["subscriber_Full"][];
                        meta?: components["schemas"]["CollectionMeta"];
                    };
                };
            };
        };
    };
    createSubscriber: {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
                "Content-Type": components["parameters"]["ContentType"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["subscriber_Post"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["subscriber_Full"];
                        meta?: components["schemas"]["OpenMeta"];
                    };
                };
            };
            /** @description The `Subscriber` was in conflict with another subscriber. This is the result of duplicate unique values, such as email.
             *      */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Detailed Errors */
                        errors?: {
                            [key: string]: unknown;
                        };
                        instance?: string;
                        /** @description The HTTP status code.
                         *      */
                        status?: number;
                        /** @description The error title describing the particular error.
                         *      */
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** @description The `Subscriber` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.
             *      */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Detailed Errors */
                        errors?: {
                            [key: string]: unknown;
                        };
                        instance?: string;
                        /** @description The HTTP status code.
                         *      */
                        status?: number;
                        /** @description The error title describing the particular error.
                         *      */
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
    };
    deleteSubscribers: {
        parameters: {
            query?: {
                /** @description Filter items by email.
                 *      */
                email?: components["parameters"]["FilterEmailParam"];
                /** @description Filter items by first_name.
                 *      */
                first_name?: components["parameters"]["FilterFirstNameParam"];
                /** @description Filter items by last_name.
                 *      */
                last_name?: components["parameters"]["FilterLastNameParam"];
                /** @description Filter items by source.
                 *      */
                source?: components["parameters"]["FilterSourceParam"];
                /** @description Filter items by order_id.
                 *      */
                order_id?: components["parameters"]["FilterOrderIdParam"];
                /** @description Filter items by date_created.
                 *      */
                date_created?: components["parameters"]["FilterDateCreatedParam"];
                /** @description Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15` */
                date_modified?: components["parameters"]["FilterDateModifiedParam"];
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
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getSubscriber: {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description The ID of the `Subscriber` requested.
                 *      */
                subscriber_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["subscriber_Full"];
                        meta?: components["schemas"]["OpenMeta"];
                    };
                };
            };
            /** @description The resource was not found.
             *      */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description 404 HTTP status code.
                         *      */
                        status?: number;
                        /** @description The error title describing the particular error. */
                        title?: string;
                        type?: string;
                        instance?: string;
                    };
                };
            };
        };
    };
    updateSubscriber: {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
                "Content-Type": components["parameters"]["ContentType"];
            };
            path: {
                /** @description The ID of the `Subscriber` requested.
                 *      */
                subscriber_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["subscriber_Put"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["subscriber_Full"];
                        meta?: components["schemas"]["OpenMeta"];
                    };
                };
            };
            /** @description The resource was not found.
             *      */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description 404 HTTP status code.
                         *      */
                        status?: number;
                        /** @description The error title describing the particular error. */
                        title?: string;
                        type?: string;
                        instance?: string;
                    };
                };
            };
            /** @description The `Subscriber` was in conflict with another subscriber. This is the result of duplicate unique values, such as `email`.
             *      */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Detailed Errors */
                        errors?: {
                            [key: string]: unknown;
                        };
                        instance?: string;
                        /** @description The HTTP status code.
                         *      */
                        status?: number;
                        /** @description The error title describing the particular error.
                         *      */
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** @description The `Subscriber` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.
             *      */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Detailed Errors */
                        errors?: {
                            additionalProperties?: string;
                        };
                        instance?: string;
                        /** @description The HTTP status code.
                         *      */
                        status?: number;
                        /** @description The error title describing the particular error.
                         *      */
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
    };
    deleteSubscriber: {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description The ID of the `Subscriber` requested.
                 *      */
                subscriber_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
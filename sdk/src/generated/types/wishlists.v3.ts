/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/wishlists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get All Wishlists
         * @description Returns a list of wishlists. Optional filter parameters can be passed in.
         */
        get: operations["getWishlists"];
        put?: never;
        /**
         * Create a Wishlist
         * @description Creates a wishlist and wishlist item. More than one item can be added in the POST.
         *
         *     **Required Fields**
         *     * name
         *     * customer_id
         */
        post: operations["createWishlist"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/wishlists/{wishlist_id}/items/{item_id}": {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the Wishlist. */
                wishlist_id: components["parameters"]["WishlistIdPath"];
                item_id: components["parameters"]["ItemIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Wishlist Item
         * @description Deletes a wishlist item.
         */
        delete: operations["deleteWishlistItem"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/wishlists/{wishlist_id}": {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the Wishlist. */
                wishlist_id: components["parameters"]["WishlistIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get a Wishlist
         * @description Returns a single wishlist.
         */
        get: operations["getWishlist"];
        /**
         * Update a Wishlist
         * @description Updates a wishlist.
         *
         *     Use this endpoint to update existing wishlist items, change the wishlistʼs name and whether the wishlist is available publicly. To add or delete a wishlist item, see [Wishlist Items](/docs/rest-management/wishlists/wishlists-items).
         */
        put: operations["updateWishlist"];
        post?: never;
        /**
         * Delete a Wishlist
         * @description Deletes a wishlist.
         */
        delete: operations["deleteWishlist"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/wishlists/{wishlist_id}/items": {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the Wishlist. */
                wishlist_id: components["parameters"]["WishlistIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Wishlist Item
         * @description Adds a wishlist item. More than one item can be added at a time.
         */
        post: operations["addWishlistItem"];
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
        /** wishlist_Post */
        wishlist_Post: {
            /**
             * Format: int32
             * @description The customer id.
             * @example 12
             */
            customer_id: number;
            /**
             * @description Whether the wishlist is available to the public.
             * @example false
             */
            is_public?: boolean;
            /**
             * @description The title of the wishlist.
             * @example School Shopping
             */
            name?: string;
            /** @description Array of wishlist items. */
            items?: {
                /**
                 * Format: int32
                 * @description The ID of the product.
                 * @example 12
                 */
                product_id?: number;
                /**
                 * Format: int32
                 * @description The variant ID of the product.
                 * @example 152
                 */
                variant_id?: number;
            }[];
        };
        /** wishlist_Put */
        wishlist_Put: {
            /**
             * Format: int32
             * @description The customer ID. A read-only value.
             */
            customer_id: number;
            /** @description Whether the wishlist is available to the public. */
            is_public?: boolean;
            /** @description The title of the wishlist. */
            name?: string;
            /** @description Array of wishlist items. */
            items: {
                /**
                 * Format: int32
                 * @description The ID of the item.
                 * @example 12
                 */
                id?: number;
                /**
                 * Format: int32
                 * @description The ID of the product.
                 * @example 55
                 */
                product_id?: number;
                /**
                 * Format: int32
                 * @description The variant ID of the product.
                 * @example 22
                 */
                variant_id?: number;
            }[];
        };
        /** wishlist_Full */
        wishlist_Full: {
            /**
             * Format: int32
             * @description Wishlist ID, provided after creating a wishlist with a POST.
             * @example 30
             */
            id?: number;
            /**
             * Format: int32
             * @description The ID the customer to which the wishlist belongs.
             * @example 12
             */
            customer_id?: number;
            /**
             * @description The name of the wishlist.
             * @example Christmas List
             */
            name?: string;
            /**
             * @description Whether the wishlist is available to the public.
             * @example true
             */
            is_public?: boolean;
            /**
             * Format: uuid
             * @description The token of the wishlist. This is created internally within BigCommerce. The wishlist ID is to be used for external apps. Read-Only.
             * @example 02d55481-13eb-4d1e-9d79-9062b518570d
             */
            token?: string;
            /** @description Array of wishlist items. */
            items?: components["schemas"]["wishlistItem_Full"][];
        };
        /** wishlistItem_Full */
        wishlistItem_Full: {
            /**
             * Format: int32
             * @description The ID of the item.
             * @example 12
             */
            id?: number;
            /**
             * Format: int32
             * @description The ID of the product.
             * @example 55
             */
            product_id?: number;
            /**
             * Format: int32
             * @description The variant ID of the product.
             * @example 22
             */
            variant_id?: number;
        };
        /** wishlistItem_Post */
        wishlistItem_Post: {
            items?: {
                /** @example 12 */
                product_id?: number;
                /** @example 152 */
                variant_id?: number;
            }[];
        };
        /**
         * pagination
         * @description Data about the response, including pagination and collection totals.
         */
        pagination: {
            /**
             * Format: int32
             * @description Total number of items in the result set.
             */
            total?: number;
            /**
             * Format: int32
             * @description Total number of items in the collection response.
             */
            count?: number;
            /**
             * Format: int32
             * @description The amount of items returned in the collection per page, controlled by the limit parameter.
             */
            per_page?: number;
            /**
             * Format: int32
             * @description The page you are currently on within the collection.
             */
            current_page?: number;
            /**
             * Format: int32
             * @description The total number of pages in the collection.
             */
            total_pages?: number;
        };
        /** metaCollection */
        metaCollection: {
            pagination?: components["schemas"]["pagination"];
        };
    };
    responses: never;
    parameters: {
        /** @description ID of the Wishlist. */
        WishlistIdPath: number;
        ItemIdPath: number;
        /** @description All wishlists relating to the customer. */
        CustomerIdQuery: number;
        /** @description The page number of results to return. 1 is the default and starts from record 0. Use in conjunction with the limit query parameter to request a specific set of records. */
        PageQuery: number;
        /** @description The number of items to return per page. Default is 50 and maximum is 250. */
        LimitQuery: number;
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
    getWishlists: {
        parameters: {
            query?: {
                /** @description All wishlists relating to the customer. */
                customer_id?: components["parameters"]["CustomerIdQuery"];
                /** @description The page number of results to return. 1 is the default and starts from record 0. Use in conjunction with the limit query parameter to request a specific set of records. */
                page?: components["parameters"]["PageQuery"];
                /** @description The number of items to return per page. Default is 50 and maximum is 250. */
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
                    "application/json": {
                        data?: components["schemas"]["wishlist_Full"][];
                        meta?: components["schemas"]["metaCollection"];
                    };
                };
            };
            /** @description Authentication information is missing or invalid. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
    };
    createWishlist: {
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
                "application/json": components["schemas"]["wishlist_Post"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["wishlist_Full"];
                        /** @description Response metadata. */
                        meta?: {
                            [key: string]: unknown;
                        };
                    };
                };
            };
            /** @description Authentication information is missing or invalid. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
    };
    deleteWishlistItem: {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the Wishlist. */
                wishlist_id: components["parameters"]["WishlistIdPath"];
                item_id: components["parameters"]["ItemIdPath"];
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
                        data?: components["schemas"]["wishlist_Full"];
                        /** @description Response metadata. */
                        meta?: {
                            [key: string]: unknown;
                        };
                    };
                };
            };
            /** @description Authentication information is missing or invalid. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** @description Wishlist not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
    };
    getWishlist: {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the Wishlist. */
                wishlist_id: components["parameters"]["WishlistIdPath"];
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
                        data?: components["schemas"]["wishlist_Full"];
                        /** @description Response metadata. */
                        meta?: {
                            [key: string]: unknown;
                        };
                    };
                };
            };
            /** @description Authentication information is missing or invalid. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** @description Wishlist not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
    };
    updateWishlist: {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
                "Content-Type": components["parameters"]["ContentType"];
            };
            path: {
                /** @description ID of the Wishlist. */
                wishlist_id: components["parameters"]["WishlistIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["wishlist_Put"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["wishlist_Full"];
                        /** @description Response metadata. */
                        meta?: {
                            [key: string]: unknown;
                        };
                    };
                };
            };
            /** @description Authentication information is missing or invalid. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
    };
    deleteWishlist: {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the Wishlist. */
                wishlist_id: components["parameters"]["WishlistIdPath"];
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
            /** @description Authentication information is missing or invalid. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
        };
    };
    addWishlistItem: {
        parameters: {
            query?: never;
            header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                Accept: components["parameters"]["Accept"];
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
                "Content-Type": components["parameters"]["ContentType"];
            };
            path: {
                /** @description ID of the Wishlist. */
                wishlist_id: components["parameters"]["WishlistIdPath"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["wishlistItem_Post"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["wishlist_Full"];
                        /** @description Response metadata. */
                        meta?: {
                            [key: string]: unknown;
                        };
                    };
                };
            };
            /** @description Authentication information is missing or invalid. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: int32 */
                        status?: number;
                        title?: string;
                        type?: string;
                    };
                };
            };
            /** @description Wishlist not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
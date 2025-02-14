/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/storefront/custom-template-associations": {
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
         * Get Custom Template Associations
         * @description Get a collection of the storeʼs custom template associations across all storefronts.
         */
        get: operations["getCustomTemplateAssociations"];
        /**
         * Upsert Custom Template Associations
         * @description Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template.
         */
        put: operations["upsertCustomTemplateAssociations"];
        post?: never;
        /**
         * Delete Custom Template Associations
         * @description Delete custom template associations. At least one query parameter must be used.
         */
        delete: operations["deleteCustomTemplateAssociations"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Error: {
            status?: number;
            message?: string;
        };
        ErrorResponse400: {
            schema?: components["schemas"]["Error"];
        };
        ErrorResponse404: {
            schema?: components["schemas"]["Error"];
        };
        ErrorResponse409: {
            schema?: components["schemas"]["Error"];
        };
        ErrorResponse422: {
            schema?: components["schemas"]["Error"];
        };
        MetaPaginationObject: {
            pagination?: {
                /** @example 246 */
                total?: number;
                /** @example 5 */
                count?: number;
                /** @example 5 */
                per_page?: number;
                /** @example 1 */
                current_page?: number;
                /** @example 50 */
                total_pages?: number;
                links?: {
                    /** @example ?limit=5&page=2 */
                    next?: string;
                    /** @example ?limit=5&page=1 */
                    current?: string;
                };
            };
        };
        DetailedErrors: {
            [key: string]: string;
        };
        /** @description Error payload for the BigCommerce API.
         *      */
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
        ErrorResponse: components["schemas"]["BaseError"] & {
            errors?: components["schemas"]["DetailedErrors"];
        };
        /** CustomTemplateAssociation */
        CustomTemplateAssociation: {
            id?: number;
            channel_id?: number;
            /** @enum {string} */
            entity_type?: "product" | "category" | "brand" | "page";
            entity_id?: number;
            /** @example custom-product-1.html */
            file_name?: string;
            /** @description An invalid file name does not match with an existing custom layout file in the currently active theme for the channel. When an association is invalid the store will fallback to using the default for that entity type. */
            is_valid?: boolean;
            date_created?: string;
            date_modified?: string;
        };
        /** CustomTemplateAssociation */
        CustomTemplateAssociationUpsert: {
            channel_id: number;
            /** @enum {string} */
            entity_type: "product" | "category" | "brand" | "page";
            entity_id: number;
            file_name: string;
        };
    };
    responses: never;
    parameters: {
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
        Accept: string;
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
        ContentType: string;
        /** @description A comma-separated string that specifies a list of association IDs to delete. */
        IdInQuery: number[];
        /** @description Return results or act upon only template associations in the specified channel. */
        ChannelIdQuery: number;
        /** @description A comma-separated list of entity IDs to return or act upon. Must be used together with the `type` filter. Currently, all supported entities have integer-type IDs.  */
        EntityIdInQuery: number[];
        /** @description Filter associations by type. */
        TypeQuery: "product" | "category" | "brand" | "page";
        /** @description Number of results to return per page. */
        LimitQuery: number;
        /** @description Which page number to return, based on the limit value. Used to paginate large collections. */
        PageQuery: number;
        /** @description Optional toggle to filter for exclusively valid or invalid associations entries. An invalid entry is one where its file name does not match up to an existing custom layout file in the currently active theme for the channel. */
        IsValidQuery: boolean;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getCustomTemplateAssociations: {
        parameters: {
            query?: {
                /** @description Return results or act upon only template associations in the specified channel. */
                channel_id?: components["parameters"]["ChannelIdQuery"];
                /** @description A comma-separated list of entity IDs to return or act upon. Must be used together with the `type` filter. Currently, all supported entities have integer-type IDs.  */
                "entity_id:in"?: components["parameters"]["EntityIdInQuery"];
                /** @description Filter associations by type. */
                type?: components["parameters"]["TypeQuery"];
                /** @description Number of results to return per page. */
                limit?: components["parameters"]["LimitQuery"];
                /** @description Which page number to return, based on the limit value. Used to paginate large collections. */
                page?: components["parameters"]["PageQuery"];
                /** @description Optional toggle to filter for exclusively valid or invalid associations entries. An invalid entry is one where its file name does not match up to an existing custom layout file in the currently active theme for the channel. */
                is_valid?: components["parameters"]["IsValidQuery"];
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: components["schemas"]["CustomTemplateAssociation"][];
                        meta?: components["schemas"]["MetaPaginationObject"];
                    };
                };
            };
        };
    };
    upsertCustomTemplateAssociations: {
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
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CustomTemplateAssociationUpsert"][];
            };
        };
        responses: {
            /** @description Success response for batch upsert of custom template associations */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Error response for batch PUT of Custom template associations. Includes the errors for each reference ID. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    deleteCustomTemplateAssociations: {
        parameters: {
            query?: {
                /** @description A comma-separated string that specifies a list of association IDs to delete. */
                "id:in"?: components["parameters"]["IdInQuery"];
                /** @description Return results or act upon only template associations in the specified channel. */
                channel_id?: components["parameters"]["ChannelIdQuery"];
                /** @description Filter associations by type. */
                type?: components["parameters"]["TypeQuery"];
                /** @description A comma-separated list of entity IDs to return or act upon. Must be used together with the `type` filter. Currently, all supported entities have integer-type IDs.  */
                "entity_id:in"?: components["parameters"]["EntityIdInQuery"];
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
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}

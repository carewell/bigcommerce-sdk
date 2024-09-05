/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/estimate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Estimate taxes
         * @description Submit the quote request to retrieve an estimate from the enabled third-party tax provider. Estimates are not expected to be persisted by the tax provider.
         *
         *     > Server URL
         *     > - For supporting tax providers, the server URL contains the tax providerʼs profile field; for example, `your_profile.example.com`.
         *     > - The Try it feature is not currently supported for this endpoint.
         *
         *     The following actions can trigger tax estimate requests multiple times during a standard checkout on a BigCommerce storefront, depending on the BigCommerce merchant’s settings.
         *
         *     - After selecting a Shipping Method during the “Estimate Shipping & Tax” facility on the Cart page.
         *     - After specifying a Shipping Address during a Checkout.
         *     - After selecting a Shipping Method during a Checkout.
         *     - After specifying a Billing Address during a Checkout.
         *
         *     The following actions are not expected to trigger estimate requests.
         *
         *     - While anonymously browsing a store’s product catalog.
         *     - On the Cart page prior to a Shopper selecting a Shipping Method via “Estimate Shipping & Tax”.
         *     - On the Checkout page prior to specifying a Shipping Address.
         *     - On the Checkout page, when toggling any option related to using the shopper’s Shipping Address as their Billing Address.
         *
         *     The following control panel actions can also trigger tax estimate requests.
         *
         *     - Order refund.
         *     - Edit order.
         *     - Test connection feature in Tax Settings.
         */
        post: operations["estimateTaxes"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/void": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Void tax quote
         * @description Invalidate the persisted tax quote as identified by the given unique ID. Relevant to order cancellations, full refunds, or moving an order from a paid status to an unpaid status.
         *
         *     > Server URL
         *     > - For supporting tax providers, the server URL contains the tax providerʼs profile field; for example, `your_profile.example.com`.
         *     > - The Try it feature is not currently supported for this endpoint.
         */
        post: operations["voidTaxQuote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/commit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Commit Tax Quote
         * @description Submit the quote request to be persisted by the enabled third-party tax provider. A commit operation is intended to be submitted once only, when the Order has been confirmed and paid.
         *
         *     > Server URL
         *     > - For supporting tax providers, the server URL contains the tax providerʼs profile field; for example, `your_profile.example.com`.
         *     > - The Try it feature is not currently supported for this endpoint.
         */
        post: operations["commitTaxQuote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/adjust": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Adjust Tax Quote
         * @description Replace the persisted tax quote (identified by the given unique ID) with the provided quote request (represented by the **AdjustRequest**).
         *
         *     Relevant for returns, partial refunds, and other Order modifications where there have been changes to the tax liabilities.
         *
         *     The returned **Tax Quote** response is expected to be the same to a response returned by an equivalent response to **estimate** or **commit** methods.
         *
         *     > Server URL
         *     > - For supporting tax providers, the server URL contains the tax providerʼs profile field; for example, `your_profile.example.com`.
         *     > - The Try it feature is not currently supported for this endpoint.
         */
        post: operations["adjustTaxQuote"];
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
         * ItemRequest
         * @description An **ItemRequest** represents required information relating to completing tax calculations for a specific line item.
         */
        "request-item": {
            /** @description A unique identifier for this item used to map responses back to the corresponding item on the order. */
            id: string;
            /** @description The UPC or SKU of the item. The UPC is used when both UPC and SKU values are available on the item. Empty string if both UPC and SKU are not available. */
            item_code?: string;
            /** @description The SKU of the item. Empty string if SKU is not available. */
            item_reference?: string;
            /** @description A display name for this item. */
            name?: string;
            /** @description The final sale price (after discounts, bulk pricing, price lists, etc.) prior to having taxes calculated. If the merchant lists prices inclusive of tax, this price will already be tax inclusive, and so the tax provider will instead calculate the amount of tax that was already included in this price. For multiple quantities, this price includes that multiplication. */
            price: {
                /**
                 * Format: double
                 * @description Note: This amount will be **negative** for order-level refunds and may be **zero** for line item refunds.
                 * @example 1.5
                 */
                amount: number;
                /**
                 * @description Note: **Tax Inclusive** and **Tax Exclusive** prices cannot be added together.
                 * @default false
                 */
                tax_inclusive: boolean;
            };
            quantity: number;
            tax_class?: components["schemas"]["TaxClass"];
            /**
             * @description Flag whether or not this item is always tax-exempt. For example, gift certificate purchases and order-level refunds are tax-exempt. Tax-exempt items are included in the request for auditing purposes.
             * @default false
             */
            tax_exempt: boolean;
            /** @description Merchants may opt to include additional properties that a tax provider can choose to support, factoring these values into tax calculation. */
            tax_properties?: components["schemas"]["request-item-tax-property"][];
        };
        /**
         * TaxProperty
         * @description A simple key value pairing allowing merchants to provide an additional input into a tax providerʼs tax calculation.
         */
        "request-item-tax-property": {
            /**
             * @description Used by tax providers to programmatically identify a specific calculation input.
             * @example alcohol-percentage
             */
            code: string;
            /**
             * @description The value that will be factored into the tax providerʼs tax calculation rules, where supported.
             * @example 4.9
             */
            value: string;
        };
        /**
         * DocumentRequest
         * @description Each **DocumentRequest** represents an order or part of an order of items fulfilled from a single origin address to a single destination address. In addition to shipping and billing details, a document request includes the collection of items in the shipment, with tax-relevant information for each item. Multi-address orders, in which items ship to or from multiple addresses, require at least one **DocumentRequest** per combination of sender-recipient addresses. These are similar to "consignments" or "shipments" in other BigCommerce APIs.
         */
        "request-document": {
            /** @description A unique identifier for this consignment. This value can be expected to be unique within an individual quote request but may be duplicated within subsequent quote requests. A digital consignment will see a prefix **DigitalDelivery_** followed by the Order ID. */
            id: string;
            billing_address?: components["schemas"]["Address"];
            destination_address: components["schemas"]["Address"];
            origin_address: components["schemas"]["Address"];
            /** @description Shipping line item present in each document request. */
            shipping: components["schemas"]["request-item"] & {
                type: components["schemas"]["shipping_type"];
            };
            /** @description Handling line item present in each document request. */
            handling: components["schemas"]["request-item"] & {
                type: components["schemas"]["handling_type"];
            };
            /** @description Collection of one or more items contained within this consignment that need to be assessed for tax liabilities. An item may or may not have gift wrapping. */
            items: (components["schemas"]["request-item"] & {
                type: components["schemas"]["item_type"];
                /** @description Optional gift wrapping for items in the consignment. */
                wrapping?: components["schemas"]["request-item"] & ({
                    type: components["schemas"]["wrapping_type"];
                } | null);
            })[];
        };
        /**
         * QuoteRequest
         * @description Each **QuoteRequest** represents an order. In addition to transaction details, it contains a `documents` array of one or more **DocumentRequest** objects, which represent distinct combinations of origin and fulfillment addresses and the tax-relevant contents of those consignments. This is similar to an "order" in other BigCommerce APIs.
         */
        "request-quote": {
            /** @description Unique ID of the taxable document (order, cart, quote, etc) this tax quote request is being generated for. Will remain consistent for the lifetime of the entity being estimated. */
            id: string;
            /** @description ISO 4217 3 character currency code that all prices on this request are in. */
            currency_code: string;
            /** @description If the shopper is a registered customer in the merchant’s store, basic details for that customer. */
            customer: {
                /** @description The ID of the shoppers customer account in BigCommerce. May be provided as a UUID. */
                customer_id: string;
                /**
                 * @description The BigCommerce customer group ID assigned to this customer. The default value will be provided if the customer has no group assigned. May be provided as a UUID.
                 * @default 0
                 */
                customer_group_id: string;
                /** @description If applicable, the tax exemption code of the shopper’s customer account. A taxability code is intended to apply to multiple customers. This code should match the exemption codes provided by the third-party integration. */
                taxability_code?: string;
            };
            /**
             * Format: date-time
             * @description ISO 8601 formatted date the shopper placed this order. Dates will be provided in UTC.
             */
            transaction_date: string;
            /** @description One or more consignments containing items being purchased by the shopper, including shipping and handling fees that are charged for each consignment. Most orders will contain a single consignment (to a single shipping address), however the BigCommerce platform also supports "Multi-address orders" which allow shoppers to place a single order with items shipped to different addresses. */
            documents: components["schemas"]["request-document"][];
        };
        /**
         * AdjustRequest
         * @description An **AdjustRequest** contains the same data as a standard **QuoteRequest** with added detail of the adjustment operation.
         */
        "request-adjust": {
            /** @description Specifies the reason for the adjustment operation, for auditing purposes. May be a custom, user-entered description. */
            adjust_description?: string;
        } & components["schemas"]["request-quote"];
        /** @description Requests may have partial Address data. For example, the BigCommerce Cart page has the "Estimate Shipping & Tax" feature which is only expected to supply Country, Region and Postal Code. */
        Address: {
            /** @description Primary street address. */
            line1?: string;
            /** @description Apartment, unit, suite, building, floor, etc. */
            line2?: string;
            /**
             * @description City, suburb, township, etc.
             * @example Sydney
             */
            city?: string;
            /**
             * @description State, province, territory, etc.
             * @example New South Wales
             */
            region_name?: string;
            /**
             * @description If available, the short code/acronym for the region. For example, "CA" for "California" or "NSW" for "New South Wales".
             * @example NSW
             */
            region_code?: string;
            /**
             * @description The human-readable country name.
             * @example Australia
             */
            country_name?: string;
            /**
             * @description ISO 3166-1 alpha-2 format country code.
             * @example AU
             */
            country_code?: string;
            /**
             * @description Postcode, ZIP, etc. Optional.
             * @example 2007
             */
            postal_code?: string;
            /**
             * @deprecated
             * @description If this is a commercial address, the associated company’s name.
             */
            company_name?: string;
            /** @enum {string} */
            type?: "RESIDENTIAL" | "COMMERCIAL";
        };
        TaxClass: {
            /** @description The provider-specific tax code for this item. Items can be classified with tax codes relevant to each tax provider, configured by the merchant, and assigned to their products within BigCommerce. A tax code is intended to apply to multiple products. This code should match the tax codes provided by the third-party integration. */
            code: string;
            /** @description The ID of the tax class defined in the merchant’s BigCommerce store. May have a UUID value. */
            class_id: string;
            /** @description The human-readable name of this tax class in the merchant’s BigCommerce store. */
            name: string;
        };
        /** Quote */
        "response-quote": {
            /** @description The unique identifier of the tax quote that was requested. This value must either match the ID of the requested quote or be an external ID on the tax provider’s system. This value will be used for future adjust and void operations. */
            id: string;
            /** @description Represents an order quote or part of an order quote of tax-relevant items fulfilled from a single origin address to a single destination address, including arrays of shipping and handling fee objects for each item. Most order quotes contain a single document; however, BigCommerce supports "multi-address orders", which may come from or go to distinct sets of addresses and thus require multiple documents per quote. */
            documents: components["schemas"]["response-document"][];
        };
        /** Document */
        "response-document": {
            /** @description A unique identifier for this consignment. Must match the ID of the corresponding Document Request. */
            id: string;
            /** @description An optional unique identifier for the document stored in the external provider’s system. Currently not used in any end-to-end operation, but may be logged by BigCommerce and thus be helpful when resolving issues. */
            external_id?: string;
            /** @description Collection of items contained within this consignment that have had tax liabilities calculated. An item may or may not have gift wrapping. */
            items: (components["schemas"]["response-item"] & {
                type: components["schemas"]["item_type"];
                /** @description Optional gift wrapping for items in the consignment. */
                wrapping?: components["schemas"]["response-item"] & ({
                    type: components["schemas"]["wrapping_type"];
                } | null);
            })[];
            /** @description Shipping line item present in each document request. */
            shipping: components["schemas"]["response-item"] & {
                type: components["schemas"]["shipping_type"];
            };
            /** @description Handling line item present in each document request. */
            handling: components["schemas"]["response-item"] & {
                type: components["schemas"]["handling_type"];
            };
        };
        /**
         * Item
         * @description The tax liabilities calculated for a specific item.
         *
         *     Note: Tax liabilities should be calculated with **quantity** accounted for.
         */
        "response-item": {
            /** @description A unique identifier for the line item these tax liabilities are calculated for. Must match the corresponding request line item ID. */
            id: string;
            price: components["schemas"]["response-taxprice"];
        };
        /** TaxPrice */
        "response-taxprice": {
            /** @description The price of this line item inclusive of tax. Must be equal to **amount_exclusive** + **total_tax**. */
            amount_inclusive: number;
            /** @description The price of this line item exclusive of tax. Must be equal to **amount_inclusive** - **total_tax**. */
            amount_exclusive: number;
            /** @description The total amount of tax that applied to this line item. Must be equal to **amount_inclusive** - **amount_exclusive**. */
            total_tax: number;
            /**
             * Format: double
             * @description The total tax rate that applied to this item. This is the aggregated rate of the individual rates in **sales_tax_summary**.
             */
            tax_rate: number;
            /** @description Breakdown of the sales taxes that applied to this item. */
            sales_tax_summary: components["schemas"]["SalesTax"][];
        };
        SalesTax: {
            /** @description The human-readable name of this tax. Used for reporting. Depending on store configuration, may also be visible in the itemization of taxes at checkout, on invoices, and in control panel views. May not be empty. */
            name: string;
            /**
             * Format: double
             * @description Decimal tax rate applied by this component tax rate. Tax rates support up to four decimal places. For example "0.1" for 10% and "0.0125" for 1.25%.
             * @example 0.1
             */
            rate: number;
            /**
             * Format: double
             * @description The absolute amount of tax applied to the item this SalesTax component is attached to, for this component rate. For example, if an item was $10 and this was a 5% component tax rate, the amount would be 0.50 (50 cents)
             */
            amount: number;
            tax_class?: components["schemas"]["TaxClass"];
            /**
             * @description Optional unique identifier for this sales tax, describing the relevant tax classification rule on the tax provider platform.
             *
             *     Supplying an identifier allows BigCommerce to group related taxes together from all items in the order.
             *
             *     This identifier is persisted by BigCommerce and may be desirable for auditing purposes between BigCommerce and the tax provider. Currently supports persisting integer values only (the string type indicates we may support UUID values in the future).
             * @example 1701
             */
            id?: string;
        };
        /**
         * @description The type of item for the line item in the document.
         *
         *     Tax estimate requests for order-level refunds have an additional line item with the type `refund`.
         * @enum {string}
         */
        item_type: "item" | "refund" | "fee";
        /**
         * @description The type of item for the line item in the document.
         * @enum {string}
         */
        shipping_type: "shipping";
        /**
         * @description The type of item for the line item in the document.
         * @enum {string}
         */
        handling_type: "handling";
        /**
         * @description The type of item for the line item in the document.
         * @enum {string}
         */
        wrapping_type: "wrapping";
    };
    responses: never;
    parameters: {
        /** @description BigCommerce will send through the store hash as part of all tax provider operations. Each BigCommerce store on the platform has a unique store hash value for the store’s lifetime. This value can assist in account verification or profile matching responsibilities. */
        StoreHashHeader: string;
        /** @description Unique ID identifying the existing, persisted tax quote that will be voided. */
        IdQueryVoid: string;
        /** @description Unique ID identifying the existing, persisted tax quote that will be adjusted. */
        IdQueryAdjusted: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    estimateTaxes: {
        parameters: {
            query?: never;
            header: {
                /** @description BigCommerce will send through the store hash as part of all tax provider operations. Each BigCommerce store on the platform has a unique store hash value for the store’s lifetime. This value can assist in account verification or profile matching responsibilities. */
                "X-Bc-Store-Hash": components["parameters"]["StoreHashHeader"];
            };
            path?: never;
            cookie?: never;
        };
        /** @description Estimates may not always contain complete data as these requests will be fired at different stages of the shopper checkout. For example, the **Estimate Shipping & Tax** function on the **Cart** page is not expected to provide any billing address data, but the tax provider will still be expected to return a valid estimate. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["request-quote"];
            };
        };
        responses: {
            /** @description Noteworthy is that the estimate response does not contain an **external ID** since there is no expectation that an estimate will result in any persisted tax documents by the tax provider. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response-quote"];
                };
            };
            /** @description Fallback Tax will be used for this transaction. General response that points to an issue with the incoming request that means a valid response is unable to be returned. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Response to indicate that the merchant’s authentication credentials are invalid. The merchant will receive an update in their Store Logs. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Fallback Tax will be used for this transaction. General response that points to an error on the tax provider side. These types of errors should be promptly resolved by the tax provider. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    voidTaxQuote: {
        parameters: {
            query: {
                /** @description Unique ID identifying the existing, persisted tax quote that will be voided. */
                id: components["parameters"]["IdQueryVoid"];
            };
            header: {
                /** @description BigCommerce will send through the store hash as part of all tax provider operations. Each BigCommerce store on the platform has a unique store hash value for the store’s lifetime. This value can assist in account verification or profile matching responsibilities. */
                "X-Bc-Store-Hash": components["parameters"]["StoreHashHeader"];
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
                content?: never;
            };
            /** @description General response that points to an issue with the incoming request that means a valid response is unable to be returned. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Response to indicate that the merchant’s authentication credentials are invalid. The merchant will receive an update in their Store Logs. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description General response that points to an error on the tax provider side. These types of errors should be promptly resolved by the tax provider. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    commitTaxQuote: {
        parameters: {
            query?: never;
            header: {
                /** @description BigCommerce will send through the store hash as part of all tax provider operations. Each BigCommerce store on the platform has a unique store hash value for the store’s lifetime. This value can assist in account verification or profile matching responsibilities. */
                "X-Bc-Store-Hash": components["parameters"]["StoreHashHeader"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["request-quote"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response-quote"];
                };
            };
            /** @description General response that points to an issue with the incoming request that means a valid response is unable to be returned. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Response to indicate that the merchant’s authentication credentials are invalid. The merchant will receive an update in their Store Logs. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description General response that points to an error on the tax provider side. These types of errors should be promptly resolved by the tax provider. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    adjustTaxQuote: {
        parameters: {
            query: {
                /** @description Unique ID identifying the existing, persisted tax quote that will be adjusted. */
                id: components["parameters"]["IdQueryAdjusted"];
            };
            header: {
                /** @description BigCommerce will send through the store hash as part of all tax provider operations. Each BigCommerce store on the platform has a unique store hash value for the store’s lifetime. This value can assist in account verification or profile matching responsibilities. */
                "X-Bc-Store-Hash": components["parameters"]["StoreHashHeader"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["request-adjust"];
            };
        };
        responses: {
            /** @description Returned Tax Quote response matches the updated QuoteRequest provided to the service method. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response-quote"];
                };
            };
            /** @description General response that points to an issue with the incoming request that means a valid response is unable to be returned. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Response to indicate that the merchant’s authentication credentials are invalid. The merchant will receive an update in their Store Logs. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description General response that points to an error on the tax provider side. These types of errors should be promptly resolved by the tax provider. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response-quote"];
                };
            };
        };
    };
}

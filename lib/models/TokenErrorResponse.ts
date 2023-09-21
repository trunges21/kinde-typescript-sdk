/* tslint:disable */
/* eslint-disable */
/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface TokenErrorResponse
 */
export interface TokenErrorResponse {
    /**
     * Error.
     * @type {string}
     * @memberof TokenErrorResponse
     */
    error?: string;
    /**
     * The error description.
     * @type {string}
     * @memberof TokenErrorResponse
     */
    errorDescription?: string;
}

/**
 * Check if a given object implements the TokenErrorResponse interface.
 */
export function instanceOfTokenErrorResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TokenErrorResponseFromJSON(json: any): TokenErrorResponse {
    return TokenErrorResponseFromJSONTyped(json, false);
}

export function TokenErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'errorDescription': !exists(json, 'error_description') ? undefined : json['error_description'],
    };
}

export function TokenErrorResponseToJSON(value?: TokenErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'error_description': value.errorDescription,
    };
}


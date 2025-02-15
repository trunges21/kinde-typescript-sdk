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
 * @interface UpdateApplicationRequest
 */
export interface UpdateApplicationRequest {
    /**
     * The application's name.
     * @type {string}
     * @memberof UpdateApplicationRequest
     */
    name?: string;
    /**
     * The application's language key.
     * @type {string}
     * @memberof UpdateApplicationRequest
     */
    languageKey?: string;
    /**
     * The application's logout uris.
     * @type {Array<string>}
     * @memberof UpdateApplicationRequest
     */
    logoutUris?: Array<string>;
    /**
     * The application's redirect uris.
     * @type {Array<string>}
     * @memberof UpdateApplicationRequest
     */
    redirectUris?: Array<string>;
}

/**
 * Check if a given object implements the UpdateApplicationRequest interface.
 */
export function instanceOfUpdateApplicationRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateApplicationRequestFromJSON(json: any): UpdateApplicationRequest {
    return UpdateApplicationRequestFromJSONTyped(json, false);
}

export function UpdateApplicationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApplicationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'languageKey': !exists(json, 'language_key') ? undefined : json['language_key'],
        'logoutUris': !exists(json, 'logout_uris') ? undefined : json['logout_uris'],
        'redirectUris': !exists(json, 'redirect_uris') ? undefined : json['redirect_uris'],
    };
}

export function UpdateApplicationRequestToJSON(value?: UpdateApplicationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'language_key': value.languageKey,
        'logout_uris': value.logoutUris,
        'redirect_uris': value.redirectUris,
    };
}


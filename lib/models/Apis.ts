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
 * @interface Apis
 */
export interface Apis {
    /**
     * Unique id of the API.
     * @type {string}
     * @memberof Apis
     */
    id?: string;
    /**
     * The API's name.
     * @type {string}
     * @memberof Apis
     */
    name?: string;
    /**
     * The logical identifier for the API.
     * @type {string}
     * @memberof Apis
     */
    audience?: string;
    /**
     * Whether it is the management API or not.
     * @type {boolean}
     * @memberof Apis
     */
    isManagementApi?: boolean;
}

/**
 * Check if a given object implements the Apis interface.
 */
export function instanceOfApis(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApisFromJSON(json: any): Apis {
    return ApisFromJSONTyped(json, false);
}

export function ApisFromJSONTyped(json: any, ignoreDiscriminator: boolean): Apis {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'audience': !exists(json, 'audience') ? undefined : json['audience'],
        'isManagementApi': !exists(json, 'is_management_api') ? undefined : json['is_management_api'],
    };
}

export function ApisToJSON(value?: Apis | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'audience': value.audience,
        'is_management_api': value.isManagementApi,
    };
}


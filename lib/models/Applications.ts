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
 * @interface Applications
 */
export interface Applications {
    /**
     * 
     * @type {string}
     * @memberof Applications
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Applications
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Applications
     */
    type?: string;
}

/**
 * Check if a given object implements the Applications interface.
 */
export function instanceOfApplications(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationsFromJSON(json: any): Applications {
    return ApplicationsFromJSONTyped(json, false);
}

export function ApplicationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Applications {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ApplicationsToJSON(value?: Applications | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': value.type,
    };
}


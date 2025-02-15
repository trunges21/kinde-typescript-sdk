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
 * @interface UserIdentitiesInner
 */
export interface UserIdentitiesInner {
    /**
     * 
     * @type {string}
     * @memberof UserIdentitiesInner
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof UserIdentitiesInner
     */
    identity?: string;
}

/**
 * Check if a given object implements the UserIdentitiesInner interface.
 */
export function instanceOfUserIdentitiesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserIdentitiesInnerFromJSON(json: any): UserIdentitiesInner {
    return UserIdentitiesInnerFromJSONTyped(json, false);
}

export function UserIdentitiesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserIdentitiesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'identity': !exists(json, 'identity') ? undefined : json['identity'],
    };
}

export function UserIdentitiesInnerToJSON(value?: UserIdentitiesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'identity': value.identity,
    };
}


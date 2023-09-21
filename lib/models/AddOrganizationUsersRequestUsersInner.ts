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
 * @interface AddOrganizationUsersRequestUsersInner
 */
export interface AddOrganizationUsersRequestUsersInner {
    /**
     * The users id.
     * @type {string}
     * @memberof AddOrganizationUsersRequestUsersInner
     */
    id?: string;
    /**
     * Role keys to assign to the user.
     * @type {Array<string>}
     * @memberof AddOrganizationUsersRequestUsersInner
     */
    roles?: Array<string>;
    /**
     * Permission keys to assign to the user.
     * @type {Array<string>}
     * @memberof AddOrganizationUsersRequestUsersInner
     */
    permissions?: Array<string>;
}

/**
 * Check if a given object implements the AddOrganizationUsersRequestUsersInner interface.
 */
export function instanceOfAddOrganizationUsersRequestUsersInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddOrganizationUsersRequestUsersInnerFromJSON(json: any): AddOrganizationUsersRequestUsersInner {
    return AddOrganizationUsersRequestUsersInnerFromJSONTyped(json, false);
}

export function AddOrganizationUsersRequestUsersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOrganizationUsersRequestUsersInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'permissions': !exists(json, 'permissions') ? undefined : json['permissions'],
    };
}

export function AddOrganizationUsersRequestUsersInnerToJSON(value?: AddOrganizationUsersRequestUsersInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'roles': value.roles,
        'permissions': value.permissions,
    };
}


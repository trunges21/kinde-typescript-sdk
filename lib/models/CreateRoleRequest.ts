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
 * @interface CreateRoleRequest
 */
export interface CreateRoleRequest {
    /**
     * The role's name.
     * @type {string}
     * @memberof CreateRoleRequest
     */
    name?: string;
    /**
     * The role's description.
     * @type {string}
     * @memberof CreateRoleRequest
     */
    description?: string;
    /**
     * The role identifier to use in code.
     * @type {string}
     * @memberof CreateRoleRequest
     */
    key?: string;
    /**
     * Set role as default for new users.
     * @type {boolean}
     * @memberof CreateRoleRequest
     */
    isDefaultRole?: boolean;
}

/**
 * Check if a given object implements the CreateRoleRequest interface.
 */
export function instanceOfCreateRoleRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateRoleRequestFromJSON(json: any): CreateRoleRequest {
    return CreateRoleRequestFromJSONTyped(json, false);
}

export function CreateRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRoleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'isDefaultRole': !exists(json, 'is_default_role') ? undefined : json['is_default_role'],
    };
}

export function CreateRoleRequestToJSON(value?: CreateRoleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'key': value.key,
        'is_default_role': value.isDefaultRole,
    };
}


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
import type { UpdateOrganizationUsersRequestUsersInner } from './UpdateOrganizationUsersRequestUsersInner.js';
import {
    UpdateOrganizationUsersRequestUsersInnerFromJSON,
    UpdateOrganizationUsersRequestUsersInnerFromJSONTyped,
    UpdateOrganizationUsersRequestUsersInnerToJSON,
} from './UpdateOrganizationUsersRequestUsersInner.js';

/**
 * 
 * @export
 * @interface UpdateOrganizationUsersRequest
 */
export interface UpdateOrganizationUsersRequest {
    /**
     * Users to add, update or remove from the organization.
     * @type {Array<UpdateOrganizationUsersRequestUsersInner>}
     * @memberof UpdateOrganizationUsersRequest
     */
    users?: Array<UpdateOrganizationUsersRequestUsersInner>;
}

/**
 * Check if a given object implements the UpdateOrganizationUsersRequest interface.
 */
export function instanceOfUpdateOrganizationUsersRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateOrganizationUsersRequestFromJSON(json: any): UpdateOrganizationUsersRequest {
    return UpdateOrganizationUsersRequestFromJSONTyped(json, false);
}

export function UpdateOrganizationUsersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOrganizationUsersRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(UpdateOrganizationUsersRequestUsersInnerFromJSON)),
    };
}

export function UpdateOrganizationUsersRequestToJSON(value?: UpdateOrganizationUsersRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(UpdateOrganizationUsersRequestUsersInnerToJSON)),
    };
}


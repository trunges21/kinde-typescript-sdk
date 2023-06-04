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

import { exists, mapValues } from '../runtime';
import type { OrganizationUser } from './OrganizationUser';
import {
    OrganizationUserFromJSON,
    OrganizationUserFromJSONTyped,
    OrganizationUserToJSON,
} from './OrganizationUser';

/**
 * 
 * @export
 * @interface GetOrganizationsUsersResponse
 */
export interface GetOrganizationsUsersResponse {
    /**
     * Response code.
     * @type {string}
     * @memberof GetOrganizationsUsersResponse
     */
    code?: string;
    /**
     * Response message.
     * @type {string}
     * @memberof GetOrganizationsUsersResponse
     */
    message?: string;
    /**
     * 
     * @type {Array<OrganizationUser>}
     * @memberof GetOrganizationsUsersResponse
     */
    organizationUsers?: Array<OrganizationUser>;
    /**
     * Pagination token.
     * @type {string}
     * @memberof GetOrganizationsUsersResponse
     */
    nextToken?: string;
}

/**
 * Check if a given object implements the GetOrganizationsUsersResponse interface.
 */
export function instanceOfGetOrganizationsUsersResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetOrganizationsUsersResponseFromJSON(json: any): GetOrganizationsUsersResponse {
    return GetOrganizationsUsersResponseFromJSONTyped(json, false);
}

export function GetOrganizationsUsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrganizationsUsersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'organizationUsers': !exists(json, 'organization_users') ? undefined : ((json['organization_users'] as Array<any>).map(OrganizationUserFromJSON)),
        'nextToken': !exists(json, 'next_token') ? undefined : json['next_token'],
    };
}

export function GetOrganizationsUsersResponseToJSON(value?: GetOrganizationsUsersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'organization_users': value.organizationUsers === undefined ? undefined : ((value.organizationUsers as Array<any>).map(OrganizationUserToJSON)),
        'next_token': value.nextToken,
    };
}


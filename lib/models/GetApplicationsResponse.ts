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
import type { Applications } from './Applications.js';
import {
    ApplicationsFromJSON,
    ApplicationsFromJSONTyped,
    ApplicationsToJSON,
} from './Applications.js';

/**
 * 
 * @export
 * @interface GetApplicationsResponse
 */
export interface GetApplicationsResponse {
    /**
     * Response code.
     * @type {string}
     * @memberof GetApplicationsResponse
     */
    code?: string;
    /**
     * Response message.
     * @type {string}
     * @memberof GetApplicationsResponse
     */
    message?: string;
    /**
     * 
     * @type {Array<Applications>}
     * @memberof GetApplicationsResponse
     */
    applications?: Array<Applications>;
    /**
     * Pagination token.
     * @type {string}
     * @memberof GetApplicationsResponse
     */
    nextToken?: string;
}

/**
 * Check if a given object implements the GetApplicationsResponse interface.
 */
export function instanceOfGetApplicationsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetApplicationsResponseFromJSON(json: any): GetApplicationsResponse {
    return GetApplicationsResponseFromJSONTyped(json, false);
}

export function GetApplicationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetApplicationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'applications': !exists(json, 'applications') ? undefined : ((json['applications'] as Array<any>).map(ApplicationsFromJSON)),
        'nextToken': !exists(json, 'next_token') ? undefined : json['next_token'],
    };
}

export function GetApplicationsResponseToJSON(value?: GetApplicationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'applications': value.applications === undefined ? undefined : ((value.applications as Array<any>).map(ApplicationsToJSON)),
        'next_token': value.nextToken,
    };
}


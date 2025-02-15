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
import type { UpdateAPIApplicationsRequestApplicationsInner } from './UpdateAPIApplicationsRequestApplicationsInner.js';
import {
    UpdateAPIApplicationsRequestApplicationsInnerFromJSON,
    UpdateAPIApplicationsRequestApplicationsInnerFromJSONTyped,
    UpdateAPIApplicationsRequestApplicationsInnerToJSON,
} from './UpdateAPIApplicationsRequestApplicationsInner.js';

/**
 * 
 * @export
 * @interface UpdateAPIApplicationsRequest
 */
export interface UpdateAPIApplicationsRequest {
    /**
     * 
     * @type {Array<UpdateAPIApplicationsRequestApplicationsInner>}
     * @memberof UpdateAPIApplicationsRequest
     */
    applications: Array<UpdateAPIApplicationsRequestApplicationsInner>;
}

/**
 * Check if a given object implements the UpdateAPIApplicationsRequest interface.
 */
export function instanceOfUpdateAPIApplicationsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "applications" in value;

    return isInstance;
}

export function UpdateAPIApplicationsRequestFromJSON(json: any): UpdateAPIApplicationsRequest {
    return UpdateAPIApplicationsRequestFromJSONTyped(json, false);
}

export function UpdateAPIApplicationsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAPIApplicationsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applications': ((json['applications'] as Array<any>).map(UpdateAPIApplicationsRequestApplicationsInnerFromJSON)),
    };
}

export function UpdateAPIApplicationsRequestToJSON(value?: UpdateAPIApplicationsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applications': ((value.applications as Array<any>).map(UpdateAPIApplicationsRequestApplicationsInnerToJSON)),
    };
}


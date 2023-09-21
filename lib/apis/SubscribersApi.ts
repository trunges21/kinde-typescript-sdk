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


import * as runtime from '../runtime.js';
import type {
  CreateSubscriberSuccessResponse,
  ErrorResponse,
  GetSubscriberResponse,
  GetSubscribersResponse,
} from '../models/index.js';
import {
    CreateSubscriberSuccessResponseFromJSON,
    CreateSubscriberSuccessResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GetSubscriberResponseFromJSON,
    GetSubscriberResponseToJSON,
    GetSubscribersResponseFromJSON,
    GetSubscribersResponseToJSON,
} from '../models/index.js';

export interface CreateSubscriberRequest {
    firstName: string;
    lastName: string | null;
    email: string | null;
}

export interface GetSubscriberRequest {
    subscriberId: string;
}

export interface GetSubscribersRequest {
    sort?: GetSubscribersSortEnum;
    pageSize?: number | null;
    nextToken?: string | null;
}

/**
 * 
 */
export class SubscribersApi extends runtime.BaseAPI {

    /**
     * Create subscriber.
     * Create Subscriber
     */
    async createSubscriberRaw(requestParameters: CreateSubscriberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateSubscriberSuccessResponse>> {
        if (requestParameters.firstName === null || requestParameters.firstName === undefined) {
            throw new runtime.RequiredError('firstName','Required parameter requestParameters.firstName was null or undefined when calling createSubscriber.');
        }

        if (requestParameters.lastName === null || requestParameters.lastName === undefined) {
            throw new runtime.RequiredError('lastName','Required parameter requestParameters.lastName was null or undefined when calling createSubscriber.');
        }

        if (requestParameters.email === null || requestParameters.email === undefined) {
            throw new runtime.RequiredError('email','Required parameter requestParameters.email was null or undefined when calling createSubscriber.');
        }

        const queryParameters: any = {};

        if (requestParameters.firstName !== undefined) {
            queryParameters['first_name'] = requestParameters.firstName;
        }

        if (requestParameters.lastName !== undefined) {
            queryParameters['last_name'] = requestParameters.lastName;
        }

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("kindeBearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/subscribers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateSubscriberSuccessResponseFromJSON(jsonValue));
    }

    /**
     * Create subscriber.
     * Create Subscriber
     */
    async createSubscriber(requestParameters: CreateSubscriberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateSubscriberSuccessResponse> {
        const response = await this.createSubscriberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a subscriber record. 
     * Get Subscriber
     */
    async getSubscriberRaw(requestParameters: GetSubscriberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSubscriberResponse>> {
        if (requestParameters.subscriberId === null || requestParameters.subscriberId === undefined) {
            throw new runtime.RequiredError('subscriberId','Required parameter requestParameters.subscriberId was null or undefined when calling getSubscriber.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("kindeBearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/subscribers/{subscriber_id}`.replace(`{${"subscriber_id"}}`, encodeURIComponent(String(requestParameters.subscriberId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSubscriberResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a subscriber record. 
     * Get Subscriber
     */
    async getSubscriber(requestParameters: GetSubscriberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSubscriberResponse> {
        const response = await this.getSubscriberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The returned list can be sorted by full name or email address in ascending or descending order. The number of records to return at a time can also be controlled using the `page_size` query string parameter. 
     * List Subscribers
     */
    async getSubscribersRaw(requestParameters: GetSubscribersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSubscribersResponse>> {
        const queryParameters: any = {};

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.nextToken !== undefined) {
            queryParameters['next_token'] = requestParameters.nextToken;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("kindeBearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/subscribers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSubscribersResponseFromJSON(jsonValue));
    }

    /**
     * The returned list can be sorted by full name or email address in ascending or descending order. The number of records to return at a time can also be controlled using the `page_size` query string parameter. 
     * List Subscribers
     */
    async getSubscribers(requestParameters: GetSubscribersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSubscribersResponse> {
        const response = await this.getSubscribersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetSubscribersSortEnum = {
    NameAsc: 'name_asc',
    NameDesc: 'name_desc',
    EmailAsc: 'email_asc',
    EmailDesc: 'email_desc'
} as const;
export type GetSubscribersSortEnum = typeof GetSubscribersSortEnum[keyof typeof GetSubscribersSortEnum];

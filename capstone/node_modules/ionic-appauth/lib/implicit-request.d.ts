import { Crypto, StringMap } from "@openid/appauth";
export declare enum ImplicitResponseType {
    Token = "token",
    IdToken = "id_token",
    IdTokenToken = "id_token token"
}
/**
 * Represents an ImplicitRequest as JSON.
 */
export interface ImplicitRequestJson {
    response_type: string;
    client_id: string;
    redirect_uri: string;
    scope: string;
    state?: string;
    extras?: StringMap;
    nonce?: string;
}
/**
 * Represents the AuthorizationRequest.
 * For more information look at
 * https://tools.ietf.org/html/rfc6749#section-4.1.1
 */
export declare class ImplicitRequest {
    private crypto;
    static RESPONSE_TYPE_TOKEN: string;
    static RESPONSE_TYPE_CODE: string;
    clientId: string;
    redirectUri: string;
    scope: string;
    responseType: string;
    state: string;
    nonce: string;
    extras?: StringMap;
    /**
     * Constructs a new ImplicitRequest.
     * Use a `undefined` value for the `state` parameter, to generate a random
     * state for CSRF protection.
     */
    constructor(request: ImplicitRequestJson, crypto?: Crypto);
    /**
     * Serializes the ImplicitRequest to a JavaScript Object.
     */
    toJson(): ImplicitRequestJson;
}

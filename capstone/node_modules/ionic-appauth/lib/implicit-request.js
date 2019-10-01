"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appauth_1 = require("@openid/appauth");
var ImplicitResponseType;
(function (ImplicitResponseType) {
    ImplicitResponseType["Token"] = "token";
    ImplicitResponseType["IdToken"] = "id_token";
    ImplicitResponseType["IdTokenToken"] = "id_token token";
})(ImplicitResponseType = exports.ImplicitResponseType || (exports.ImplicitResponseType = {}));
/**
 * Generates a cryptographically random new state. Useful for CSRF protection.
 */
var SIZE = 10; // 10 bytes
var newState = function (crypto) {
    return crypto.generateRandom(SIZE);
};
/**
 * Represents the AuthorizationRequest.
 * For more information look at
 * https://tools.ietf.org/html/rfc6749#section-4.1.1
 */
var ImplicitRequest = /** @class */ (function () {
    /**
     * Constructs a new ImplicitRequest.
     * Use a `undefined` value for the `state` parameter, to generate a random
     * state for CSRF protection.
     */
    function ImplicitRequest(request, crypto) {
        if (crypto === void 0) { crypto = new appauth_1.DefaultCrypto(); }
        this.crypto = crypto;
        this.clientId = request.client_id;
        this.redirectUri = request.redirect_uri;
        this.scope = request.scope;
        this.responseType = request.response_type || ImplicitResponseType.IdTokenToken;
        this.state = request.state || newState(crypto);
        this.nonce = newState(crypto);
        this.extras = request.extras;
    }
    /**
     * Serializes the ImplicitRequest to a JavaScript Object.
     */
    ImplicitRequest.prototype.toJson = function () {
        return {
            response_type: this.responseType,
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            scope: this.scope,
            state: this.state,
            extras: this.extras,
            nonce: this.nonce
        };
    };
    ImplicitRequest.RESPONSE_TYPE_TOKEN = 'token';
    ImplicitRequest.RESPONSE_TYPE_CODE = 'code';
    return ImplicitRequest;
}());
exports.ImplicitRequest = ImplicitRequest;

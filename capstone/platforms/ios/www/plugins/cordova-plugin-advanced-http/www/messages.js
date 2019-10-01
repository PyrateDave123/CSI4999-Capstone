cordova.define("cordova-plugin-advanced-http.messages", function(require, exports, module) {
module.exports = {
  ADDING_COOKIES_NOT_SUPPORTED: 'advanced-http: "setHeader" does not support adding cookies, please use "setCookie" function instead',
  EMPTY_FILE_PATHS: 'advanced-http: "filePaths" option array must not be empty, <filePaths: string[]>',
  EMPTY_NAMES: 'advanced-http: "names" option array must not be empty, <names: string[]>',
  INVALID_CLIENT_AUTH_ALIAS: 'advanced-http: invalid client certificate alias, needs to be a string or undefined, <alias: string | undefined>',
  INVALID_CLIENT_AUTH_MODE: 'advanced-http: invalid client certificate authentication mode, supported modes are:',
  INVALID_CLIENT_AUTH_OPTIONS: 'advanced-http: invalid client certificate authentication options, needs to be an dictionary style object',
  INVALID_CLIENT_AUTH_PKCS_PASSWORD: 'advanced-http: invalid PKCS12 container password, needs to be a string, <pkcsPassword: string>',
  INVALID_CLIENT_AUTH_RAW_PKCS: 'advanced-http: invalid PKCS12 container, needs to be an array buffer, <rawPkcs: ArrayBuffer>',
  INVALID_DATA_SERIALIZER: 'advanced-http: invalid serializer, supported serializers are:',
  INVALID_DOWNLOAD_FILE_PATH: 'advanced-http: invalid "filePath" value, needs to be a string, <filePath: string>',
  INVALID_FOLLOW_REDIRECT_VALUE: 'advanced-http: invalid follow redirect value, needs to be a boolean value, <followRedirect: boolean>',
  INVALID_HEADER_VALUE: 'advanced-http: invalid header value, needs to be a string, <header: string>',
  INVALID_HTTP_METHOD: 'advanced-http: invalid HTTP method, supported methods are:',
  INVALID_RESPONSE_TYPE: 'advanced-http: invalid response type, supported types are:',
  INVALID_SSL_CERT_MODE: 'advanced-http: invalid SSL cert mode, supported modes are:',
  INVALID_TIMEOUT_VALUE: 'advanced-http: invalid timeout value, needs to be a positive numeric value, <timeout: number>',
  MANDATORY_FAIL: 'advanced-http: missing mandatory "onFail" callback function',
  MANDATORY_SUCCESS: 'advanced-http: missing mandatory "onSuccess" callback function',
  POST_PROCESSING_FAILED: 'advanced-http: an error occured during post processing response:',
  TYPE_MISMATCH_DATA: 'advanced-http: "data" option supports only following data types:',
  TYPE_MISMATCH_FILE_PATHS: 'advanced-http: "filePaths" option needs to be an string array, <filePaths: string[]>',
  TYPE_MISMATCH_HEADERS: 'advanced-http: "headers" option needs to be an dictionary style object with string values, <headers: {[key: string]: string}>',
  TYPE_MISMATCH_NAMES: 'advanced-http: "names" option needs to be an string array, <names: string[]>',
  TYPE_MISMATCH_PARAMS: 'advanced-http: "params" option needs to be an dictionary style object, <params: {[key: string]: string | string[]}>',
};

});

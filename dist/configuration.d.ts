/**
 * MailSlurp API
 * ## Introduction  [MailSlurp](https://www.mailslurp.com) is an Email API for developers and QA testers. It let's users: - create emails addresses on demand - receive emails and attachments in code - send templated HTML emails  ## About  This page contains the REST API documentation for MailSlurp. All requests require API Key authentication passed as an `x-api-key` header.  Create an account to [get your free API Key](https://app.mailslurp.com/sign-up/).  ## Resources - 🔑  [Get API Key](https://app.mailslurp.com/sign-up/)                    - 🎓 [Developer Portal](https://www.mailslurp.com/developers/)           - 📦 [Library SDKs](https://www.mailslurp.com/developers/integrations/) - ✍️ [Code Examples](https://github.com/mailslurp/examples) - ⚠️ [Report an issue](https://drift.me/mailslurp)  ## Explore
 *
 * OpenAPI spec version: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export interface ConfigurationParameters {
    apiKey?: string | ((name: string) => string);
    username?: string;
    password?: string;
    accessToken?: string | ((name: string, scopes?: string[]) => string);
    basePath?: string;
    baseOptions?: any;
}
export declare class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | ((name: string) => string);
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | ((name: string, scopes?: string[]) => string);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    /**
     * base options for fetch calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    constructor(param?: ConfigurationParameters);
}

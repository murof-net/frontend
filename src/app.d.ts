// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user?: DecodedToken;
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
        interface DecodedToken {
            [key: string]: any;
            name: string;
            email: string;
        }
    }
}

export {};

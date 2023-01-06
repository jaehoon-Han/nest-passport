import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
declare const localStrategy_base: new (...args: any[]) => Strategy;
export declare class localStrategy extends localStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<any>;
}
export {};

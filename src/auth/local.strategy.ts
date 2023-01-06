import { Injectable } from "@nestjs/common/decorators";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { UnauthorizedException } from "@nestjs/common/exceptions";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super(); // config 
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);

        if (!user) {
            throw new UnauthorizedException();
       }

       return user;
    }
}
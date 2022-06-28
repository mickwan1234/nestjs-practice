import { Body, ValidationPipe } from "@nestjs/common";
import { Controller, Post, Req } from "@nestjs/common";
import console from "console";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto:AuthDto) {
        console.log(dto);
        return this.authService.signup();
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}
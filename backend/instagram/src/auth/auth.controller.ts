import { Body, Controller, Post, Request } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { User } from "../model/user.model";
import { AuthCredentialsDto } from "./auth.dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(@Body() credential: AuthCredentialsDto) {
    return this.authService.login(credential);
  }

  @Post("register")
  async register(@Body() user: User) {
    return this.authService.register(user);
  }
}

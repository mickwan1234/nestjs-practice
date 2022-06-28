import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable({})
export class AuthService {
    constructor(private prismaService: PrismaService) {

    }
    signin() {
        return {msg:'I am signin'}
    }

    signup() {return {msg:'I am signup'}}
}


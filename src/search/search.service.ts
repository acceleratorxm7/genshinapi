import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CharSearchDto } from "./dto/CharSearchDto";

@Injectable()
export class searchService {
    constructor(private prisma: PrismaService) {}

    getCharacter(args: CharSearchDto) {
        return this.prisma.characterInfo.findMany({
            where: {
                name: {
                    contains: args.name, 
                    mode: "insensitive"
                },
                element_key: {
                    equals: args.element,
                    mode: "insensitive"
                },
                level: args.level,
                location_key: {
                    equals: args.location,
                    mode: "insensitive"
                }
            },
            include:{
                gender: true,
                location: true,
                weapon: true
            }
        });
    }

    getMaterial(args: { name?: String}) {
        return this.prisma.itemInfo.findMany({});
    }
}
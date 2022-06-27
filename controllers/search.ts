import { PrismaClient } from "@prisma/client";
import { transformAndValidate } from "class-transformer-validator";
import { CharacterModel } from "../models/character";
import { materialModel } from "../models/material";

const prisma = new PrismaClient();

export default {
    async getMaterial() {
        /*
        try {
            let result = await transformAndValidate(materialModel, row);
            console.log(result.constructor);
            return result;
        } catch(error) {
            console.log(error);
            return {};
        }*/
    }
}
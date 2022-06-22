import { pool } from "../db";
import { transformAndValidate } from "class-transformer-validator";
import { CharacterModel } from "../models/character";
import { materialModel } from "../models/material";

export default {
    async getMaterial() {
        let db = await pool.getConnection();
        
        let [row] = await db.query(`SELECT A.id, 
        A.name, 
        A.description, 
        A.level, 
        A.type as type_key,
        B.name as type_name
        FROM material_info A 
        left JOIN material_type B ON A.type = B.key`);

        console.log(row);
        
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
import { transformAndValidate } from "class-transformer-validator";
import { ValidationError } from "class-validator";
import { pool } from "../db";
import { CharacterModel } from "../models/character";
export default {
    async getMaterial(): Promise<object> {
        let db = await pool.getConnection();
        
        let [row]: [any & CharacterModel[], any] = await db.query("SELECT * FROM character_info");

        try {
            let result = await transformAndValidate(CharacterModel, row);
            console.log(result.constructor);
            return result;
        } catch(error) {
            console.log(error);
            return {};
        }
    }
}
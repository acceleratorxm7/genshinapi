import { RowDataPacket } from "mysql2";
import { pool } from "../db";
import { CharacterModel } from "../models/character";
export default {
    async getMaterial(): Promise<object> {
        let db = await pool.getConnection();
        
        let b =  JSON.parse('{"result":true, "count":42}');
        
        return b;
    }
}
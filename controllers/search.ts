import { RowDataPacket } from "mysql2";
import { pool } from "../db";
import { CharacterModel } from "../models/character";
export default {
    async getMaterial(): Promise<string> {
        let db = await pool.getConnection();
        
        let [result]: [RowDataPacket[], any] = await db.query("SELECT * FROM character_info");

        console.log(result);
        
        return "a";
    }
}
import { materialModel } from "./material";
//common data types for other models
type typeFormat = {
    text: string,
    key: string
}

type NormalAttack = "NormalAttack";
type ElementarySkill = "ElementarySkill";
type Burst = "Burst";

type attackType = NormalAttack | ElementarySkill | Burst;

interface attackTypeModel extends typeFormat {
    key: attackType
}

let a: attackTypeModel = {
    text: "asdf",
    key: "NormalAttack"
}


type itemBase = {
    material: materialModel,
    amount: number
}

type itemBaseMultiple = itemBase[];

export {
    attackTypeModel,
    typeFormat,
    itemBase,
    itemBaseMultiple
}
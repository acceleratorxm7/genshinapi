import { IsEnum, IsNumber, IsString } from "class-validator";
import { materialModel } from "./material";
//common data types for other models
class typeFormat {
    @IsString()
    text: string;

    @IsString()
    key: string;
}

enum element {
    AMENO = 'Ameno',
    CRYO = 'Cryo',
    DENDRO = 'Dendro',
    ELECTRO = 'Electro',
    GEO = 'Geo',
    HYDRO = 'Hydro',
    PYRO = 'Pyro'
}

enum attackType {
    NormalAttack = "NormalAttack",
    ElementarySkill = "ElementarySkill",
    Burst = "Burst"
}

enum gender {
    FEMALE = 'F',
    MALE = 'M'
}

class attackTypeModel extends typeFormat {
    @IsEnum(attackType)
    key: attackType
}

class elementModel extends typeFormat {
    @IsEnum(element)
    key: element
}

class genderModel extends typeFormat {
    @IsEnum(gender)
    key: gender
}

class itemBase {
    material: materialModel;
    
    @IsNumber()
    amount: number;
}

export {
    attackTypeModel,
    genderModel,
    elementModel,
    itemBase
}
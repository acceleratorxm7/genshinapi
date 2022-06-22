import "reflect-metadata";
import { Type } from "class-transformer";
import { IsBoolean, IsDefined, IsEnum, IsNumber, IsString, ValidateNested } from "class-validator";

import { attackTypeModel, elementModel, genderModel, itemBase } from "./common";
import { weaponModel } from "./weapon";
import { artifactModel } from "./artifact";


type birthModel = [number, number] | undefined;

class skillRatio {
    @IsString()
    name: string;

    @IsNumber({}, {each: true})
    value: number[]
}
class skill {
    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @ValidateNested()
    @Type(() => attackTypeModel)
    type: attackTypeModel; 

    @ValidateNested()
    @Type(() => skillRatio)
    ratio: skillRatio[];
}

type build = {
    type: string, 
    priority: attackTypeModel[],
    weapons: weaponModel[], 
    artifacts: artifactModel[]
}

type passive = {
    name: string,
    description: string
}

type constellation = {
    name: string,
    description: string
}

class CharacterModel {
    @IsString()  
    name: string;
    
    @ValidateNested({each: true})
    birth: birthModel;

    //@ValidateNested()
    //@Type(() => genderModel)
    @IsString()
    gender: genderModel; 

    @IsString()
    star: string;
    
    @IsString()
    icon: string;

    //@ValidateNested()
    //@Type(() => elementModel)
    @IsString()
    element: elementModel;

    @ValidateNested()
    @Type(() => skill)
    skill: skill

 /*   keyword?: string[], 
    quotes: string,
    location: string, 
    talent: itemBaseMultiple[],  
    ascension: itemBase[],
    skill: skill[],
    passive: passive[],
    constellation: constellation[],
    build: build[]*/
}

export {
    CharacterModel
}
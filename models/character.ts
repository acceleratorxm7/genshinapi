import "reflect-metadata";
import { Type } from "class-transformer";
import { IsBoolean, IsDefined, IsEnum, IsNumber, IsString, Validate, ValidateNested } from "class-validator";

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

class buildModel {
    @IsString()
    type: string;
    
    @ValidateNested() 
    @Type(() => attackTypeModel)
    priority: attackTypeModel[];

    @ValidateNested()
    @Type(() => weaponModel)
    weapons: weaponModel[];

    @ValidateNested()
    @Type(() => artifactModel)
    artifacts: artifactModel[];
}

class passiveModel {
    @IsString()
    name: string;

    @IsString()
    description: string;
}

class constellationModel {
    @IsString() 
    name: string;

    @IsString()
    description: string;
}

class CharacterModel {
    @IsString()  
    name: string;
    
    @ValidateNested({each: true})
    birth: birthModel;

    @ValidateNested()
    @Type(() => genderModel)
    gender: genderModel; 

    @IsString()
    star: string;
    
    @IsString()
    icon: string;

    @ValidateNested()
    @Type(() => elementModel)
    element: elementModel;

    @ValidateNested()
    @Type(() => skill)
    skill: skill;

    @IsString()
    quotes: string;

    @IsString()
    location: string;
    
    @ValidateNested() 
    @Type(() => itemBase)
    talent: itemBase[];  
    
    @ValidateNested() 
    @Type(() => itemBase)
    ascension: itemBase[];

    @ValidateNested()
    @Type(() => passiveModel)
    passive: passiveModel[];


    @ValidateNested()
    @Type(() => constellationModel)
    constellation: constellationModel[];

    @ValidateNested()
    @Type(() => buildModel)
    build: buildModel[];
}

export {
    CharacterModel
}
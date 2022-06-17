import { attackTypeModel, itemBase, itemBaseMultiple } from "./common";
import { elementModel } from "./element";
import { weaponModel } from "./weapon";
import { artifactModel } from "./artifact";

type birthModel = [number, number] | undefined;

type genderModel = "F" | "M"; 

type skill = {
    name: string,
    description: string,
    type: attackTypeModel, 
    ratio: skillRatio[]
}

type skillRatio = {
    name: string, 
    value: number[]
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

interface CharacterModel {  
    name: string,
    birth: birthModel,
    gender: genderModel, 
    star: string, 
    icon: string, 
    element: elementModel, 
    weapon: weaponModel,
    keyword?: string[], 
    quotes: string,
    location: string, 
    talent: itemBaseMultiple[],  
    ascension: itemBase[],
    skill: skill[],
    passive: passive[],
    constellation: constellation[],
    build: build[]
}

export {
    CharacterModel
}
import { languageWrapper } from "./util";

type birth = [number, number] | undefined;

interface Character {  
    name: languageWrapper,
    age: birth
}
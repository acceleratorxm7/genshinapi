import { CharacterModel } from "../models/character"
import { availableLangs } from "../models/lang"

interface searchOption {
    search: string,
    lang: availableLangs
}

export default {
    async search(option: searchOption): Promise<CharacterModel | void> {
        
        return;
   }
}
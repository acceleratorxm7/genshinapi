import { availableLangs } from "./lang";

type languageWrapper = {
    [lang in availableLangs]?: string
}

export {languageWrapper}
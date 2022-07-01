import { IsString } from "class-validator"

class artifactModel {
    @IsString()
    name: string;
}

export {
    artifactModel
}
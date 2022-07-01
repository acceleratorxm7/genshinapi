import { IsString } from "class-validator"

class weaponModel {
    @IsString()
    name: string
}

export {
    weaponModel
}
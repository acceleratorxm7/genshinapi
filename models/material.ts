import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, IsUrl, ValidateNested } from "class-validator"

class itemCombination {
    item: materialModel;
    amount: number;
}

class combinationModel {
    @ValidateNested() 
    @Type(() => itemCombination)
    item: itemCombination[];

    @IsString()
    type: string; 
}

class materialModel {
    @IsOptional()
    @IsString()
    group: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    class: string; 

    @IsString()
    type: string;

    @IsNumber()
    level: number; 

    @IsUrl() 
    image: string;

    @IsOptional()
    @IsUrl()
    location: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => combinationModel)
    combination: combinationModel[]
}

export {
    materialModel
}
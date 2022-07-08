import { IsNumber, IsOptional, IsString } from "class-validator";

export class CharSearchDto {
    @IsOptional()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsString() 
    element: string; 

    @IsOptional() 
    @IsString()
    location: string;

    @IsOptional() 
    @IsNumber() 
    level: number; 
}
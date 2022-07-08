import { Controller, Get, Query } from "@nestjs/common";
import { CharSearchDto } from "./dto/CharSearchDto";
import { searchService } from "./search.service";

@Controller("/api/v1/search")
export class searchController {
    constructor(private searchService: searchService) {}

    @Get('/character')
    getCharacter(@Query() params: CharSearchDto) {
        return this.searchService.getCharacter(params);         
    }

    @Get('/weapon') 
    getWeapon() {
        return "";
    }

    @Get("/artifact")
    getArtifact() {
        return "";
    }

    @Get('/material')
    getMaterial() {
        return this.searchService.getMaterial({});
    }

    //filter with day
    @Get('/drop')
    getDrop() { 
        return "";
    }
}
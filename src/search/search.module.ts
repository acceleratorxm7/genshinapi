import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { searchController } from './search.controller';
import { searchService } from './search.service';

@Module({
    controllers: [searchController],
    providers: [searchService, PrismaService]
})
export class SearchModule {}

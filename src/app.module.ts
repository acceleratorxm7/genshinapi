import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './search/search.module';

const node_env = process.env.NODE_ENV; 

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: node_env ? `${node_env}.env`: '.env',
  }), SearchModule]
})  
export class AppModule {}

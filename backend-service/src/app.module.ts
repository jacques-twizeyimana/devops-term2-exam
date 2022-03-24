import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokensModule } from './tokens/tokens.module';
import { UsersModule } from './users/users.module';
import { MetersModule } from './meters/meters.module';

@Module({
  imports: [MetersModule, TokensModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

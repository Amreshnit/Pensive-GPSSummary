/* eslint-disable prettier/prettier */
// import { Module } from '@nestjs/common';
// import {TypeOrmModule} from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {User} from "./user.entity";
import {JwtModule} from "@nestjs/jwt";
import { GPSSummaries } from './gpsSummary.entity';

@Module({
    imports: [
        // TypeOrmModule.forRoot({
        //     type: 'mysql',
        //     host: process.env.DATABASE_HOST,
        //     port: +(process.env.DATABASE_PORT || 3306),
        //     username: process.env.DATABASE_USER,
        //     password: process.env.DATABASE_PASSWORD,
        //     database: process.env.DATABASE_NAME,
        //     entities: [User],
        //     synchronize: true,
        // }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1795',
            database: 'test',
            entities: [User,GPSSummaries],
            synchronize: true,
            autoLoadEntities: true,
        }),
        TypeOrmModule.forFeature([User, GPSSummaries]),
        JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: '1d'}
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

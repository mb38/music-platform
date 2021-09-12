import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import * as path from 'path';
import {ServeStaticModule} from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: `.env.local` }),
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASS}@cluster0.3rcc2.mongodb.net/music-platform?retryWrites=true&w=majority`),
        TrackModule,
        FileModule
    ]
})
export class AppModule {
}

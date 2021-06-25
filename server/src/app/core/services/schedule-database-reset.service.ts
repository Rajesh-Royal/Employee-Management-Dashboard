import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import * as mongoose from "mongoose";
import { productionMongoURI } from "src/app/app.module";

@Injectable()
export class ScheduleDatabaseResetService {
    private Logger = new Logger("ScheduleDatabaseResetService")
    constructor() { }

    // schedule database reset function
    @Cron('0 0 0 * * *')
    public async serve() {
        mongoose.connect(productionMongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then((connection) => {
                mongoose.connection.dropDatabase().then(res => {
                    this.Logger.verbose(`Database :::: ${mongoose.connection.name} :::: dropped. Status ${res}`)
                })
            });
    }

}
import { Module } from "@munster/core";
import { App } from "./app.component";

@Module({

    bootstrap: [App, 'app-root']

})
export class AppModule {}
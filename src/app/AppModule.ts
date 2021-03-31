import { Module } from "@munster/core";
import { App } from "./App";
import { LoginModule } from "./login/LoginModule";

@Module({
    prefix: 'app',
    bootstrap: [App, 'app-root'],
    modules: [
        LoginModule
    ]
})
export class AppModule {}
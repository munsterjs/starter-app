import { AppModule } from "./app/AppModule";

const mod = new AppModule();
(mod as any).initChildModules();
(mod as any).initComponents();
import express, { Application } from "express";
import expenseRoutes from "./routes/expense.routes";



class App {
    app: Application;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
    }

    private initializeRoutes() {
        this.app.use("/expense", expenseRoutes)
    }
}


export default new App().app;
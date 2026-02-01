import { Router } from "express";
import ExpenseController from "../controllers/ExpenseController";

class ExpenseRoutes {
  public router: Router;
  private expenseController: ExpenseController;

  constructor() {
    this.router = Router();
    this.expenseController = new ExpenseController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/", this.expenseController.createExpense);
    this.router.get("/", this.expenseController.getAllExpenses);
    this.router.get("/:id", this.expenseController.getExpenseById);
    this.router.put("/:id", this.expenseController.updateExpense);
    this.router.delete("/:id", this.expenseController.deleteExpense);
  }
}

export default new ExpenseRoutes().router;

import { Request, Response, NextFunction } from "express";
import ExpenseService from "../services/ExpenseService";

class ExpenseController {
  private expenseService: ExpenseService;

  constructor() {
    this.expenseService = new ExpenseService();
  }

  createExpense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const expense = await this.expenseService.createExpense(req.body);
      res.status(201).json(expense);
    } catch (error) {
      next(error);
    }
  };

  getAllExpenses = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const expenses = await this.expenseService.getAllExpenses();
      res.status(200).json(expenses);
    } catch (error) {
      next(error);
    }
  };

  getExpenseById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id as string;
      const expense = await this.expenseService.getExpenseById(id);

      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }

      res.status(200).json(expense);
    } catch (error) {
      next(error);
    }
  };

  updateExpense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id as string;
      const updatedExpense = await this.expenseService.updateExpense(
        id,
        req.body
      );

      if (!updatedExpense) {
        return res.status(404).json({ message: "Expense not found" });
      }

      res.status(200).json(updatedExpense);
    } catch (error) {
      next(error);
    }
  };

  deleteExpense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id as string;
      const deletedExpense = await this.expenseService.deleteExpense(id);

      if (!deletedExpense) {
        return res.status(404).json({ message: "Expense not found" });
      }

      res.status(200).json(deletedExpense);
    } catch (error) {
      next(error);
    }
  };
}

export default ExpenseController;

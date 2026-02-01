import ExpenseRepository from "../repositories/ExpenseRepository";
import { ExpenseDocument } from "../models/Expense";

class ExpenseService {
  private expenseRepository: ExpenseRepository;

  constructor() {
    this.expenseRepository = new ExpenseRepository();
  }

  async createExpense(data: Partial<ExpenseDocument>): Promise<ExpenseDocument> {
    if (data.amount !== undefined && data.amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }

    return await this.expenseRepository.create(data);
  }

  async getAllExpenses(): Promise<ExpenseDocument[]> {
    return await this.expenseRepository.findAll();
  }

  async getExpenseById(id: string): Promise<ExpenseDocument | null> {
    return await this.expenseRepository.findById(id);
  }

  async updateExpense(
    id: string,
    data: Partial<ExpenseDocument>
  ): Promise<ExpenseDocument | null> {
    if (data.amount !== undefined && data.amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }

    return await this.expenseRepository.updateById(id, data);
  }

  async deleteExpense(id: string): Promise<ExpenseDocument | null> {
    return await this.expenseRepository.deleteById(id);
  }
}

export default ExpenseService;

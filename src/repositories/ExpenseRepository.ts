import Expense, { ExpenseDocument } from "../models/Expense";

class ExpenseRepository {
  async create(data: Partial<ExpenseDocument>): Promise<ExpenseDocument> {
    const expense = new Expense(data);
    return await expense.save();
  }

  async findAll(): Promise<ExpenseDocument[]> {
    return await Expense.find();
  }

  async findById(id: string): Promise<ExpenseDocument | null> {
    return await Expense.findById(id);
  }

  async updateById(
    id: string,
    data: Partial<ExpenseDocument>
  ): Promise<ExpenseDocument | null> {
    return await Expense.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
  }

  async deleteById(id: string): Promise<ExpenseDocument | null> {
    return await Expense.findByIdAndDelete(id);
  }
}

export default ExpenseRepository;

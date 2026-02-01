import mongoose, { Schema, Document } from "mongoose";

export interface ExpenseDocument extends Document {
  title: string;
  amount: number;
  category: "food" | "travel" | "shopping" | "other";
  date: Date;
}

const ExpenseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      required: true,
      min: 1
    },
    category: {
      type: String,
      enum: ["food", "travel", "shopping", "other"],
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Expense = mongoose.model<ExpenseDocument>("Expense", ExpenseSchema);

export default Expense;

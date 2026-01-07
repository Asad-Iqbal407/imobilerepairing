import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IQuote extends Document {
  category: string;
  part: string;
  deviceModel: string;
  problem: string;
  name: string;
  email: string;
  phone: string;
  images: string[];
  status: 'pending' | 'responded' | 'completed';
}

const QuoteSchema: Schema = new Schema({
  category: { type: String, required: true },
  part: { type: String, required: true },
  deviceModel: { type: String, required: true },
  problem: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  images: { type: [String], default: [] },
  status: { 
    type: String, 
    enum: ['pending', 'responded', 'completed'], 
    default: 'pending' 
  },
}, { timestamps: true });

const Quote: Model<IQuote> = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);

export default Quote;

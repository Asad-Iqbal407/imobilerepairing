import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  device: string;
  message: string;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  device: { type: String, required: false },
  message: { type: String, required: true },
}, { timestamps: true });

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;

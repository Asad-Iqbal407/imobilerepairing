import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: [1, 'Rating cannot be less than 1'],
    max: [5, 'Rating cannot be more than 5'],
  },
  comment: {
    type: String,
    required: [true, 'Please provide a comment'],
    maxlength: [500, 'Comment cannot be more than 500 characters'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);

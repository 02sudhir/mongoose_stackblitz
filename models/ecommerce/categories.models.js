import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schemas({}, { timestamp: true });

export const categories = mongoose.model('Categories', categoriesSchema);

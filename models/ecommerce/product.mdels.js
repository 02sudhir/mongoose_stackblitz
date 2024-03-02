import mongoose from 'mongoose';

const productSchema = new mongoose.Schemas({}, { timestamp: true });

export const product = mongoose.models('Product', productSchema);

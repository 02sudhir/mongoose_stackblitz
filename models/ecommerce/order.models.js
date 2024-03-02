import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({}, { timestamp: true });

export const Order = mongoose.models('Order', orderSchema);

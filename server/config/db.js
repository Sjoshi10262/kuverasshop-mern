import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI;
    if (!connStr) {
      console.warn('⚠️ MONGODB_URI is not defined in environment variables. Database connection skipped for initial startup.');
      return;
    }
    const conn = await mongoose.connect(connStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Non-fatal warning so server stays up for static assets or health checks
  }
};

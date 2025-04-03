import mongoose from "mongoose";
import Service from "../models/service.js";
import connectdb from "./database.js"; // Ensure correct path

const seedservices = async () => {
    const servicelist = [
        { service: "Web Development", description: "Building powerful e-commerce websites", price: "$2000-$4000", provider: "Thapa Technical" },
        { service: "Data Analyst", description: "Building powerful data sheets", price: "$3000-$6000", provider: "Thapa Technical" },
        { service: "Software Development", description: "Building software solutions", price: "$8000-$10000", provider: "Thapa Technical" },
        { service: "AI Developer", description: "Building powerful AI-powered websites", price: "$25000-$45000", provider: "Thapa Technical" },
        { service: "MERN Stack Developer", description: "Building full-stack websites", price: "$40000-$60000", provider: "Thapa Technical" },
    ];
    try {
        await connectdb(); // Ensure database connection
        console.log("✅ Connected to database");

        for (const service of servicelist) {
            const isExist = await Service.findOne({ service: service.service });
            if (!isExist) {
                await Service.create(service);
            } else {
                console.log(`⚠️ Service already exists: ${service.service}`);
            }
        }

    console.log("🎉 Seeding completed successfully!");
    } catch (error) {
        console.error("❌ Failed to insert data:", error);
    } finally {
        mongoose.connection.close(); // Close database connection
        console.log("🔌 Database connection closed");
    }
};

// Run the function immediately when executing the script
seedservices();

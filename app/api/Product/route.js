import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://MongoDb:8Jrrz5Uk9W5kGkVf@cluster0.myikjmy.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const allProducts = await inventory.find(query).toArray;

    return NextResponse.json({ allProducts });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request) {
  let body = request.body;

  const uri =
    "mongodb+srv://MongoDb:8Jrrz5Uk9W5kGkVf@cluster0.myikjmy.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const allProducts = await inventory.insertOne(body);

    return NextResponse.json({ allProducts });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

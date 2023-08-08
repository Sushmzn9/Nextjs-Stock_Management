import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://MongoDb:8Jrrz5Uk9W5kGkVf@cluster0.myikjmy.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("Sushan");
    const movies = database.collection("Stock Management");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const movie = await movies.find(query).toArray;

    console.log(movie);
    return NextResponse.json({ a: 34, movie });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

import { MongoClient, ServerApiVersion } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

export async function connectToDatabase() {
  if (!client) {
    const uri = process.env.CONNECTION_STRING;

    if (!uri) {
      throw new Error(
        "Please define the CONNECTION_STRING environment variable inside .env"
      );
    }

    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    clientPromise = client.connect();
  }

  return clientPromise;
}

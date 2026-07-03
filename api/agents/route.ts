import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Research Agent",
      reputation: 98,
      price: "2 SOL"
    },
    {
      id: 2,
      name: "Trading Agent",
      reputation: 95,
      price: "5 SOL"
    }
  ]);
}

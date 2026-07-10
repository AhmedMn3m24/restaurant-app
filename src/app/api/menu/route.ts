import menu from "@/src/data/menu.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(menu);
}
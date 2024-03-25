import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "GET method received" });
};

export const POST = () => {
  return NextResponse.json({ message: "POST method received" });
};
export const PUT = () => {
  return NextResponse.json({ message: "PUT method received" });
};
export const DELETE = () => {
  return NextResponse.json({ message: "DELETE method received" });
};

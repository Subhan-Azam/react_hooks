import { NextResponse } from "next/server";

export const POST = (req) => {
  const title = new URL(req.url).searchParams.get("title");
  const desc = new URL(req.url).searchParams.get("description");
  return NextResponse.json({
      message: "POST method api/todos?title='any title'",
      data: title,
      desc,
    });
};

export const GET = (req) => {
  let body = req.nextUrl.searchParams
  console.log(body);
  return Response.json("get request called ");
}
import { NextResponse } from "next/server";

export const GET = () => {
  // console.log("GET Request");

  // let clientApi = {
  //   id: "123abc",
  //   title: "This is title",
  //   description: "This is title",
  // };

  return NextResponse.json('GET Function received')
};

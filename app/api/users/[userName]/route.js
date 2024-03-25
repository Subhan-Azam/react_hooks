import { NextResponse } from "next/server";

export const GET = (req, route) => {
  console.log("router", route.params);
  return NextResponse.json({
    message: "GET method received api/user/dynamicpath",
    name: route.params.userName,
  });
};

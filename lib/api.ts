import { NextRequest, NextResponse } from "next/server";

export function successResponse(
  data: any,
  status: number = 200
): NextResponse<any> {
  return NextResponse.json(data, {
    status,
  });
}

export function errorResponse(error: any, status = 500) {
  console.log("~ /api/index: ", error);
  return NextResponse.json(
    { error: error.message || error.toString() },
    { status, headers: { "content-type": "application/json" } }
  );
}

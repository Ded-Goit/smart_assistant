import { NextResponse } from "next/server";
import { loginWithGoogle } from "@/lib/api/apiClient"; 

export async function POST(req: Request) {
  const { code } = await req.json();
  try {
    const result = await loginWithGoogle(code);
    return NextResponse.json({ success: true, data: result });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
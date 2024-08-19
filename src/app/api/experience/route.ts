import { createExperience } from "@/database/service/experience.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const bodyData = await req.json();
    delete bodyData._id;
    const result = await createExperience(bodyData);
    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
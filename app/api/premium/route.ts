import { NextRequest, NextResponse } from "next/server";
import { withX402 } from "x402-next";
import { ALL_PROMPTS } from "@/lib/prompts";

const handler = async (_request: NextRequest) => {
  return NextResponse.json({
    success: true,
    total: ALL_PROMPTS.length,
    prompts: ALL_PROMPTS,
  });
};

export const GET = withX402(
  handler,
  "0xCc97e4579eeE0281947F15B027f8Cad022933d7e",
  {
    price: "$19",
    network: "base",
    config: {
      description: "PromptForge Pro — 200+ AI Prompts",
    },
  }
);

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { assetProfileId, failureMode } = body;

    if (!assetProfileId || !failureMode) {
      return NextResponse.json({ error: 'Missing assetProfileId or failureMode' }, { status: 400 });
    }

    const updatedProfile = await prisma.asset_profile.update({
      where: { id: assetProfileId },
      data: { failure_mode: failureMode },
    });

    return NextResponse.json(updatedProfile, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: 'Error saving data', details: error.message }), { status: 500 });
    } else {
      return new Response(JSON.stringify({ error: 'Unknown error occurred' }), { status: 500 });
    }
  }
}

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
    console.error('Error updating failure mode:', error);
    return NextResponse.json({ error: 'Error updating failure mode' }, { status: 500 });
  }
}

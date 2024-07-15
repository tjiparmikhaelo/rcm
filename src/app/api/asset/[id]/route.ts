// app/api/asset/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }) {
  const { id } = params;

  if (typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const assetData = await prisma.asset_profile.findUnique({
      where: { id },
    });

    if (assetData) {
      return NextResponse.json(assetData, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Data not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching asset data:', error);
    return NextResponse.json({ error: 'Error loading data' }, { status: 500 });
  }
}
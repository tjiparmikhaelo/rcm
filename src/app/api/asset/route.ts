import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function GET(req: NextRequest) {
  const query: any = await req.json();
  const { id } = query

  console.log('API route hit, ID:', id);

  if (typeof id !== 'string') {
    console.error('Invalid ID:', id);
    return NextResponse.json({ error: 'Invalid ID' });
  }

  try {
    const assetData = await prisma.asset_profile.findUnique({
      where: { id: "clymb0j0d0002kbq1fxrtui3c" },
    });

    console.log('Asset data:', assetData);

    if (assetData) {
      return NextResponse.json(assetData, { status: 200 });
    } else {
      console.error('Asset not found for ID:', id);
      return new Response(JSON.stringify({ error: "Data not found" }), { status: 404 });
    }
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: 'Error loading data', details: error.message }), { status: 500 });
    } else {
      return new Response(JSON.stringify({ error: 'Unknown error occurred' }), { status: 500 });
    }
  }
}
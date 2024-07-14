// app/api/saveMode/route.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { failure_mode, assetProfileId } = await req.json();

    if (!failure_mode) {
      console.error('Failure Mode is missing in the request body');
      return new Response(JSON.stringify({ error: 'Failure Mode is required' }), { status: 400 });
    }

    console.log('Received failure_mode:', failure_mode);

    const failureMode = await prisma.asset_profile.update({
      where: {
        id: assetProfileId
      },
      data: { 
        failure_mode 
      },
    });

    console.log('Successfully saved mode:', failureMode);

    return new Response(JSON.stringify(failureMode), { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return new Response(JSON.stringify({ error: 'Error saving mode', details: error.message }), { status: 500 });
  }
}

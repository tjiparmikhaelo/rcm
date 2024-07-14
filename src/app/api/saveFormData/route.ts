import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body: any = await req.json();

    const { finalStep, assetProfileId }= body;

    // Validate finalStep and assetProfileId
    if (!finalStep || !assetProfileId) {
      return new Response(
        JSON.stringify({ error: 'Final step and asset profile ID are required' }),
        { status: 400 }
      );
    }

    // Save the final step to the database
    const savedData = await prisma.asset_profile.update({
      where: {
        id: assetProfileId,
      },
      data: {
        task_type: finalStep, // assuming the field in your database is named task_type
      },
    });

    // Respond with the saved data
    return new Response(JSON.stringify(savedData), { status: 200 });
  } catch (error) {
    console.error('Error saving data:', error);
    return new Response(
      JSON.stringify({
        error: 'Error saving data',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500 }
    );
  }
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { finalStep, assetProfileId } = await req.json();

    // Validate finalStep here if needed
    if (!finalStep) {
      return new Response(JSON.stringify({ error: 'Final step is required' }), { status: 400 });
    }

    // Save the final step to the database
    const savedData = await prisma.asset_profile.update({
      where: {
        id: assetProfileId,
      },
      data: {
        task_type: finalStep, // assuming the field in your database is named final_step
      },
    });

    // Respond with the saved data
    return new Response(JSON.stringify(savedData), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: 'Error saving data', details: error.message }), { status: 500 });
    } else {
      return new Response(JSON.stringify({ error: 'Unknown error occurred' }), { status: 500 });
    }
  }
}

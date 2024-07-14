import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { formData, assetProfileId } = await req.json();

    // Validate formData here if needed
    if (!formData) {
      return new Response(JSON.stringify({ error: 'Form Data is required' }), { status: 400 })
    }

    console.log(formData);
    

    // Save the form data to the database
    const savedData = await prisma.asset_profile.update({
      where: {
        id: assetProfileId,
      },
      data: {
        task_type: formData.task_type,
        // Add other fields as necessary
      },
    });
    console.log(savedData);
    

    // Respond with the saved data
    return new Response(JSON.stringify(formData), { status: 200 })
  } catch (error) {
    console.error('Error saving form data:', error);
    return new Response(JSON.stringify({ error: 'Error saving data', details: error.message}), { status: 500 })
  }
}
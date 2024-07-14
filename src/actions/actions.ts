"use server"

import { PrismaClient } from "@prisma/client"

export async function create(formData: FormData) {
  const prisma = new PrismaClient()
  
  const createdAssetProfile = await prisma.asset_profile.create({
      data: {
      functional_group: formData.get("functional_group") as string,
      system: formData.get("system") as string,
      equipment_item: formData.get("equipment_item") as string,
      component: formData.get("component") as string,
    }
 })

 return createdAssetProfile.id
}
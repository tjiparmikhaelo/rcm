"use client"

import { useState } from "react"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async () => {
    const results = await prisma.failure_mode.findMany({
      where: {
        failure_mode: { contains: searchTerm }
      }
    })
    setSearchResults(results)
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    handleSearch()
  }
}
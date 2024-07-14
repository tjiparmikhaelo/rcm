import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

interface iDefault {
  defaultValue: string | null
}

export const SearchInput = ({ defaultValue }: iDefault) => {
  const router = useRouter()

  const [inputValue, setValue] = useState(defaultValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setValue(inputValue)
  }

  const handleSearch = () => {
    if (inputValue) return router.push(`/?q=${inputValue}`)
    
    if (!inputValue) return router.push('/')
  }

  const handleKeyPress = (event: { key: any}) => {
    if (event.key === 'Enter') return handleSearch()
  }

  return (
    <div>
      <label htmlFor="inputId">searchIcon</label>
      <input 
        type="text"
        id="inputId"
        placeholder="Isi"
        value={inputValue ?? ""}
        onChange={handleChange}
      />
    </div>
  )
}

// import { PrismaClient } from "@prisma/client"
// import { useState, useEffect } from "react"

// const prisma = new PrismaClient()

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [searchResults, setSearchResults] = useState([])

//   const handleSearch = async () => {
//     const results = await prisma.failure_mode.findMany({
//       where: {
//         failure_mode: { contains: searchTerm }
//       }
//     })
//     setSearchResults(results)
//   }

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value)
//   }
//   useEffect(() => {
//     handleSearch()
//   }, [searchTerm, handleSearch])

//   return (
//     <div></div>
//   )
// }

// export default Search
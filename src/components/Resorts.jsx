import React, { useState } from "react"
import useFetch from "../useFetch"

const Resorts = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const { data, loading } = useFetch("http://localhost:3000/resorts")

  const handleDelete = async (resortId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/resorts/${resortId}`,
        {
          method: "DELETE",
        }
      )

      if (!response.ok) {
        throw new Error("Failed to delete resort.")
      }

      const result = await response.json()
      if (result) {
        setSuccessMessage("Resort deleted successfully")
        window.location.reload()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.error && <p>{data.error}</p>}
      <ul>
        {data?.map((resort) => (
          <li key={resort._id}>
            {" "}
            {resort.name}
            <button onClick={() => handleDelete(resort._id)}>
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  )
}

export default Resorts

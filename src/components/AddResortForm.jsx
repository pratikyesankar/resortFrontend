import React, { useState, useEffect } from "react"

const AddResortForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  })

  const categoryOptions = ["LUXURY", "MID-RANGE", "BUDGET", "BOUTIQUE"]
  const priceRangeOptions = ["LOW", "MEDIUM", "HIGH"]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    try {
      const response = await fetch("http://localhost:3000/resorts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw "Failed to add resort."
      }
      const data = await response.json()
      console.log("Added Resort", data)

      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Add New Resort</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label>Category:</label>
        <br />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label>Location:</label>
        <br />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Rating:</label>
        <br />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
        />
        <br />
        <br />
        <label>Website:</label>
        <br />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Phone Number:</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Check-in Time:</label>
        <br />
        <input
          type="text"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Check-out Time:</label>
        <br />
        <input
          type="text"
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Amenities:</label>
        <br />
        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Price Range:</label>
        <br />
        <select
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
        >
          <option value="">Select Price Range</option>
          {priceRangeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label>Reservations Needed:</label>
        <input
          type="checkbox"
          name="reservationsNeeded"
          checked={formData.reservationsNeeded}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Parking Available:</label>
        <input
          type="checkbox"
          name="isParkingAvailable"
          checked={formData.isParkingAvailable}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Wifi Available:</label>
        <input
          type="checkbox"
          name="isWifiAvailable"
          checked={formData.isWifiAvailable}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Pool Available:</label>
        <input
          type="checkbox"
          name="isPoolAvailable"
          checked={formData.isPoolAvailable}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Spa Available:</label>
        <input
          type="checkbox"
          name="isSpaAvailable"
          checked={formData.isSpaAvailable}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Restaurant Available:</label>
        <input
          type="checkbox"
          name="isRestaurantAvailable"
          checked={formData.isRestaurantAvailable}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Photos (URLs):</label>
        <br />
        <input
          type="text"
          name="photos"
          value={formData.photos}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Add Resort</button>
      </form>
    </div>
  )
}

export default AddResortForm

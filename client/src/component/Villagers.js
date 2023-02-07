import React, {useState, useEffect } from 'react';
import $ from 'jquery';
const Villagers = () => {
  const [villagers, setVillagers] = useState([]);

  const fetchVillagers = () => {
    $.ajax({
      url: 'http://localhost:5000/Villagers',
      type: 'POST',
      success: () => {
        $.ajax({
          url: 'http://localhost:5000/Villagers',
          type: 'GET',
          success: (data) => {
            setVillagers(data);
          }
        })
      }
    })
  }

  useEffect(() => {
    fetchVillagers()
  }, [])

  return (
    <div><h1>Here's our Villagers</h1></div>
  )
}

export default Villagers;
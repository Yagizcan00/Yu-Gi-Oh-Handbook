import React, { useState } from 'react'
import "./SearchFilter.scss"
import { cardData } from '../data/CardData'


function SearchFilter() {

  const [search, setSearch] = useState("")

  console.log(search)

  return (
    <div className='SearchFilter'>

      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className='SearchingBar'
        placeholder='Search Card Name'
      />

      <section className='Items'>

        {cardData.filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item['Card Name'].toLowerCase().includes(search);
        }).map((item) => (
          <section key={item.id} className='Item'>
            <h1>Card Name = <span style={{ color: "rgb(250, 75, 0)", fontWeight: 600, textDecoration: "underline" }}>{item['Card Name']}</span></h1>
            <p><span style={{ color: "rgb(200, 0, 0)", fontSize: "20px", fontWeight: 600, textDecoration: "underline" }}>Turkish</span> = {item['Card Explanation Turkish']}</p>
            <p><span style={{ color: "rgb(200, 0, 0)", fontSize: "20px", fontWeight: 600, textDecoration: "underline" }}>English</span> = {item['Card Explanation English']}</p>
          </section>
        ))}

      </section>

    </div>
  )
}

export default SearchFilter

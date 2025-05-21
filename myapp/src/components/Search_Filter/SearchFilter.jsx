import { useState, useContext } from 'react'
import "./SearchFilter.scss"
import cardData from "../../data/cardData.json"
import Reset from "../../icons/reset.png"
import Add from "../../icons/add.png"
import { KartlarContext } from "../../context/KartlarContext";

function SearchFilter() {

  const [search, setSearch] = useState("")
  const [filteredCards, setFilteredCards] = useState(cardData)

  const { kartEkle } = useContext(KartlarContext);

  const handleChange = (e) => {

    const searchingItem = e.target.value;

    setSearch(searchingItem)

    const filteredItems = cardData.filter((item) =>
      item['Card Name'].toLowerCase().includes(searchingItem.toLowerCase())
    );

    setFilteredCards(filteredItems);
  }

  const handleReset = (e) => {

    setSearch("")

    const filteredItems = cardData.filter((item) =>
      item['Card Name'].toLowerCase().includes("")
    );

    setFilteredCards(filteredItems);
  }

  return (
    <div className='SearchFilter'>

      <section className='SearchingBarParent'>
        <input
          onChange={handleChange}
          type="text"
          value={search}
          className='SearchingBar'
          placeholder='Search Card Name'
        />
        <img className="Icon" src={Reset} alt="Reset" onClick={handleReset} />
      </section>

      <section className='Items'>

        {filteredCards.map((item) => (
          <section key={item.id} className='Item'>
            <h1>Card Name = <span className='Span1'>{item['Card Name']}</span></h1>
            <h2>ID : <span className='Span1'>{item.id}</span></h2>
            <p><span className='Span2'>Turkish</span> = {item['Card Explanation Turkish']}</p>
            <p><span className='Span2'>English</span> = {item['Card Explanation English']}</p>
            <img className="Icon" src={Add} alt="Add" onClick={() => kartEkle(item)} />
          </section>
        ))}

      </section>

    </div>
  )
}

export default SearchFilter

import React, { useContext } from 'react';
import { KartlarContext } from '../../context/KartlarContext';
import Remove from "../../icons/remove.png";
import Smile from "../../icons/smile.png"
import './ElimdekiKartlar.scss';

function ElimdekiKartlar() {
  const { elindekiler, kartiSil } = useContext(KartlarContext);

  return (
    <div className='ElimdekiKartlar'>

      {elindekiler.length === 0 ? (
        <section className='EmptyList'>
          <p>Lütfen bir kart ekleyiniz ...</p>
          <img className="Icon" src={Smile} alt="Smile" />
        </section>

      ) : (
        <section className='Items'>
          {elindekiler.map((item) => (
            <section key={item.id} className='Item'>
              <h1>Card Name = <span className='Span1'>{item['Card Name']}</span></h1>
              <h2>ID : <span className='Span1'>{item.id}</span></h2>
              <p><span className='Span2'>Turkish</span> = {item['Card Explanation Turkish']}</p>
              <p><span className='Span2'>English</span> = {item['Card Explanation English']}</p>
              <img
                className="Icon"
                src={Remove}
                alt="Remove"
                onClick={() => kartiSil(item.id)}
              />
            </section>
          ))}
        </section>
      )}

    </div>
  );
}

export default ElimdekiKartlar;

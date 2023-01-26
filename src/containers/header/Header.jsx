import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Vamos construir algo incrível com GPT-3 OpenAI</h1>
        <p>A primeira versão do GPT foi lançada em 2018 e continha 117 milhões de parâmetros. A segunda versão do modelo, GPT-2, foi lançada em 2019 com cerca de 1,5 bilhão de parâmetros. Como a versão mais recente, o GPT-3 salta sobre o último modelo por uma margem enorme com mais de 175 bilhões de parâmetros, o que é mais de 100 vezes seu antecessor e dez vezes mais do que programas comparáveis.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Vamos Começar</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header
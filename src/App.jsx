import { useState } from 'react'
import './App.css'

function App() {

  const [arr, setArr] = useState([
    '/img/img_1.png',
    '/img/img_2.png',
    '/img/img_3.png'
  ])

  const [mainImg, setImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIteqyPc1rxqlzXnahAzSAiNy2vJyaEPIfQ&s')

  const [price, setPrice] = useState(1200);
  const [num, setNum] = useState(1);


  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <img src="/img/Nike logo.svg" alt="" />
            </div>
            <ul>
              <li><a href="">Women</a></li>
              <li><a href="">Men</a></li>
              <li><a href="">Kids</a></li>
              <li><a href="">Collections</a></li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="hero_info">
              <h1>Nike Air <br />
                Max Pre-Day</h1>
              <p>Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.</p>
              <div className="hero_price">
                <button>
                  <p onClick={()=>{
                    if(num>1){
                      setNum(num-1)
                    }
                  }}>-</p>
                  <span>{num}</span>
                  <p onClick={()=>setNum(num+1)}>+</p>
                </button>
                <h2>$ {price*num}</h2>
              </div>
            </div>
            <div className="hero_img">
              <img src={mainImg} alt="" />
            </div>
          </div>
        </div>
      </header>
      <footer>
        <div className="container">
          <div className="imgs">
            {
              arr.map((item)=>{
                return <img onClick={()=>setImg(item)} src={item} alt="" />
              })
            }
          </div>
          <div className="icon">
            <img src="public/img/icon.svg" alt="" />
            <h3>Watch Video</h3>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

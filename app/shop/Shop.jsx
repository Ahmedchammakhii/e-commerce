"use client"
import { useRef, useState,useEffect, useLayoutEffect } from "react"
import shop from "./shop.module.css"
import gsap from "gsap";

export default function Shop () {
const [showmore,setshow]=useState(false)
const row = useRef(null);
const row1 = useRef(null);
const row2 = useRef(null);
const [clickedItems, setClicked] = useState([
  { item: 'Chair', clicked: false },
  { item: 'Sofa', clicked: false },
  { item: 'Desk', clicked: false },
  { item: 'Bed', clicked: false },
  { item: 'Lighting', clicked: false },
]);
const [firstRow] = useState( [
  { link: "/assets/sofa-featured-collection.jpg" },
  { link: "/assets/row-3-sofa-lamp.jpg" },
  { link: "/assets/row-1-sofa.jpg"},
  { link: "/assets/row-1-chair-lamp.jpg" },
  { link: "/assets/chair-featured-collection.jpg"},
]);
const [secRow] = useState( [
  { link: "/assets/row2 (1).jpg" },
  { link: "/assets/row2 (2).jpg" },
  { link: "/assets/row2 (3).jpg"},
  { link: "/assets/row2 (4).jpg" },
  { link: "/assets/row2 (5).jpg"},
]);
const [thirdRow] = useState( {
 0: { link: "/assets/row3/row3 (1).jpg" },
 1: { link: "/assets/row2 (4).jpg" },
 2: { link: "/assets/row3/row3 (3).jpg"},
 3: { link: "/assets/row3/row3 (4).jpg" },
  4:{ link: "/assets/row3/row3 (5).jpg"},
});
const [color, setColor] = useState([  { item: "black"  , clicked: false },
{ item: "brown"  , clicked: false },

  { item: "red",
  clicked: false },
  { item: "blue",
  clicked: false },
  { item: "grey",
  clicked: false },
  { item: "pink",
  clicked: false },
  {item:"purple",  clicked: false },
  {item:"green",
  clicked: false },{item:  "beige"
,
  clicked: false },
]);


useEffect(()=>{
  window.scrollTo(0,0)
  const todisplay = 3;
  const shopContent = row.current;
  shopContent.style.setProperty("--shopElements", shopContent.children.length );
  const shopContent2 = row1.current;
  const shopContent3 = row2.current;
  shopContent3.style.setProperty("--shopElements", shopContent3.children.length );

  shopContent2.style.setProperty("--shopElements", shopContent2.children.length );

 if (window.innerWidth<1700) {var interval = setInterval(()=> {
  shopContent.style.setProperty("--shopElements", shopContent.children.length );
  shopContent3.style.setProperty("--shopElements", shopContent3.children.length );
  shopContent2.style.setProperty("--shopElements", shopContent2.children.length );
    for (let i = 0; i < todisplay+1; i++) {
      shopContent.appendChild(shopContent.children[i].cloneNode(true));
      shopContent2.appendChild(shopContent2.children[i].cloneNode(true));
      shopContent3.appendChild(shopContent3.children[i].cloneNode(true));

   
    };
  },11000)}
  else if (window.innerWidth>1700) {var interval = setInterval(()=> {
    shopContent.style.setProperty("--shopElements", shopContent.children.length );
    shopContent3.style.setProperty("--shopElements", shopContent3.children.length );
    shopContent2.style.setProperty("--shopElements", shopContent2.children.length );
      for (let i = 0; i < todisplay+1; i++) {
        shopContent.appendChild(shopContent.children[i].cloneNode(true));
        shopContent2.appendChild(shopContent2.children[i].cloneNode(true));
        shopContent3.appendChild(shopContent3.children[i].cloneNode(true));
  
     
      };
    },9000)}
    else if (window.innerWidth<600) {var interval = setInterval(()=> {
      shopContent.style.setProperty("--shopElements", shopContent.children.length );
      shopContent3.style.setProperty("--shopElements", shopContent3.children.length );
      shopContent2.style.setProperty("--shopElements", shopContent2.children.length );
        for (let i = 0; i < todisplay+1; i++) {
          shopContent.appendChild(shopContent.children[i].cloneNode(true));
          shopContent2.appendChild(shopContent2.children[i].cloneNode(true));
          shopContent3.appendChild(shopContent3.children[i].cloneNode(true));
    
       
        };
      },20000)}
    //slider hne 
    var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
};
// btn 
const button = document.querySelectorAll('.addtocard');

button.forEach(btn=>btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const offsetX = (x - centerX) / 5;
    const offsetY = (y - centerY) / 5;
    
    btn.style.translate = `${offsetX}px ${offsetY}px`;
}));


 return ()=>{
if (interval) clearInterval(interval)
 }
  
  },[]);
  
 

return (
  
 <section className={shop.shop}
 >
<div className={shop.banner}>
 <div className={shop.row} ref={row} >
{
firstRow.map((row,i)=> i % 2 ==0 ? <img key={row.link} className={shop.circle} src={row.link} alt='row'/> : <img key={row.link}  className={shop.elipse} src={row.link} alt='row'/>
)
  
}
 </div>
 <div className={`${shop.row1}`} ref={row1} >
{
secRow.map((row,i)=> i % 2 ==0 ? <img key={row.link}  className={shop.circle} src={row.link} alt='row1'/> : <img key={row.link}  className={shop.elipse} src={row.link} alt='row1'/>
)
  
}
 </div>
 <div className={shop.row2} ref={row2} >
{
firstRow.map((row,i)=> i % 2 ==0 ? <img key={row.link}  className={shop.circle} src={row.link} alt='row3'/> : <img key={row.link}  className={shop.elipse} src={row.link} alt='row3'/>
)
  
}
 </div>
 
 </div>
 <div className="titleshop" style={{position:"absolute",zIndex:50,color:"white",fontSize:"5vw",top:"0%",width:"100vw",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
  <h1>Shop</h1>
 </div>
 <div className={shop.listing}>
<div className={shop.categories}>
  <h1>Categories</h1>
  <div className="thelist" style={{color:"gray",display:"flex",flexDirection:"column",gap:20}}> 
  {clickedItems.map((item, i) => (
  <div className="check" style={{display:"flex",width:"15vw",justifyContent:"space-between",alignItems:"center"}}>
  <h4
  key={item.item}
    style={
      !item.clicked
        ? { fontWeight: 400, cursor: "pointer" }
        : { fontWeight: 400, cursor: "pointer", color: "orange" }
    }
    onClick={e =>
      setClicked((prevState) => {
        const updatedItems = [...prevState]; 
        updatedItems.forEach((item,j)=> j!==i ? item.clicked=false : null)
        updatedItems[i] = {
          ...updatedItems[i],
          clicked: !updatedItems[i].clicked,
        };
        
        return updatedItems; 
      })
    }
  >
    {item.item}
  </h4>
 {item.clicked && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.605 15.082"><path id="Path_406" data-name="Path 406" d="M-20499.1,665.107l5.592,5.535,10.357-10.254" transform="translate(20501.93 -657.56)" fill="none" stroke="#ff6c4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg>}
</div>))}
  </div>
  <h1 style={{marginTop:"20px",marginBottom:"10px"}}>Filter By
</h1>
<h3>Price</h3>
<fieldset className="filter-price">
   
   <div className="price-field">
     <input type="range"  min="100" max="500" defaultValue={100}  id="lower"/>
     <input type="range" min="100" max="500" defaultValue={500} id="upper"/>
   </div>
    <div className="price-wrap">
     <div className="price-wrap-1">
       <input id="one"/>
       <label htmlFor="one">DT</label>
     </div>
     <div className="price-wrap_line">-</div>
     <div className="price-wrap-2">
       <input id="two"/>
       <label htmlFor="two">DT</label>
     </div>
   </div>
 </fieldset> 
<h3>Color
</h3>
<div className="thelist" style={{color:"gray",display:"flex",flexDirection:"column",gap:20}}> 
{showmore ? color.map((color,i)=> 
<div className="check" style={{display:"flex",width:"15vw",justifyContent:"space-between",alignItems:"center"}}>
  <h4
  key={color.item}
    style={
      !color.clicked
        ? { fontWeight: 400, cursor: "pointer" }
        : { fontWeight: 400, cursor: "pointer", color: "orange" }
    }
    onClick={e =>
      setColor((prevState) => {
        const updatedItems = [...prevState]; 
        updatedItems.forEach((item,j)=> j!==i ? item.clicked=false : null)
        updatedItems[i] = {
          ...updatedItems[i],
          clicked: !updatedItems[i].clicked,
        };
        
        return updatedItems; 
      })
    }
  >
    {color.item}
  </h4>
 {color.clicked && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.605 15.082"><path id="Path_406" data-name="Path 406" d="M-20499.1,665.107l5.592,5.535,10.357-10.254" transform="translate(20501.93 -657.56)" fill="none" stroke="#ff6c4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg>}
</div> 

)
:
color.filter((item,i)=>i<4 && item).map((color,i)=>(<div className="check" style={{display:"flex",width:"15vw",justifyContent:"space-between",alignItems:"center"}}>
<h4
key={color.item}
  style={
    !color.clicked
      ? { fontWeight: 400, cursor: "pointer" }
      : { fontWeight: 400, cursor: "pointer", color: "orange" }
  }
  onClick={e =>
    setColor((prevState) => {
      const updatedItems = [...prevState]; 
      updatedItems.forEach((item,j)=> j!==i ? item.clicked=false : null)
      updatedItems[i] = {
        ...updatedItems[i],
        clicked: !updatedItems[i].clicked,
      };
      
      return updatedItems; 
    })
  }
>
  {color.item}
</h4>
{color.clicked && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.605 15.082"><path id="Path_406" data-name="Path 406" d="M-20499.1,665.107l5.592,5.535,10.357-10.254" transform="translate(20501.93 -657.56)" fill="none" stroke="#ff6c4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg>}
</div>))

}
</div>
<h4 onClick={e=>setshow(c=>!c)} style={{cursor:"pointer"}}>Show More</h4>
</div>
<div className={shop.listitems} id="listing">
<div className={shop.oneitem} >
  <div className={shop.iteminfo}>
    <h1>Adroisaa</h1>
    <p>1000</p>
  </div>
  <div className={shop.button}>
    <button className="addtocard">Add to card</button>
  </div>
  
</div>
<div className={shop.oneitem} >
  <div className={shop.iteminfo}>
    <h1>Adroisaa</h1>
    <p>1000</p>
  </div>
  <div className={shop.button}>
    <button className="addtocard">Add to card</button>
  </div>
  
</div><div className={shop.oneitem} >
  <div className={shop.iteminfo}>
    <h1>Adroisaa</h1>
    <p>1000</p>
  </div>
  <div className={shop.button}>
    <button className="addtocard">Add to card</button>
  </div>
  
</div>
</div>
</div>
<style>{
`
svg {
  width: .8rem;
  height: .8rem;
  display: flex;
  align-items: center;
  margin-bottom: .05rem;}

.filter-price {
  width: 220px;
  border: 0;
  padding: 0;
  margin: 0; 
}

.price-title {
  position: relative;
  color: #fff;
  font-size: 14px;
  line-height: 1.2em;
  font-weight: 400;
}

.price-field {
  position: relative;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-top: 15px;
  border-radius: 3px;

}

.price-field input[type=range] {
    position: absolute;
}


.price-field input[type=range] {
  width: 188px;
  height: 5px; 
  border: 0;
  outline: 0;
  box-sizing: border-box;
  border-radius: 5px;
  pointer-events: none;
  -webkit-appearance: none;
  background:#fff
}

.price-field input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    
}

.price-field input[type=range]:active,
.price-field input[type=range]:focus {
  outline: 0;
}

.price-field input[type=range]::-ms-track {
  width: 188px;
  height: 2px; 
  border: 0;
  outline: 0;
  box-sizing: border-box;
  border-radius: 5px;
  pointer-events: none;
  background:#fff;
  border-color: transparent;
  color: transparent;
  border-radius: 5px;
}

/* Style toddler input range */

.price-field input[type=range]::-webkit-slider-thumb { 
  /* WebKit/Blink */
    position: relative;
    -webkit-appearance: none;
    margin: 0;
    border: 0;
    outline: 0;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    margin-top: -10px;
    background:#e73c37;
    cursor: pointer;
    cursor: pointer;
    pointer-events: all;
    z-index: 100;
}

.price-field input[type=range]::-moz-range-thumb { 
  /* Firefox */
  position: relative;
  appearance: none;
  margin: 0;
  border: 0;
  outline: 0;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-top: -5px;
  background:#e73c37;
  cursor: pointer;
  cursor: pointer;
  pointer-events: all;
  z-index: 100;
}

.price-field input[type=range]::-ms-thumb  { 
  /* IE */
  position: relative;
  appearance: none;
  margin: 0;
  border: 0;
  outline: 0;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-top: -5px;
  background:#e73c37;
  cursor: pointer;
  cursor: pointer;
  pointer-events: all;
  z-index: 100;
}

/* Style track input range */

.price-field input[type=range]::-webkit-slider-runnable-track { 
  /* WebKit/Blink */
  width: 188px;
  height: 2px;
  cursor: pointer;
  background:#fff;
  border-radius: 5px;
}

.price-field input[type=range]::-moz-range-track { 
  /* Firefox */
  width: 188px;
  height: 2px;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
}

.price-field input[type=range]::-ms-track { 
  /* IE */
  width: 188px;
  height: 2px;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
}


.price-wrap {
  display: flex;
  color: #fff;
  font-size: 14px;
justify-content:space-between;
  line-height: 1.2em;
  font-weight: 400;
  margin-bottom: 7px;
  width:90%;
}

.price-wrap-1, 
.price-wrap-2 {
  display: flex;
}

.price-title {
  margin-right: 5px;
  backgrund: #d58e32;
}

.price-wrap_line {
}

.price-wrap #one, 
.price-wrap #two {
  width: 30px;
  margin: 0;
  padding: 0;
  margin-right: 2px;
  background:  0;
  border: 0;
  outline: 0;
  color: #fff;
  font-size: 14px;
  line-height: 1.2em;
  font-weight: 400;
}

.price-wrap label {
}

/* Style for active state input */
    
.price-field input[type=range]:hover::-webkit-slider-thumb {
  box-shadow: 0 0 0 0.5px #fff;
  transition-duration: 0.3s;
}

.price-field input[type=range]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 0.5px #fff;
  transition-duration: 0.3s;
}`
}</style>
 </section>
);
}

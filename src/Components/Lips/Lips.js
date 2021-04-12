import {useState, useEffect} from "react";
import "./Lips.css"


export default function Lips(){
    const [lipsData, setlipsData] = useState([]);
    const [hover, setHover] = useState(false);
    const getlipsData = async () => {
        try {
            const res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior&product_type=lipstick`);
            const data = await res.json();
            console.log(data)
            setlipsData(data)
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(()=> {
        getlipsData();
    }, []);



    return (<div className="lipsDiv">
        <h1>hello lips</h1>
        <section>
        {lipsData.map((lipsData, i) => {
            return (<div className="LipsMapDiv">
                <h2 key={i}>{lipsData.name}</h2>
                <img 
                    src={ hover? "https://cdn.shopify.com/s/files/1/2220/7229/products/SemiGloss_BELLINI670x1005_670x1005.jpg?v=1610497222" : lipsData.image_link} 
                    width="200px"
                    
                    onMouseOver= {() => setHover(true)}
                    onMouseOut= {() => setHover(false)}
                />
                {/* <img className="hovertopimag" src="https://cdn.shopify.com/s/files/1/2220/7229/products/PDP-SAD-DualEnded-Liner-black-swatch_600x.jpg?v=1613695846"/> */}
                <h3 >color: {lipsData.product_colors[0] ? lipsData.product_colors[0].colour_name: "No color"}</h3>
                <h4>price: ${lipsData.price}</h4>
                <p>description: {lipsData.description}</p>
                </div>
            
            
            
                )
        })}
        </section>

    </div>)


    


}


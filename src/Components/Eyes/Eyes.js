
import {useState, useEffect} from "react";
import "./Eyes.css";


export default function Eyes(){
    const [eyesData, setEyesData] = useState([]);
    const [hover, setHover] = useState(false);
    const getEyesData = async () => {
        try {
            const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique&product_type=eyeliner`);
            const data = await res.json();
            console.log(data)
            setEyesData(data)
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(()=> {
        getEyesData();
    }, []);



    return (<div className="eyesDiv">
        <h1>hello eyes</h1>
        <section>
        {eyesData.map((eyesData, i) => {
            return (<div className="EyesMapDiv">
                <h2 key={i}>{eyesData.name}</h2>
                <img 
                    src={ hover? "https://cdn.shopify.com/s/files/1/2220/7229/products/PDP-SAD-DualEnded-Liner-black-swatch_600x.jpg?v=1613695846" : eyesData.image_link} 
                    width="200px"
                    
                    onMouseOver= {() => setHover(true)}
                    onMouseOut= {() => setHover(false)}
                />
                {/* <img className="hovertopimag" src="https://cdn.shopify.com/s/files/1/2220/7229/products/PDP-SAD-DualEnded-Liner-black-swatch_600x.jpg?v=1613695846"/> */}
                <h3>color: {eyesData.product_colors[0].colour_name}</h3>
                <h4>price: ${eyesData.price}</h4>
                <p>description: {eyesData.description}</p>
                </div>
            
            
            
                )
        })}
        </section>

    </div>)


    


}



import {useState, useEffect} from "react"
import "./Face.css"


export default function Face(){
    const [faceData, setFaceData] = useState([]);
    const [hover, setHover] = useState(false);
    const getFaceData = async () => {
        try {
            const res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior&product_type=foundation`);
            const data = await res.json();
            console.log(data)
            setFaceData(data)
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(()=> {
        getFaceData();
    }, []);



    return (<div className="faceDiv">
        <h1>hello face</h1>
        <section>
        {faceData.map((faceData, i) => {
            return (<div className="FaceMapDiv">
                <h2 key={i}>{faceData.name}</h2>
                <img 
                    src={ hover? "https://cdn.shopify.com/s/files/1/2220/7229/products/670x1005_Stila.com_200921-Stila-1-Swatch-343_600x.jpg?v=1610497360" : faceData.image_link} 
                    width="200px"
                    
                    onMouseOver= {() => setHover(true)}
                    onMouseOut= {() => setHover(false)}
                />
                {/* <img className="hovertopimag" src="https://cdn.shopify.com/s/files/1/2220/7229/products/PDP-SAD-DualEnded-Liner-black-swatch_600x.jpg?v=1613695846"/> */}
                <h3>color: {faceData.product_colors[0].colour_name}</h3>
                <h4>price: ${faceData.price}</h4>
                <p>description: {faceData.description}</p>
                </div>
            
            
            
                )
        })}
        </section>

    </div>)


    


}


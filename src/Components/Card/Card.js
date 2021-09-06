import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import {Card , Button} from 'react-bootstrap';

const CardProduct = () => {
  const [products, setProducts]=useState([]);

  const getProducts = async()=>{
    try {
     const response = await fetch('http://localhost:7500/api/v1/products');
      const products = await response.json();
      console.log(products)
      setProducts(products.data)//se puso results por q es una api distita al de placeholder
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( ()=> {
    getProducts();
  } , [])

  return ( 
       products.map(product=>(
         <Link to={`/products/${product.id}`} key={product.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`http://localhost:7500/${product.imageCover}`} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      Pantalon
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
         </Link>
       ))
  );
}
export default CardProduct
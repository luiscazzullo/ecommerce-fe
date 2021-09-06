import { useParams ,useHistory} from "react-router-dom";
import { useState , useEffect , } from "react";

const ProductDescript = () => {
//const paramas = useParams() ------> se usa destructori, quedancon como esta en la linea de abajo
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const history = useHistory();
  
  const getProductById = async(id) => {
    try {
      const response = await fetch(`http://localhost:7500/api/v1/products/${id}`);
      const product = await response.json();
      setProduct(product);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
   getProductById (id);
  },[])

  return ( 
    <>
     <button className='btn btn-warning' onClick={()=>history.goBack()}>Volver</button>
    <h1>{product.name}</h1>
    <img src={product.image}/>
     </>
  );
}
export default ProductDescript
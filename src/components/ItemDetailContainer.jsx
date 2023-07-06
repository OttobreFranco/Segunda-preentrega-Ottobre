import { useState , useEffect } from "react";
import Container from "react-bootstrap/Container";


import data from '../data/products.json'
import { ItemDetail } from '../components/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = (props) => {

  const { id } = useParams()
  
  const [product, setProduct] = useState([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        },2000)
    })
        promesa.then(result => {
         
            setProduct(result.find(item => item.id === id))
         
        })
  }, [id])

  console.log(product)

  
    return (
    <Container className="mt-4">
      <h1>Detalle</h1>
      {product === undefined ? (
      <div>Loading...</div>
      ) : (
      
     <ItemDetail car={product}/>
        
      )}
    </Container>
  );
};

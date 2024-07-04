import React,{ useState,useContext } from 'react'
import { ShopContext} from '../../context/shop-context';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"





export const CheckOut = () => {
    const [show, setShow] = useState(false);
    const { getTotalCardAmount } = useContext(ShopContext);
    const totalAmount = getTotalCardAmount()
    const navigate = useNavigate()

    

        return (
            <>
            
             <Alert show={show} variant="success" role="alert"   >
              <Alert.Heading>Compra efectuada com sucesso!</Alert.Heading>
              <p>
                A sua compra foi efectuada com sucesso! Obrigado por comprar com a empresa X.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => {setShow(false)}} variant="outline-success">
                  Close me
                </Button>
              </div>
            </Alert>
            
      
            {!show && <button onClick={()=>{
                navigate('/')
                
    
                }}>Continue Shopping </button>}
            {!show && <Button onClick={() =>setShow(true)} >Finalizar {totalAmount}€</Button>}
          </>
        );
    }

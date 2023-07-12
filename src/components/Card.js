import React ,{useEffect , useState , useRef} from 'react'
import { useDispatchCart , useCart } from './ContextReducer';

export default function Card(props) {
  
  const priceRef = useRef();
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItems._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItems._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
    await dispatch({
      type: "ADD_TO_CART",
        id: props.foodItems._id,
        name: props.foodItems.name,
        price: finalPrice,
        qty: qty,
        size: size,
    });
    return
  }
  return
  }
  await dispatch({
    type: "ADD_TO_CART",
      id: props.foodItems._id,
      name: props.foodItems.name,
      price: finalPrice,
      qty: qty,
      size: size,
  });
}

  useEffect(() => {
    setSize(priceRef.current.value);
  }, [])


  const finalPrice = (size === "") ? props.foodItems.price * qty : options[size] * qty;

  return (
    <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "500px" }}>
        <img className="card-img-top" src={props.foodItems.img} height="200px" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.foodItems.name}</h5>
          <p className="card-text">{props.foodItems.description}</p>
          <div className="container w-100">
            <select name="" id="" className="className m-2 h-100 bg-primary rounded" onChange={(e)=>setQty(e.target.value)}>
              {
              Array.from({ length: 6 }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <select name="" id="" className="className m-2 h-100  bg-primary rounded" ref ={priceRef} onChange={(e)=>setSize(e.target.value)}>
              {priceOptions.map((data)=>{
                return(
                  <option key={data} value={data}>{data}</option>
                )
                
              })}

            </select>
            <div className="d-inline h-100 fs-5">Rs.{finalPrice}/-</div>
            <hr />
            <button className="btn btn-primary w-100 ms-2" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>

    </div>
  )
}

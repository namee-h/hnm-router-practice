import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail =()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div className='card-effect' onClick={showDetail}>
      <img className='img-area' src={item?.img}/>
      <div>{item?.choice === true ? "Conscious choice":" "}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신제품":" "}</div>
    </div>
  )
}

export default ProductCard

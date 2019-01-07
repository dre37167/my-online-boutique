import React from 'react';

export default function ProductListItem(props) {
  return <div>
  <h3>{ props.name } </h3>
  <img
    height={100}
    title={ props.products.name }
    src={`/products/${props.products.image}`}
    />
  <div>{ props.products.description }</div>
    <div>${ props.products.price }</div>
    <div>
      <button> Add to Cart </button>
    </div>
  </div>
}

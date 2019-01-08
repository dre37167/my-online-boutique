import React from 'react';
import ProductListItem from '.././product-listing/product-list-item'

export default function ProductListing(props){
  return <div className="product-listing">
    {
      props.products.map( product =>
        <ProductListItem product={product} />)

    }
  </div>
}

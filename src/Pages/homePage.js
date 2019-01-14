import React from 'react';

import ProductListing from '../Features/product-listing';
import data from '../data/products.json'

export default function HomePage(props){
  return <div>
  <h2 className="welcome">Welcome to Tidre's online boutique</h2>
  <ProductListing products={data.products} />
  </div>
}

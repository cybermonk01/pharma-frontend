import React from 'react';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      category: 'Sanitizers',
      name: 'Axiom Karela Jamun Juice',
      rating: 3.2,
      totalRatings: 349,
      mrp: 300,
      discount: 6,
      price: 97.00,
      imageUrl: 'img/products/shop_img01.jpg',
    },
    // Add more product entries as needed
  ];

  return (
    <div className="shop-area shop-inner-page pt-100 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          {/* ... */}
          <div className="col-9">
            <div className="shop-wrap">
              <h4 className="title">Shop</h4>
              <div className="shop-page-meta mb-30">
                {/* Shop meta content */}
              </div>
              <div className="row justify-content-center">
                {products.map(product => (
                  <div key={product.id} className="col">
                    <div className="shop-item mb-45">
                      <div className="shop-thumb">
                        <a href="shop-details.html"><img src={product.imageUrl} alt="" /></a>
                      </div>
                      <div className="shop-content">
                        <span className="cat">{product.category}</span>
                        <h5 className="title"><a href="shop-details.html">{product.name}</a></h5>
                        <div className="shop-item-rating">
                          <span className="avg-rating">{product.rating} <i className="far fa-star"></i></span>
                          <span className="total-rating">{product.totalRatings} Ratings</span>
                        </div>
                        <p className="shop-discount">MRP <del>${product.mrp}</del> <span className="discount-off">{product.discount}% OFF</span></p>
                        <div className="shop-bottom">
                          <ul>
                            <li className="price">${product.price}</li>
                            <li className="add"><a href="shop-details.html">ADD +</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="shop-page-meta">
                {/* Bottom shop meta content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

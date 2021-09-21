import { render } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
import  {Link} from "react-router-dom"

function ProductComponent() {
  const products = useSelector((state) => state.allproducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      
      <div className="ui four wide column" key={id}>
        <Link to={`product/${id}`}>
        
        <div className="ui link cards"  style={{ backgroundColor: "yellow"}}>
          <div className="card" style={{ backgroundColor: "yellow", height:"480px" }}>
            <div className="image">
              <img src={image} alt={title} style={{height:"290px"}} />
            </div>

            <div className="content">
              <div className="header" style={{ color: "red"}}>{title}</div>
              <div className="meta price"> ${price}</div>
              <div className="meta"> {category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
     
      
    );
  });

  return <>{renderList} </>;
}

export default ProductComponent;

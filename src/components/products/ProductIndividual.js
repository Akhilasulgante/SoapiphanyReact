import React, { Component } from "react";
import "../../styles/Products.css";

class ProductIndividual extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       cart: [],
  //     };
  //   }

  addToCart = (event) => {
    console.log("button was clicked", event.target.id);
    //   this.setState(cart:[...this.state.cart, item];
    //   });
    alert("added");
    this.props.addItemToCart(event.target.id);
  };

  render() {
    const { soapObj } = this.props;
    const { id, soapName, soapImgUrl, soapPrice, SoapDes } = soapObj;
    return (
      <div className="soap-list">
        <div>
          <img className="product-img" src={soapImgUrl} alt="not loading" />
        </div>

        <div>
          <p className="soap-name">{soapName}</p>
          <p className="soap-des">{SoapDes}</p>
          <p>{soapPrice}</p>
        </div>
        <div className="soap-cart-btn">
          <button className="soap-cart-text" onClick={this.addToCart} id={id}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductIndividual;

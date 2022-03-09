import { Component } from "react";

class Cartitems extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {};
  render() {
    const { cartObj } = this.props;
    const { id, soapName, soapImgUrl, soapPrice, SoapDes } = cartObj;
    return (
      //cart-list?
      <div className="soap-list">
        <div>
          <img className="product-img" src={soapImgUrl} alt="not loading" />
        </div>

        <div>
          <p className="soap-name">{soapName}</p>
          <p className="soap-des">{SoapDes}</p>
          <h3>{soapPrice}</h3>
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

export default Cartitems;

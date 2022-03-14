import React, { Component } from "react";
import "../../styles/Products.css";

/**
 * [Class - Cartitems, a view component to display items in the cart]
 */
class Cartitems extends Component {
  /**
   * This Consturctor holds state properties, isOpen state of this class
   */
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  /**
   * This method opens the popup window if it is in the closed state
   *
   * @return  {void}
   */
  togglePopup() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { soapPrice, soapImgUrl, soapName } = this.props.cartObj;
    return (
      <div className="cart-details">
        <div>
          <img src={soapImgUrl} alt="now" className="cart-img" />
        </div>

        <div>
          <p>{soapPrice}</p>
          <p>{soapName}</p>
        </div>
      </div>
    );
  }
}

export default Cartitems;

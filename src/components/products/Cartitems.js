import React, { Component } from "react";
import "../../styles/Products.css";

class Cartitems extends Component {
  // const [isOpen, setIsOpen] = useState(false);

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { soapPrice, soapImgUrl, SoapDes } = this.props.cartObj;
    return (
      <div className="cart-details">
        <div>
          <img src={soapImgUrl} alt="now" className="cart-img" />
        </div>

        <div>
          <p>{soapPrice}</p>
          <p>{SoapDes}</p>
        </div>
      </div>
    );
  }
}

export default Cartitems;

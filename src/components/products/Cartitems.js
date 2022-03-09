import React, { Component } from "react";
import Popup from "../../Popup";

// class Cartitems extends Component {
//   //   constructor(props) {
//   //     super(props);
//   //   }
//   state = {};
//   render() {
//     const { cartObj } = this.props;
//     const { id, soapName, soapImgUrl, soapPrice, SoapDes } = cartObj;
//     return (
//       //cart-list?
//       <div className="soap-list">
//         <div>
//           <img className="product-img" src={soapImgUrl} alt="not loading" />
//         </div>

//         <div>
//           <p className="soap-name">{soapName}</p>
//           <p className="soap-des">{SoapDes}</p>
//           <h3>{soapPrice}</h3>
//         </div>
//         <div className="soap-cart-btn">
//           <button className="soap-cart-text" onClick={this.addToCart} id={id}>
//             Add to cart
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Cartitems;

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
    return (
      <div>
        <input
          type="button"
          value="Click to Open Popup"
          onClick={() => this.togglePopup()}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {this.state.isOpen && (
          <Popup
            content={
              <>
                <b>Design your Popup</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button>Test button</button>
              </>
            }
            handleClose={() => this.togglePopup()}
          />
        )}
      </div>
    );
  }
}

export default Cartitems;

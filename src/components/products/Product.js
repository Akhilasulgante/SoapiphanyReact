import React, { Component } from "react";
import "../../styles/Products.css";
import Cartitems from "./Cartitems";
import ProductIndividual from "./ProductIndividual";
import { Link } from "react-router-dom";
import Popup from "../../Popup";
import "../../../src/Style.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sopaData: [
        {
          id: "0",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Goat milk Gradient soap",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits, will it go furthur by writng some crap",
        },

        {
          id: "1",
          soapPrice: "$12.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Honey soap",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },

        {
          id: "2",
          soapPrice: "$10.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Cinnamon roll soaps with coffee exfoliation",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
        {
          id: "3",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Soap A",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
        {
          id: "4",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Soap A",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
        {
          id: "5",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Soap A",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
        {
          id: "6",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Soap A",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
        {
          id: "7",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Soap A",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
        {
          id: "8",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Soap A",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
        {
          id: "9",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Soap A",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
        {
          id: "10",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Soap A",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
        {
          id: "11",
          soapPrice: "$100.99",
          soapImgUrl:
            "https://images.squarespace-cdn.com/content/v1/57c62708ff7c50afee77ffb0/1596721995990-KAOJN5TDWQ8ODBWVYEI5/IMG_2047.jpg?format=1500w",
          soapName: "Soap A",
          SoapDes:
            "with goodness of ash clay, this soap contains skin softening benefits",
        },
      ],
      cartData: [],
      isOpen: false,
    };
    this.addItemToCart = this.addItemToCart.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  addItemToCart(val) {
    // let curentCartData = this.state.cartData;
    // curentCartData.push(this.state.sopaData[val]);
    let arr = [...this.state.cartData, this.state.sopaData[val]];
    this.setState({
      cartData: arr,
    });

    console.log("my cart is", arr);
  }

  render() {
    return (
      <React.Fragment>
        {/* <button>cart</button>

        <Link to={<Cartitems />}>Cart</Link> */}

        <button onClick={() => this.togglePopup()}>Cart</button>
        {this.state.isOpen && (
          <Popup
            content={
              <>
                {/* <b>Design your Popup</b>
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
                <button>Test button</button> */}

                {this.state.cartData.length > 0 ? (
                  this.state.cartData.map((e) => {
                    return <Cartitems cartObj={e} />;
                  })
                ) : (
                  <h1 className="empty-cart">
                    The cart is empty, please shop with us
                  </h1>
                )}
              </>
            }
            handleClose={() => this.togglePopup()}
          />
        )}
        <div>
          {this.state.sopaData.map((e) => {
            return (
              <ProductIndividual
                soapObj={e}
                addItemToCart={this.addItemToCart}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Product;

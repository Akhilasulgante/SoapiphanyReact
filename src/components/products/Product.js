import React, { Component } from "react";
import "../../styles/Products.css";
import Cartitems from "./Cartitems";
import ProductIndividual from "./ProductIndividual";
import { Link } from "react-router-dom";

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
    };
    this.addItemToCart = this.addItemToCart.bind(this);
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

        <button
          onclick={this.state.cartData.map((e) => {
            console.log("Clicking?");
            return <Cartitems arr={e} />;
          })}
        >
          Cart
        </button>
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

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
      soapData: [
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
      sObj: {},
      // sColor: "",
      // sShapes: "",
    };
    this.addItemToCart = this.addItemToCart.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateCost = this.calculateCost.bind(this);
  }

  togglePopup() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  addItemToCart(val) {
    // let curentCartData = this.state.cartData;
    // curentCartData.push(this.state.soapData[val]);
    let arr = [...this.state.cartData, this.state.soapData[val]];
    this.setState({
      cartData: arr,
    });

    console.log("my cart is", arr);
  }

  handleChange(e, key) {
    // console.log("e is", e);
    this.setState({
      sObj: {
        ...this.state.sObj,
        [key]: e.target.value,
      },
    });
  }

  hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : [];
  }

  calculateCost(sobj) {
    // do calc here.
    if (Object.keys(sobj).length > 0) {
      let color = parseInt(sobj.sColor, 16);

      let rgbObj = [];
      rgbObj = this.hexToRgb(sobj?.sColor || "");
      console.log("rgbobj", rgbObj);

      let colorSum = 0;
      (rgbObj || []).forEach((elem) => {
        colorSum += elem;
      });

      // return colorSum / 100;
      // if (().toLowerCase() === "square") {
      //   return "$99.99";
      // }
      let priceFromShape = 0;
      let shapPriceObj = {
        square: 4.99,
        rectangle: 6.99,
        circle: 5.99,
        "": 0,
      };

      console.log("sobj", sobj);
      priceFromShape = shapPriceObj[sobj?.sShapes || ""];
      console.log("shap price", priceFromShape);
      return `$${priceFromShape + Math.round(colorSum / 100)}`;
    }
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
          <form>
            <input
              type="color"
              name="sColor"
              value={this.state.sColor}
              onChange={(e) => this.handleChange(e, "sColor")}
            />
            <select
              name="shapes"
              id="shapes"
              value={this.state.sShapes}
              onChange={(e) => this.handleChange(e, "sShapes")}
            >
              <option value="">Please Select an option</option>
              <option value="circle">circle</option>
              <option value="rectangle">Rectangle</option>
              <option value="square">square</option>
            </select>

            <label>{this.calculateCost(this.state.sObj)}</label>
          </form>
        </div>
        <div>
          {this.state.soapData.map((e) => {
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

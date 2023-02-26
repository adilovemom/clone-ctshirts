import React from "react";
import "./home.css";
import MySlider from "./MySlider";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Home = () => {


  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/product")
  }

  return (
    <div className="home-container">
      <div className="page1">
        <img
          src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwc3675c04/merchAssets/SS23/Homepage/hero/febshirts-hero-tablet.jpg"
          alt=""
        />
      </div>
      <div className="page1_1">
        <p className="page-p1">It All Starts with a Shirt</p>
        <p className="page-p2">20% OFF SHIRTS</p>
        <p className="page-p3">USE CODE: SHIRTS20</p>
        <p className="page-p4">Offer Ends Today!</p>
        <div className="page1_2">
          <p className="page-button_0" onClick={goToProduct}>SHOP NEW SHIRT</p>
          <p className="page-button_2">SHOP ALL SHIRTS</p>
        </div>
      </div>

      <div className="page2">
        <MySlider />
      </div>

      <div className="page3">
        <div className="page3_1">
          <img
            className="page3-img"
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw5235ce5e/merchAssets/SS23/Homepage/hp/henley-hp2-tablet.jpg"
            alt=""
          />
        </div>
        <div className="page3_2">
          <p className="page3_p1">NEW</p>
          <p className="page3_p2">
            Meet The Henley Weave, <br /> our shirt of the season.
          </p>
          <p className="page3_p3">
            You won’t find this dobby weave anywhere else. The cutaway collar
            has a modern feel <br /> for formal and relaxed looks, and natural
            stretch from 100% cotton keeps things comfy.{" "}
          </p>
          <p className="page3_p4">
            This non-iron hero comes in 10 designs and 3 fits. <br /> Pick from
            checks, fresh pastels and classic blues
          </p>
          <button className="page3_button">SHOP THE COLLECTION</button>
        </div>
      </div>

      <div className="page4">
        <div className="page4_1">
          <div className="page4_1-1">
            <div>
              <img
                className="page4_img"
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw0718d61d/merchAssets/SS23/Homepage/wide-banner/tib-rfu-ss23-022.jpg"
                alt=""
              />
            </div>
            <div>
              <h3>Six Nations, One Team</h3>
              <p>
                Show your support in fresh, spring-ready pieces, <br />
                and stay warm with our new easy-to-layer knitwear wherever
                you’re watching the game.
              </p>
              <button className="page4-button">Discover more</button>
            </div>
          </div>
          <div className="page4_1-2">
            <div>
              <img
                className="page4_img"
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw63cc6f39/merchAssets/SS23/Homepage/wide-banner/hp1-editorial-icons.jpg"
                alt=""
              />
            </div>
            <div>
              <h3>Tyrwhitt Icons </h3>
              <p>
                The collection that every man should own.
                <br />
                Timeless, versatile pieces designed to slot into your wardrobe
                with ease.
              </p>
              <button className="page4-button">Discover more</button>
            </div>
          </div>
        </div>
        <div className="page4_2">
          <div className="page4_2-1">
            <div>
              <img
                className="page4_img"
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwa8ce8c59/merchAssets/SS23/Homepage/wide-banner/hp1-editorial-03-desktop.jpg"
                alt=""
              />
            </div>
            <div>
              <h3>Scrum Dine With Me</h3>
              <p>
                Our founder Nick Wheeler OBE swaps shirts for sashimi,
                <br />
                with the help of Rugby Legend Matt Dawson.
              </p>
              <button className="page4-button">Discover more</button>
            </div>
          </div>
          <div className="page4_2-2">
            <div>
              <img
                className="page4_img"
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwaaf522b0/merchAssets/SS23/Homepage/wide-banner/hp1-editorial-04-desktop.jpg"
                alt=""
              />
            </div>
            <div>
              <h3>A Tailored Life</h3>
              <p>
                Meet unique leaders and explore style hints and tips through{" "}
                <br />
                Nick Wheeler's interviews in A Tailored Life.
              </p>
              <button className="page4-button">Discover more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="page5">
        <div className="page5-div1">
          <div className="page5-div1_2">
            <img
              className="page5_img"
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw97c612c3/images/icons-large/express-delivery.svg"
              alt=""
            />
          </div>
          <div>
            <h5>WORLDWIDE DELIVERY</h5>
            <p>
              Tracked delivery to over 200 <br /> countries
            </p>
          </div>
        </div>
        <div className="page5-div1">
          <div>
            <img
              className="page5_img"
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw5475cc5d/images/icons-large/guarantee-three.svg"
              alt=""
            />
          </div>
          <div>
            <h5>EASY RETURNS</h5>
            <p>
              Easy returns up to 3 months after <br /> receipt
            </p>
          </div>
        </div>
        <div className="page5-div1">
          <div>
            <img
              className="page5_img"
              style={{ marginTop: "40px" }}
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw7468af7c/images/icons-large/feefo_logo.svg"
              alt=""
            />
          </div>
          <div>
            <h5 style={{ marginTop: "40px" }}>AWARD WINNING SERVICE</h5>
            <p>
              4.7/5 Customer exprience Feefo <br /> rating
            </p>
          </div>
        </div>
        <div className="page5-div1">
          <div>
            <img
              className="page5_img"
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw97c612c3/images/icons-large/express-delivery.svg"
              alt=""
            />
          </div>
          <div>
            <h5>WORLDWIDE DELIVERY</h5>
            <p>
              Tracked delivery to over 200 <br /> countries
            </p>
          </div>
        </div>
      </div>

      <div className="page6">
        <div className="page6_1">
          <img
            className="page6_img"
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw583d0898/merchAssets/AW22/Homepage/wide-banner/wind-hp5-tablet.jpg"
            alt=""
          />
        </div>
        <div className="page6_2">
          <h1>Earth, Wind and Power</h1>
          <p>
            As a carbon neutral business, we support climate positive projects.
            With the help of <br /> Ecologi, we’re funding wind power farms in
            Mexico and Honduras to create renewable <br /> energy.
          </p>
          <button>FIND OUT MORE</button>
        </div>
      </div>

      <div className="page7">
        <p>We will keep you posted on new products and greate offers</p>
        <input type="text" placeholder="Email address"/>
        <button><BsChevronRight /></button>
      </div>
    </div>
  );
};

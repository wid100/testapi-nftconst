import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import TopProject from "./inner/TopProject";
import DemoForm from "./inner/demoform";
import Newsletter from "./inner/Newsletter";
import Head from "next/head";
import Review from "./inner/Review";
import Link from "next/link";
import OfferA from "./inner/OfferA";
import Featured from "./inner/Featured";
import PriceRangeSlider from "./inner/PriceRange";
import HowItWork from "./inner/HowItWork";

import LetsTalk from "./inner/LetsTalk";
import ContactBtn from "./inner/ContactBtn";

function HiCoin() {
  const [service, setService] = useState(1);

  const data = {
    rows: [
      {
        title: "What does it mean to have a non-fungible token?",
        content: `Non-fungible tokens serve as exclusive assets in a decentralized system.`,
      },
      {
        title:
          "What is the difference between a fungible token and a non-fungible token? ",
        content:
          "Fungible tokens are exchangeable since their values are constant. on the other hand, non-fungible tokens cannot be exchanged because of their distinct standards and requirements. ",
      },
      {
        title: "In cryptography, what is an NFT?",
        content: `NFTs are the digitalization of rare physical assets like artwork, sculptures, and other collectibles in the cryptosphere. `,
      },
      {
        title: "What is the cost of creating an NFT? ",
        content: `A NFT's cost depends on its assets, platform wealth, and gas fee. `,
      },
      {
        title:
          "What are the top five services that an NFT development company should provide? ",
        content: `Services for NFT development include NFT Marketplace, NFT Metaverse platform, NFT Studio, and Defi developments.`,
      },
      {
        title: "What is the best way to invest in NFTs? ",
        content: `Investors in NFTs can be entrepreneurs or collectors, and both will generate long-term returns. You can invest in an NFT from a collection based on a topic that interests you and watch for it to gain traction. You can also take advantage of NFTs' in the interim. `,
      },
      {
        title: "What is the best way to hire NFT developers?  ",
        content: `You can hire developers for NFT development solutions with the help of qualified outsourcing services like those offered by NFT CONSTRUCTER. We can assist you in developing the software for your project using skilled developers who comprehend your business and technical requirements. `,
      },
      {
        title: "What are the Steps in NFT Development?  ",
        content: `The following processes are involved in the creation of an NFT: ideation, documentation, prototyping, designing, development, integrating blockchains and smart contracts, testing, and deployment. Post-launch maintenance and promotion are necessary for a profitable NFT venture.  `,
      },
      {
        title:
          "What are The Benefits of Getting NFT Development Services from NFT CONSTRUCTER?  ",
        content: `Take advantage of NFT CONSTRUCTER's experience since it offers NFT development services in the USA, UK, China, Canada, Germany, and Australia. We continuously expanding our operations into new markets to support cutting-edge NFT projects. `,
      },
      {
        title: "Our NFT Development Services include what?",
        content: `As a highly experienced provider of NFT development services, we help you build NFT collections, marketplaces, play-to-earn games, launchpads, and aggregator applications. We also provide white label software, and each of these solutions is completely original`,
      },
      {
        title: "What are the benefits of starting an NFT business?",
        content: `You should launch an NFT company because it has the potential to quickly take over as a Web3 mainstay. By building a sustainable business model that prioritizes the community with long-term goals and offers opportunities for users to earn alongside it through various activities, such an endeavor can produce enormous profits. `,
      },
    ],
  };

  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  const [isHovering, setIsHovering] = useState(1);
  return (
    <>
      <Head>
        <title>
          Web Tech Development Services for NFT Defi and Crypto Collectibles–
          NFT Constructer
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link
          rel="canonical"
          href="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="description"
          content="We provide customizable website development services for specialized for NFT DeFi Blockchain and Web3 based startups at affordable prices with scalable solutions."
        ></meta>
        <meta
          name="og:description"
          content="We provide customizable website development services for specialized for NFT DeFi Blockchain and Web3 based startups at affordable prices with scalable solutions."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Web Tech Development Services for NFT Defi and Crypto Collectibles– NFT Constructer"
        />
        <meta property="og:image" content="assets/img/meta/2.jpg" />
        <meta property="image" content="assets/img/meta/2.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development, NFT marketplace development, NFT Website Design"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>
      <OfferA />
      <div id="hiCoin" className="cpy-5">
        <div className="decor-balls">
          <img
            height="auto"
            width="auto"
            src="assets/imgs/decor-ball-1.svg"
            alt="nft constructer"
          />
          <img
            height="auto"
            width="auto"
            src="assets/imgs/decor-ball-3.svg"
            alt="nft constructer"
          />
        </div>
        <div className="container">
          <section className="hero cpy-5">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>
                Top Notch NFT <span>Development</span> Company
              </h1>

              <p className="raleway-black-16">
                Get an unique and distinguishable non-fungible token platform
                with integrated multiple security layers and rich features to
                enhance users&apos; trading experiences.
              </p>
              {/* <div className="hero-checks">
                <div>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/check.svg"
                    alt="Checked"
                  />
                  <p className="raleway-grey-14">Free Register</p>
                </div>
                <div>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/check.svg"
                    alt="Checked"
                  />
                  <p className="raleway-grey-14">Great Service</p>
                </div>
              </div> */}
              <div className="hero-btns">
                <a href="#nft-development" className="btn-hero-1">
                  Get Started
                </a>
              </div>
            </div>

            <div
              className="hero-img"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                height="auto"
                width="auto"
                src="assets/imgs/hero-img-6.png"
                alt="Hero IMG"
                className="hero-img-5"
              />

              <div className="charts-container">
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
              </div>
              <img
                height="auto"
                width="auto"
                src="assets/imgs/wheel.svg"
                alt="nft constructer"
                className="wheel"
              />
              <img
                height="auto"
                width="auto"
                src="assets/imgs/decor-4.png"
                alt="nft constructer"
                className="decor-4"
              />
            </div>
          </section>
        </div>
      </div>
      {/* =============service card section ================== */}
      <section>
        <div className="service-card">
          <div className="container">
            <div className="row-4">
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # Reliable Platform
                    </a>
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/timer.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Most Realiable Developers </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # Project&apos;s Confidentiality
                    </a>
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/doller.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>All of Your Information Is Secure </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # Communicative
                    </a>
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/notice.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Clients say the team feels like their employees.</p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # 24/7 Support
                    </a>
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/vip.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Our developers are there to support you 24*7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============service card section ================== */}

      <div className="white-bg">
        {/* ================about us section ================== */}
        <section className="about-us cpt-6">
          <div className="container">
            <div className="row-col-2">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="about-us-img">
                  <img
                    height="auto"
                    width="auto"
                    src="assets/img/inner/about-us.png"
                    alt="nft constructer"
                  />
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="about-us-content">
                  <div className="about-content-inner">
                    <h1>Description</h1>
                    <p>
                      Are you trying to find a platform to create your own NFTs?
                      We have developed NFT markets that are feature-rich,
                      decentralized and enable the tokenization of a wide range
                      of assets, including real-world assets like software
                      licenses, artwork, collectibles, and digital collectibles.
                      When a token is sold on your website thanks to your
                      knowledge of NFT token development services, you get paid
                      a commission. We provide non-fungible token development
                      services directly from our website, unlike other
                      businesses that operate through middlemen. You may create
                      NFTs for any type of product that is particular to your
                      company or offer them on the open market main web platform
                      through our development team. Our non-fungible token
                      development services allow businesses to benefit from the
                      many advantages that NFTs offer, like increased
                      visibility, more control over the product, and a more
                      secure marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            height="auto"
            width="auto"
            src="assets/img/inner/cr-8.png"
            alt="nft constructer"
            className="cr8-img"
          />
          <img
            height="auto"
            width="auto"
            src="assets/img/inner/cr-6.png"
            alt="nft constructer"
            className="cr6-img"
          />
        </section>
        {/* ================about us section end ================== */}
        {/* ==============pricing range ============== */}
        <div className="cpt-6">
          <PriceRangeSlider />
        </div>
        {/* ==============pricing range end ============== */}
        {/* ===================demo request section ================== */}
        {/* <div id="demo-sec">
          <DemoForm />
        </div> */}
        {/* ===================demo request section end ================== */}

        {/* ===================service section ================== */}
        <section className="our-services cpt-6" id="nft-development">
          <div className="container">
            <div className="our-service-wrapper">
              <div className="our-service-content">
                <span className="short-title">OUR NON FUNGIBLE</span>
                <h2 className="sec-title">Token Development Services</h2>
                <p className="service-discription">
                  Being a top token development company, our non-fungible token
                  development services facilitate the digital assets to be
                  tokenized for collection. Majorly, we work on all the major
                  blockchain protocols which are too popular in the market.
                </p>
              </div>
              <div className="our-service-items cpy-5">
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/1.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Minting Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/2.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Marketplace </h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/3.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Launchpad</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/4.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Cross-Chain NFT Minting Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/5.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Mult-Chain NFT Marketplace</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/6.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Token Development </h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/7.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Marketplace With Governance</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/8.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Ticketing Marketplace</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/9.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT For Real state</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/10.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>DAO Enabled NFT</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/11.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Swapping Platform </h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/12.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Staking Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/13.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Game Marketplace</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/14.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Physical NFT</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/15.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Physical NFT Marketplace</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/16.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Wallet</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/17.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Fractional NFT Marketplace</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/18.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Governance Token</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/19.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Social Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/20.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Ecommerce Based NFT Store</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/21.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Asset Lifecycle Management</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/22.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Software License Management</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/23.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Real Estate Tokenization</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/nft-development/24.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>IPO Development</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}

        {/* ===================Mentioned section ================== */}
        <div className="cpt-6">
          <Featured />
        </div>
        {/* ===================Mentioned section end ================== */}

        {/* ===================development track ================== */}
        <section>
          <div className="development-track cpt-6" id="nft-development">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">best services</p>
                <h2 className="sec-title">NFT Development Tech Stack</h2>
                <p className="sec-des">
                  SemiDot is a leading NFT marketplace development company. We
                  are highly innovative & work with advanced technologies.
                </p>
              </div>
              <div
                className="options"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  className={service === 1 ? "option active" : "option"}
                  onClick={() => {
                    setService(1);
                  }}
                >
                  <p>BlockChain Platform</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 2 ? "option active" : "option"}
                  onClick={() => {
                    setService(2);
                  }}
                >
                  <p>Storage Platform</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 3 ? "option active" : "option"}
                  onClick={() => {
                    setService(3);
                  }}
                >
                  <p>NFT Standards</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 4 ? "option active" : "option"}
                  onClick={() => {
                    setService(4);
                  }}
                >
                  <p>Front End Frameworks</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 5 ? "option active" : "option"}
                  onClick={() => {
                    setService(5);
                  }}
                >
                  <p>Programming Languages</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 6 ? "option active " : "option"}
                  onClick={() => {
                    setService(6);
                  }}
                >
                  <p>Cloud Platforms</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
              </div>
              <div className="" data-aos="fade-up" data-aos-duration="1000">
                <div className={service === 1 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/1.png"
                      alt="nft-constructer"
                    />
                    <p>Ethereum</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/2.png"
                      alt="nft-constructer"
                    />
                    <p>Hyperledger</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/3.png"
                      alt="nft-constructer"
                    />
                    <p>Binance</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/4.png"
                      alt="nft-constructer"
                    />
                    <p>Tron</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/5.png"
                      alt="nft-constructer"
                    />
                    <p>Solana</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/6.png"
                      alt="nft-constructer"
                    />
                    <p>Polygon</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/7.png"
                      alt="nft-constructer"
                    />
                    <p>Cardano</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/8.png"
                      alt="nft-constructer"
                    />
                    <p>Polkadot</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/9.png"
                      alt="nft-constructer"
                    />
                    <p>Litecoin</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/10.png"
                      alt="nft-constructer"
                    />
                    <p>Avalanche</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/11.png"
                      alt="nft-constructer"
                    />
                    <p>NEO</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/12.png"
                      alt="nft-constructer"
                    />
                    <p>Harmony</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/13.png"
                      alt="nft-constructer"
                    />
                    <p>Fantom</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/14.png"
                      alt="nft-constructer"
                    />
                    <p>Moonbeam</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/15.png"
                      alt="nft-constructer"
                    />
                    <p>Aurora</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/16.png"
                      alt="nft-constructer"
                    />
                    <p>Cronos</p>
                  </div>
                </div>
                <div className={service === 2 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/ipfs.png"
                      alt="Etherium"
                    />
                    <p>IPFS</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/file-coin.png"
                      alt="Etherium"
                    />
                    <p>File Coin</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/couchbd.png"
                      alt="Etherium"
                    />
                    <p>CouchDB</p>
                  </div>
                </div>
                <div className={service === 3 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/etherium.png"
                      alt="Etherium"
                    />
                    <p>ERC-721A</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/etherium.png"
                      alt="Etherium"
                    />
                    <p>ERC-1155</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/tezos.png"
                      alt="Etherium"
                    />
                    <p>Tezos</p>
                  </div>

                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/dgoods.png"
                      alt="Etherium"
                    />
                    <p>Dgoods</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/trc.png"
                      alt="Etherium"
                    />
                    <p>Trc-721</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/bep.png"
                      alt="Etherium"
                    />
                    <p>Bep-20</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/rust.png"
                      alt="Etherium"
                    />
                    <p>Rust Programing</p>
                  </div>
                </div>

                <div className={service === 4 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/vuejs.png"
                      alt="Etherium"
                    />
                    <p>Vue Js</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/angular.png"
                      alt="Etherium"
                    />
                    <p>Angular</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/react.png"
                      alt="Etherium"
                    />
                    <p>React</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/cafca.png"
                      alt="Etherium"
                    />
                    <p>Kafka</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/couchdb.png"
                      alt="Etherium"
                    />
                    <p>CouchDB</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/couchdb-2.png"
                      alt="Etherium"
                    />
                    <p>CouchDB</p>
                  </div>
                </div>

                <div className={service === 5 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/solidity.png"
                      alt="Etherium"
                    />
                    <p>Solidity</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/angular1.png"
                      alt="Etherium"
                    />
                    <p>Angular</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/c++.png"
                      alt="Etherium"
                    />
                    <p>C++</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/c.png"
                      alt="Etherium"
                    />
                    <p>C</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/couchdb.png"
                      alt="Etherium"
                    />
                    <p>CouchDB</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/php.png"
                      alt="Etherium"
                    />
                    <p>PHP</p>
                  </div>
                </div>

                <div className={service === 6 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/aws.png"
                      alt="Etherium"
                    />
                    <p>aws</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/ibm.png"
                      alt="Etherium"
                    />
                    <p>IBM BLUEMIX</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/rass.png"
                      alt="Etherium"
                    />
                    <p>Eth rass</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/kaleido.png"
                      alt="Etherium"
                    />
                    <p>Kaleido Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================development track end ================== */}
        {/* ===================ChainUP section  ================== */}
        <section>
          <div className="chainup-area cpy-6">
            <div className="container">
              <div className="chainup-grid">
                <div
                  className="chainup-img"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    height="auto"
                    width="auto"
                    src="assets/img/inner/chainup.png"
                    alt="nft constructer"
                  />
                </div>
                <div
                  className="chainup-content"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="chainup-title">
                    <p>CHAINUP</p>
                    <h2>ChainUP Data Center Worldwide</h2>
                  </div>
                  <div className="chainup-inner-grid">
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/client.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={500} duration={5} /> +
                        </h3>
                        <p>Data Center Worldwide</p>
                      </div>
                    </div>

                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/financial.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Financial Detervative Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/crypto.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Wallet Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/nft.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={300} duration={5} /> +
                        </h3>
                        <p>Crypto Exchange Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/region.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={300} duration={5} /> +
                        </h3>
                        <p>NFT Service Client</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/wallet.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={20} duration={5} /> +
                        </h3>
                        <p>Countries & Region </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================ChainUP section end ================== */}

        {/* ==================Features================== */}
        <section>
          <div id="inner-area">
            <div className="features">
              <div className="services-decor">
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-1.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-2.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-3.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-4.png"
                  alt="nft constructer"
                />
              </div>
              <div className="container">
                <div className="section-title">
                  <p className="sm-title">FEATURES OF</p>
                  <h2 className="sec-title"> NFT Development Services</h2>
                </div>

                <div className="services">
                  <div className="services-container">
                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/paper.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/paper-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Standardization</p>
                      <p>
                        For all NFTs, you can develop reusable, fairly decent
                        standards. initiate the process of standardizing
                        collectible tokens.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/chart-99.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/chart-99-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Marketplace</p>
                      <p>
                        The different NFT markets are very effective for NFT
                        trading and unique ownership.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/hand.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/hand-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Ownership</p>
                      <p>
                        NFT tokens offer unalterable ownership of antique
                        collectibles and prevent unauthorized modifications.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/hammer.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/hammer-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Bidding</p>
                      <p>
                        Any type of physical or digital asset that is kept as
                        Non-Fungible tokens can be easily auctioned on the
                        relevant trading platform.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/trace.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/trace-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Traceability</p>
                      <p>
                        The various NFT marketplaces are highly productive for
                        NFT trading & unique ownership.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/rocket.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/rocket-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>New Project</p>
                      <p>
                        Wallet providers are eyeing every new project arriving
                        in the NFT marketplace. Enjoy smooth trade.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/circles.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/circles-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Tracking</p>
                      <p>
                        You can track the owner of any asset and avoid
                        third-party verification requirements.You can also track
                        traffic & sales analytics.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/goverment.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/goverment-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Governance Attributes</p>
                      <p>
                        Users have the ability to vote on platform updates
                        created by a Governance attribute.
                      </p>
                    </div>
                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/authen-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/authen-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Authenticity</p>
                      <p>
                        Each Non-Fungible Token is unique and distinct by
                        itself.  No NFTs can be copied or duplicated,
                        demonstrating their authenticity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}
        {/* ===============Benefits================== */}
        <section>
          <div id="inner-area">
            <div className="benefits-area">
              <div className="benefits-decor">
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-5.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-6.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-7.png"
                  alt="nft constructer"
                />
              </div>
              <div className="container benefit-section">
                <div className="title">
                  <p className="colorful-txt">BENIFITS OF</p>
                  <h2>NFT Development</h2>
                  <div className="title-line"></div>
                </div>

                <div
                  className="spider"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/center-nft.png"
                    alt="nft constructer"
                    className="spider-center"
                  />

                  <div className="benefits">
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/liquidity.png"
                          alt="nft constructer"
                        />
                        <p>NFT Liquidity</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/gas.png"
                          alt="nft constructer"
                        />
                        <p>Lowest Gas Price</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/marketplace.png"
                          alt="nft constructer"
                        />
                        <p>Multi-Chain NFT Marketplace</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/smart-contract.png"
                          alt="nft constructer"
                        />
                        <p>
                          Smart contract <br /> Audited NFT
                        </p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/stakling.png"
                          alt="nft constructer"
                        />
                        <p>NFT Staking</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/lending.png"
                          alt="nft constructer"
                        />
                        <p>NFT Lending</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/launchpad.png"
                          alt="nft constructer"
                        />
                        <p>NFT Launch Pad</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/auction.png"
                          alt="nft constructer"
                        />
                        <p>Bidding & Auction</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/ownership.png"
                          alt="nft constructer"
                        />
                        <p>Fractional Ownership</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/minting.png"
                          alt="nft constructer"
                        />
                        <p>Lazy Minting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===============Benefits end================== */}

        {/* =====================top project===================== */}
        <TopProject />
        {/* ===============top project end=============== */}
        {/* <!--  ============ business grow start =============--> */}
        <HowItWork />
        {/* <!--  ============ business grow end =============--> */}
        {/* =====================happy clients======================= */}
        <Review />
        {/* =====================happy clients end======================= */}
        {/* ==========================faq================== */}
        <div className="faqs-section cpb-6 cpt-7">
          <div className="container">
            <div className="faq-wrapper">
              <div className="left-faq">
                <h2>Frequently Asked Questions</h2>
                <p>
                  If you can not find what you are looking for{" "}
                  <a href="" className="faq-link">
                    send us a message!
                  </a>
                </p>
                <img src="assets/img/faq/1.png" className="faq-image" alt="" />
              </div>

              <div className="content">
                <Faq data={data} styles={styles} />
              </div>
            </div>
          </div>
        </div>
        {/* ==========================faq end================== */}
        <ContactBtn />
        {/* ===============================contact us ================ */}
        <LetsTalk />
      </div>
    </>
  );
}
HiCoin.layout = AppLayout;

export default HiCoin;

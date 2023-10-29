import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Faq from "react-faq-component";
import CountUp from "react-countup";
import DemoForm from "./inner/demoform";
import Head from "next/head";
import TopProject from "./inner/TopProject";
import HeroSub from "./inner/HeroSub";
import Newsletter from "./inner/Newsletter";
import Review from "./inner/Review";
import OfferA from "./inner/OfferA";
import Featured from "./inner/Featured";
import PriceRangeSlider from "./inner/PriceRange";
import HowItWork from "./inner/HowItWork";

import LetsTalk from "./inner/LetsTalk";
import ContactBtn from "./inner/ContactBtn";

function DefiDevelopment() {
  const data = {
    rows: [
      {
        title: "DeFi: what is it? ",
        content: `Decentralized Finance (DeFi) combines elements of technology and finance through a blockchain network. It is open-source and aims to increase accessibility by serving as a strong substitute for conventional financial services. Operations are automated directly, without the use of a middleman.`,
      },
      {
        title: "How does DeFi benefit you?",
        content: `A decentralized financial system offers several advantages. It guarantees efficient transaction processing at a reasonable cost. High levels of anonymity are guaranteed by total automation without the involvement of third parties. `,
      },
      {
        title: "What is the security of DeFi? ",
        content: `Blockchain technology and smart contracts both guarantee transparency and hack-proof security. `,
      },
      {
        title: "How do DeFi apps work? ",
        content: `Examples of decentralized financial applications include UniSwap, MakerDAO, and Compound.`,
      },
      {
        title: "How safe is DeFi?",
        content: `Private keys give users total control over their money, and the distributed ledger network guards against breaches.`,
      },
      {
        title: "What is the best way to choose a DeFi development company? ",
        content: `Based on their expertise and influence in the cryptocurrency market, you can pick the best DeFi development company. `,
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
        <title>DeFi Development and Consulting Services|NFT Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />
        <link rel="canonical" href="https://nftconstructer.com/ " />
        <meta
          name="description"
          content="We assist in the development of Decentralized Financial (DeFi) technologies like decentralized exchanges, staking platforms, DeFi lottery systems, that let your customers to handle their money in a decentralized manner for a charge, from saving and investing to lending and borrowing. "
        ></meta>
        <meta
          name="og:description"
          content="We assist in the development of Decentralized Financial (DeFi) technologies like decentralized exchanges, staking platforms, DeFi lottery systems, that let your customers to handle their money in a decentralized manner for a charge, from saving and investing to lending and borrowing. "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="DeFi Development and Consulting Services|NFT Constructer"
        />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
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
      <section className="defi-hero cpy-5">
        <div className="container">
          <div className="defi-hero-wrapper">
            <div className="defi-hero-left">
              <h1>
                Build Your <span>Decentralized</span> Exchange Platform
              </h1>
              <p>
                We create DeFi apps range across a variety of financial
                instruments, from lending/borrowing platforms to stablecoins.
              </p>
              <div className="defi-hero-btn">
                <a href="#defi-service" className="btn-hero-1">
                  Get Started
                </a>
                {/* <a href="#get-quoted" className="btn-hero-2">
                  Learn More
                </a> */}
              </div>
            </div>
            <div className="defi-hero-right">
              <div className="hero-bg-img-1">
                <img src="./assets/images/defi/hero-img-1.png" alt="" />
              </div>
              <div className="hero-bg-img-2">
                <img src="./assets/images/defi/hero-img-2.png" alt="" />
              </div>
              <div className="hero-bg-img-3">
                <img src="./assets/images/defi/hero-img-3.png" alt="" />
              </div>
              <div className="hero-bg-img-4">
                <img src="./assets/images/defi/hero-img-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      The largest infiltrator of the modern financial system is
                      DeFi Development. Everyone now has a better decentralized
                      access to key operations including borrowing, lending,
                      trading, investing, and risk management. It offers a few
                      advantages as financial operations are automated using
                      smart contracts to become more effective.When using their
                      separate private keys, users will have more control over
                      their money. The network-based transactions are tamper-
                      and immutable-proof. They are extremely interoperable and
                      can simply sync with many decentralized apps. To help you
                      grow your business, enlist the assistance of NFT
                      CONSTRUCTER, (one of the most reputable blockchain
                      consulting firms.) Our company NFT CONSTRUCTER is
                      world-renowned for developing and deploying DeFi apps to
                      business entities and startups. We aim to work on
                      improving access to the decentralized finance system in a
                      hassle-free manner. It would serve millions of unbanked
                      people and hence we are proud to be a part of this
                      revolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="assets/img/inner/cr-8.png"
            alt="nft constructer"
            className="cr8-img"
          />
          <img
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
        {/* ===================service section ================== */}
        <section className="our-services cpt-6" id="defi-service">
          <div className="container">
            <div className="our-service-wrapper">
              <div className="our-service-content">
                <span className="short-title">OUR NON FUNGIBLE</span>
                <h1 className="service-title">DeFi Services</h1>
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
                      src="/assets/images/defi/defi-service/1.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Staking Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/2.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Yield Farming</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/3.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Lending and Borrowing Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/4.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Governance Token</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/5.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Crowd Funding Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/6.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Exchange Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/7.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Real State Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/8.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Synthetic Asset</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/9.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Swapping Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/10.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Services</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/11.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Wallet</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/12.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>Dex Development</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}

        {/* ===================Mentioned section ================== */}
        <div className="cpy-6">
          <Featured />
        </div>
        {/* ===================Mentioned section end ================== */}

        {/* ===================ChainUP section  ================== */}
        <section>
          <div className="chainup-area cpb-6">
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
                        <p>Served Clients</p>
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
                          <CountUp end={250} duration={5} /> +
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

        {/* ===================Newsletter section  ================== */}
        <Newsletter />
        {/* ===================Newsletter section end ================== */}
        {/* ==================Features================== */}
        <section>
          <div id="inner-area" className="cpt-6">
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
                  <h2 className="sec-title">
                    Key Features of DeFi Development{" "}
                  </h2>
                  <p className="sec-des">
                    Being a top NFT token development company, our non-fungible
                    token development services facilitate the digital assets to
                    be tokenized for collection. Majorly, we work on Ethereum
                    NFTs, which are too popular in the market. NFT CONSTRUCTER
                    helps you to launch your NFT for all your business needs.
                  </p>
                </div>

                <div className="services">
                  <div className="services-container">
                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/per-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/per-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Permissionless</p>
                      <p>
                        DeFi uses an open, permission-less access model that
                        anyone with an internet connection and a cryptocurrency
                        wallet can access.
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
                          src="assets/imgs/defi-feature-icon/pro-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/pro-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Programmability</p>
                      <p>
                        DeFi's programmability creates new opportunities for the
                        development of new financial instruments and digital
                        assets.
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
                          src="assets/imgs/defi-feature-icon/trans-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/trans-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Transparency</p>
                      <p>
                        For the public Ethereum blockchain, each transaction
                        must be broadcast to all other users on the network to
                        maintain utmost transparency.
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
                          src="assets/imgs/defi-feature-icon/immu-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/immu-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Immutability</p>
                      <p>
                        DeFi offers the assurance of integrity for all
                        transactions with the guarantee of safe and secure data
                        transmission without any unauthorized modifications.
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
                          src="assets/imgs/defi-feature-icon/inter-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/inter-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Interoperability </p>
                      <p>
                        DeFi protocols are often referred to as "legos,"because
                        of its interoperability. You must specify how to combine
                        two DeFi protocols like Lego blocks for specific use
                        cases.
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
                          src="assets/imgs/defi-feature-icon/high-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/high-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>High Security</p>
                      <p>
                        Decentralized platforms are known for having complex and
                        impenetrable security structures. Users feel far more
                        secure in the system because of the involvement of
                        finance.
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
                          src="assets/imgs/defi-feature-icon/decen-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/decen-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Decentralized Transactions</p>
                      <p>
                        DeFi is able to offer platforms decentralized exchanges
                        without a centralized infrastructure. The transfer of
                        funds only take place once the trade is concluded, to
                        fully ensure their security.
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
                          src="assets/imgs/defi-feature-icon/non-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/non-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Non Custodial</p>
                      <p>
                        By utilizing web3 wallets like MetaMask, users can
                        interact with smrp financial protocols and applications
                        more effectively while retaining total control over
                        their assets and personal data.
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
                          src="assets/imgs/defi-feature-icon/global-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/global-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Global Access</p>
                      <p>
                        Since traders and entrepreneurs from all over the world
                        can use the lending and borrowing DeFi platform, it has
                        proven to be very helpful.
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
          <div id="inner-area" data-aos="fade-up" data-aos-duration="1000">
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
                  <h2>Defi Development</h2>
                  <div className="title-line"></div>
                </div>

                <div className="spider">
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
                          src="assets/imgs/benifits/defi/1.png"
                          alt="nft constructer"
                        />
                        <p>Automation</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/defi/2.png"
                          alt="nft constructer"
                        />
                        <p>
                          Usage Of <br /> Smart Contract
                        </p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/defi/3.png"
                          alt="nft constructer"
                        />
                        <p>
                          Strategized <br />
                          Investment Plans
                        </p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/defi/4.png"
                          alt="nft constructer"
                        />
                        <p>
                          Lack Of the <br />
                          presence of a<br /> third party
                        </p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/defi/5.png"
                          alt="nft constructer"
                        />
                        <p>Highly Secure</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/defi/6.png"
                          alt="nft constructer"
                        />
                        <p>
                          Inmplementation <br /> of Pseudonymous <br />{" "}
                          Transactions
                        </p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/defi/7.png"
                          alt="nft constructer"
                        />
                        <p>Ensures Global Access</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/defi/8.png"
                          alt="nft constructer"
                        />
                        <p>Interoperability</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <a href="#" className="carcel-btn">
                        Get NFT Solution
                      </a>
                      <a href="#" className="carcel-btn-alt">
                        Discuss Your Project
                      </a>
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
        <div className="faqs-section cpt-6 cpb-6">
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
DefiDevelopment.layout = AppLayout;

export default DefiDevelopment;

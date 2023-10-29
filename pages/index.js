import React, { useEffect, useState } from "react";
import Link from "next/link";
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
import WhyChose from "./inner/WhyChose";

function Home() {
  const data = {
    rows: [
      {
        title: "What is an NFT minting platform?",
        content: `NFT Minting platform is a website where users can mint their various digital assets such as artwork,music,video,game items NFT etc digital collectibles. While minting an NFT users have to pay a gas fee based on the blockchain and platform they wish to mint their NFTs.`,
      },
      {
        title: "How to create a NFT Minting website",
        content: `You can either create an NFT minting website with the use of ready made White label NFT minting software which can reduce the development cost and time. You just need to buy an NFT minting software, customize it based on your business niche requirements and launch it. You can also create an nft minting website from scratch which requires a lot of time and development cost.`,
      },
      {
        title: "Which is the best NFT minting platform development company?",
        content: `With no doubt NFT Constructer is the best one step NFT minting platform development company delivering NFT Minting website development services worldwide such as India, United states, united kingdom and much more.`,
      },
      {
        title: "Which is the best NFT minting platform designing company?",
        content: `With no doubt NFT Constructer is the best one step NFT minting platform development & designing company delivering NFT Minting website development & design services worldwide such as India, United states, united kingdom and much more.`,
      },
      {
        title: "How much does it cost to design a NFT minting website?",
        content: `The cost to develop an NFT Minting platform depends on various factors such as geography, design model, resources needed, time and mainly focused on the features and functionalities required by the business owners on their platform.The cost can vary 5000 usd to 20000 usd depeding on the features and functionalities required by the business.`,
      },
      {
        title: "Is it completely secure?",
        content: `Yes, it’s completely secure & tested before we hand over the complete project to the customers.`,
      },
    ],
  };

  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  return (
    <>
      <Head>
        <title>
          In Non-Fungible Token Development Services, We Are the Experts – NFT
          Constructer
        </title>
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
          content="NFT Constructer offers highly professional website design and development services with affordable pricing plans specialized for NFT DeFi Blockchain and Web3 based projects corporate clients and startups."
        ></meta>
        <meta
          name="og:description"
          content="NFT Constructer offers highly professional website design and development services with affordable pricing plans specialized for NFT DeFi Blockchain and Web3 based projects corporate clients and startups."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="In Non-Fungible Token Development Services, We Are the Experts – NFT Constructer "
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
      <div id="home1">
        <section className="hero">
          <div className="container">
            <div className="hero-wrapper">
              <div
                className="hero-content-wrapper"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="hero-content">
                  <div className="title-top-img">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/cr-1.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="widht-60">
                    <h1 className="title">
                      Full Stack Web Tech Services For NFT & Fintech Companies
                    </h1>
                  </div>
                  <div className="widht-50">
                    <p className="description">
                      We provide full stack web tech development and design
                      services for NFT Defi and fintech start ups that can help
                      you to reach a wider audience and increase of revenue.
                    </p>
                  </div>
                  <HeroSub />
                  <div className="service">
                    <ul>
                      <li>
                        <i className="icofont-check"></i> Task Management
                      </li>
                      <li>
                        <i className="icofont-check"></i> 24/7 Great Service
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="hero-img"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  height="auto"
                  width="100%"
                  src="assets/img/hero/webdevlopment.webp"
                  alt="nft constructer"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* =============service cards section ================== */}
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
                  <p>Leading development team of blockchain experts. </p>
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
                      # Project&lsquo;s Confidentiality
                    </a>
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/doller.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>All of Your information remains fully secured.</p>
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
                  <p>Clients say the team feels like their in house team.</p>
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
                  <p>Our developers are there to support you 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============service card section ================== */}
      <div className="white-bg cpt-6">
        {/* ===================service section ================== */}
        <section>
          <div className="service cpy-6">
            <div className="container">
              <div className="section-title">
                <h2 className="sec-title">Services</h2>
                <p className="sec-des">
                  Prepare to launch a billion-dollar start-up on the NFT Fintech
                  and Crypto Platform with its new, exciting features and
                  capabilities.
                </p>
              </div>

              <div className="service-grid cpt-7">
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/minting.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>NFT Development</h3>
                    <p>
                      With NFT CONSTRUCTER, you can build a feature-rich,
                      user-friendly NFT minting platform or marketplace without
                      any coding or technical knowledge. Enable your users to
                      generate new coins without worrying about the blockchain's
                      main plot.
                    </p>
                  </div>
                  <div className="service-learn-more-btn">
                    <Link
                      href={"/nft-website-development"}
                      className="learn-more-btns"
                    >
                      <p className="learn-more-btns">Learn More</p>
                    </Link>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/smart-contract.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>DeFi Development </h3>
                    <p>
                      Create your optimum DeFi protocol on blockchain networks
                      to expand your business to new heights and participate in
                      the financial future. As DeFi gives users more control
                      because of its security and reliability, you can get your
                      DeFi business developed on any of your desired blockchain
                      networks.
                    </p>
                  </div>
                  <div className="service-learn-more-btn">
                    <Link
                      href={"/defi-development"}
                      className="learn-more-btns"
                    >
                      <p className="learn-more-btns">Learn More</p>
                    </Link>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="service-icon">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/crypto.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Metaverse Development</h3>
                    <p>
                      Create excellent, beneficial VR experiences in the
                      metaverse as your business's next bold move towards
                      success. By developing dynamically changing worlds,
                      providing distinctive features and characters, and
                      offering an exceptional interactive experience.
                    </p>
                  </div>
                  <div className="service-learn-more-btn">
                    <Link href={"/metaverse"} className="learn-more-btns">
                      <p className="learn-more-btns">Learn More</p>
                    </Link>
                  </div>
                </div>
                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service-icon">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/exchange.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Marketing</h3>
                    <p>
                      With our growth-hacking blockchain and NFT marketing
                      strategies, you can secure your company's success. By
                      using persona-based, content-driven engagement strategies,
                      we help blockchain, cryptocurrency, and NFT projects
                      maintain their relevance to target audiences and enhance
                      their market value.
                    </p>
                  </div>
                  <div className="service-learn-more-btn">
                    <Link href={"/marketing"} className="learn-more-btns">
                      <p className="learn-more-btns">Learn More</p>
                    </Link>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="service-icon">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/open.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Website Design</h3>
                    <p>
                      Build cutting-edge DeFi platforms, advance the field of
                      NFTs and blockchains with website designs which emphasise
                      on good user experience, Simplicity and efficacy to ensure
                      that visitors can quickly discover the information they
                      require without being confused or overwhelmed.
                    </p>
                  </div>
                  <div className="service-learn-more-btn">
                    <Link href={"/website-design"} className="learn-more-btns">
                      <p className="learn-more-btns">Learn More</p>
                    </Link>
                  </div>
                </div>

                <div
                  className="service-car"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="service-icon">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/identity.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className="service-content">
                    <h3>Smart Contract Development</h3>
                    <p>
                      We create blockchain-agnostic smart contracts for your
                      business that meets all the security standards, including
                      consultancy, development, testing, and deployment of smart
                      contract logic. You can produce effective, hack-proof,
                      customizable blockchain-enabled smart contracts with us.
                    </p>
                  </div>
                  <div className="service-learn-more-btn">
                    <Link href={"/smart-contract"} className="learn-more-btns">
                      <p className="learn-more-btns">Learn More</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}
        {/* ===============price range============= */}
        <PriceRangeSlider />
        {/* ===================ChainUP section  ================== */}
        <section>
          <div className="chainup-area cpb-6 cpt-7">
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

        {/* ================WHY CHOSE UP SECTION start================  */}
        <WhyChose />
        {/* ================WHY CHOSE UP SECTION end================  */}

        {/* =====================top project===================== */}
        <TopProject />
        {/* ===============top project end=============== */}

        {/* <!--  ============ business grow start =============--> */}
        <HowItWork />
        {/* <!--  ============ business grow end =============--> */}

        {/* ===================Mentioned section ================== */}
        <Featured />
        {/* ===================Mentioned section end ================== */}
        {/* ===================Million Of people ================== */}
        <section>
          <div className="million-area cpy-6">
            <div className="section-title">
              <h2 className="sec-title">Million Of people Joining Us Daily</h2>
              <p className="sec-des">
                Development and Consulting Services For Different Industries
                Around The World
              </p>
            </div>
            <div
              className="million-section "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                height="auto"
                width="auto"
                src="assets/img/inner/map.png"
                alt="nft constructer"
              />
            </div>
          </div>
        </section>
        {/* ===================Million Of people end ================== */}
        {/* =====================happy clients======================= */}
        <div className="cpy-6">
          <Review />
        </div>
        {/* =====================happy clients end======================= */}
        {/* ==========================faq================== */}
        <div className="faqs-section cpb-6 cpt-7">
          <div className="container">
            <div className="faq-wrapper">
              <div className="left-faq">
                <h2>Frequently Asked Questions</h2>
                <p>
                  If you can not find what you are looking for
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
        {/* ===============================contact us start ================ */}
        <ContactBtn />
        {/* ===============================contact us end ================ */}
        <LetsTalk />
      </div>
    </>
  );
}
Home.layout = AppLayout;

export default Home;

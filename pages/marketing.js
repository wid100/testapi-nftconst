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

function Marketing() {
  const data = {
    rows: [
      {
        title: "NFT Marketing Agency: What is it? ",
        content: `The Best NFT Marketing Agency increases the revenue from your distinctive digital assets by using efficient marketing techniques. They can put you in contact with some of the top investors, thought leaders, and influencers in the NFT space to help you market your NFTs. Using social media websites and online forums like Discord and Telegram will also help you advertise your NFTs. `,
      },
      {
        title: "Which is the best NFT Blockchain Marketing Firm? ",
        content: `Because of its outstanding success and strategy-driven marketing, NFT CONSTRUCTER is the best NFT marketing firm.`,
      },
      {
        title: "What services an NFT Marketing Company is offering?",
        content: `With our NFT marketing business, we cater to the following markets: 

        Influencer marketing and social media promotion 


        Public affairs 

        
        Blogging 
        
        a list of the clients 
      
        •NFT advertising campaign 
  
        A marketing firm can assist you in spreading the word about your project in addition to NFT. `,
      },
      {
        title: "Which is the best NFT marketer? ",
        content: `At NFT CONSTRUCTER, we have a lot of experience using a range of NFT marketing channels to run profitable campaigns for clients which make us the best in the market.`,
      },
      {
        title: "How Do We Promote Your NFT Project in the USA? ",
        content: `We use a variety of tactics to promote your NFT project in the USA in order to capture the interest of web-native society, including community building through Discord and Reddit, utilizing niche influencers across various social networks, and developing trend-based content forms on social media channels.`,
      },
      {
        title:
          "What is the best way to build your NFT community based on the USA's market? ",
        content: `What is the best way to build your NFT community based on the USA's market? `,
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
          NFT Defi Metaverse Marketing & PR Services -NFT Constructer
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
          content="With our marketing strategies you can reach a wider audience and increase sales through paid traffic, PR, Influencers, which is specifically designed for your NFT Defi or Metaverse businesses. "
        ></meta>
        <meta
          name="og:description"
          content="With our marketing strategies you can reach a wider audience and increase sales through paid traffic, PR, Influencers, which is specifically designed for your NFT Defi or Metaverse businesses. "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="NFT Defi Metaverse Marketing & PR Services -NFT Constructer"
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
      <section className="marketing-hero cpy-5 cpb-6">
        <div className="container">
          <div className="marketing-hero-warrper">
            <div className="hero-content">
              <h1>
                Proven <span>Marketing Plans</span> For Non Fungible Token Sales
              </h1>
              <p className="raleway-black-16">
                Our marketers trive on executing customized marketing plans with
                boldest ideas to reality specifically designed for Crypto Nft
                Defi start ups.
              </p>
              <div className="hero-btns">
                <a href="#marekting" className="btn-hero-1">
                  Get Started
                </a>
                {/* <a href="#get-quoted" className="btn-hero-2">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="marketing-balls">
          <img src="./assets/images/marketing-boll-1.png" alt="" />
          <img src="./assets/images/marketing-boll-2.png" alt="" />
          <img src="./assets/images/marketing-boll-3.png" alt="" />
        </div>
      </section>

      {/* <!-- =============== marketing dashbord start =========== --> */}
      <section className="mareting-dashbord">
        <div className="dashbord-img">
          <img src="./assets/images/marketing-dasboard-img.png" alt="" />
        </div>
      </section>
      {/* <!-- =============== marketing dashbord end=========== --> */}

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
                      NFT CONSTRUCTER has built expertise in marketing and
                      communications, offering services in public relations,
                      digital marketing, advertising, branding and content
                      creation . We are committed to offering cutting-edge
                      services in web3 and blockchain marketing, such as search
                      engine optimization (SEO), content creation, and
                      pay-per-click (PPC) campaigns They work in a uniquely
                      refreshing way, instead of assigning each customer to an
                      account manager. We have over 100+ marketing experts and
                      agencies that they have vetted and certified to be the
                      best. We offer a variety of content stratifies and social
                      media marketing plans, and can set up a perfect Web3 And
                      blockchain based content marketing strategy for your
                      brand.
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
        <section className="our-services cpt-6" id="marekting">
          <div className="container">
            <div className="our-service-wrapper">
              <div className="our-service-content">
                <span className="short-title">OUR NON FUNGIBLE</span>
                <h1 className="service-title">Marketing Services</h1>
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
                      src="/assets/images/marketing-service/marketing-1.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Marketing Services</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-2.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Marketplace Marketing Services</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-3.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Collectibles Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-4.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Game Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-5.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Telegram Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-6.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Influencer Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-7.png"
                      alt=""
                    />
                  </div>
                  <h3>Influencer Marketing Agency</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-8.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT PR/Media Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-9.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Discord Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-10.png"
                      alt=""
                    />
                  </div>
                  <h3>Discord Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-11.png"
                      alt=""
                    />
                  </div>
                  <h3>Discord Server Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-12.png"
                      alt=""
                    />
                  </div>
                  <h3>Discord Brand Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-13.png"
                      alt=""
                    />
                  </div>
                  <h3>Discord Game Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-14.png"
                      alt=""
                    />
                  </div>
                  <h3>DeFi Marketing Services</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-15.png"
                      alt=""
                    />
                  </div>
                  <h3>Cryptocurrency Exchange Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-16.png"
                      alt=""
                    />
                  </div>
                  <h3>Web3 Marketing Services</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-17.png"
                      alt=""
                    />
                  </div>
                  <h3>ICO Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-18.png"
                      alt=""
                    />
                  </div>
                  <h3>ICO Community Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-19.png"
                      alt=""
                    />
                  </div>
                  <h3>ICO Influencer Marketing</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-20.png"
                      alt=""
                    />
                  </div>
                  <h3>ICO YouTube Influencer</h3>
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
                  <h2> Nft Marketing </h2>
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
                          src="assets/imgs/benifits/marketing/1.png"
                          alt="nft constructer"
                        />
                        <p>Increased Revenue</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/marketing/2.png"
                          alt="nft constructer"
                        />
                        <p>Brand Awareness</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/marketing/3.png"
                          alt="nft constructer"
                        />
                        <p>Transparency</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/marketing/4.png"
                          alt="nft constructer"
                        />
                        <p>Data Insight</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/marketing/5.png"
                          alt="nft constructer"
                        />
                        <p>Authencity </p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/marketing/6.png"
                          alt="nft constructer"
                        />
                        <p>Organic Growth</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/marketing/7.png"
                          alt="nft constructer"
                        />
                        <p>Global Reach</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/marketing/8.png"
                          alt="nft constructer"
                        />
                        <p>Effective Targeting</p>
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
Marketing.layout = AppLayout;

export default Marketing;

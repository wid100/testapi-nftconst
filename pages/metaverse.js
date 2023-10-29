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

function Metaverse() {
  const data = {
    rows: [
      {
        title: "Metaverse development: what is it?",
        content: `You can design your own virtual world setting to hold conventions, meetings, seminars, concerts, or even to start your own real-world company there.`,
      },
      {
        title: "How much does our metaverse development service cost?",
        content: `To get a price on your metaverse development project, get in touch with our team. Your specified features, functionalities, and other factors will affect the price. `,
      },
      {
        title: "What are the benefits of investing in metaverse platforms?",
        content: `Experts claim that the metaverse has a trillion-dollar industry thus has a promising future. If you work in such a growing field, you will be noticed by others. Be a pioneer in the field!`,
      },
      {
        title: "What can a metaverse development company do for you?",
        content: `What can a metaverse development company do for you?`,
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
        <title>Top Notch Metaverse Development Company|NFT Constructer </title>
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
          content="Leading metaverse development company that creates metaverse applications and solutions for NFTs, gaming, real estate, Defi, and other industries."
        ></meta>
        <meta
          name="og:description"
          content="Leading metaverse development company that creates metaverse applications and solutions for NFTs, gaming, real estate, Defi, and other industries."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Top Notch Metaverse Development Company|NFT Constructer "
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
      <div id="metaverseHero" className="cpy-5">
        <div className="decor-balls">
          <img src="assets/images/meta-boll-1.png" alt="nft constructer" />
        </div>
        <div className="container">
          <section className="hero cpy-5">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>
                Create Your Own <span>Platform-driven</span> Virtual World
              </h1>

              <p className="raleway-black-16">
                We offer affordable bespoke development of full-featured
                metaverse platforms.
              </p>
              <div className="hero-btns">
                <a href="#metaverse" className="btn-hero-1">
                  Get Started
                </a>
                {/* <a href="#get-quoted" className="btn-hero-2">
                  Learn More
                </a> */}
              </div>
            </div>

            <div className="hero-img">
              <img
                src="assets/images/meta-hero-img.png"
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
                src="assets/images/meta-star.png"
                alt="nft constructer"
                className="wheel"
              />
              <img
                src="assets/images/meta-web-icon.png"
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
                      By 2040, when metaverse will be significantly more
                      developed, completely immersive, and functioning, a half
                      billion or more people will use the metaverse every day.
                      Countless facets of our real-world ecosystem, including
                      education, healthcare, gaming, entertainment, the arts,
                      etc., are likely to benefit from the metaverse's rapid
                      evolution. The creation of Al and the seamless integration
                      of VR/AR with user data would provide you with entirely
                      new experiences. Metaverse for business is therefore
                      crucial for people in business like you. There are
                      countless options, including social networking,
                      e-commerce, and real estate. You can host conferences,
                      events, parties, business meetings, and other activities
                      in the virtual world by using our metaverse development
                      services. You may customize the platform in a number of
                      ways to provide your customers experiences they won't
                      easily forget. Therefore, while major IT companies are
                      still working to solidify their positions as the market
                      leaders in this industry, you should fully capitalize on
                      this trend by creating your own virtual world.
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
        <section className="our-services cpt-6" id="metaverse">
          <div className="container">
            <div className="our-service-wrapper">
              <div className="our-service-content">
                <span className="short-title">OUR NON FUNGIBLE</span>
                <h1 className="service-title">Metaverse Services</h1>
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
                      src="/assets/images/meta-service/meta-1.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse Development Services</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-2.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse NFT Marketplace Development</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-3.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse Healthcare Solutions</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-4.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>NFT Metaverse Launchpad Development</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-5.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse NFT Game Development</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-6.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse Art Gallery</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-7.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse Avatar Development</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-8.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse 3D Space Development</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-9.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse Event Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-10.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse Platform For Social Interaction</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-11.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse Virtual Working Space</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-12.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Metaverse App Development</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}

        {/* ==================Features================== */}
        <section>
          <div id="inner-area" className="cpy-6">
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
                  <h2 className="sec-title">Key Features of Metaverse</h2>
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
                          src="assets/imgs/meta-icon/exhi-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/meta-icon/exhi-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Exhibitors</p>
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
                          src="assets/imgs/meta-icon/con-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/meta-icon/con-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Conference</p>
                      <p>
                        This tells a user about the conference session’s agenda,
                        speaker’s information, auditorium information, etc.
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
                          src="assets/imgs/meta-icon/net-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/meta-icon/net-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Networking</p>
                      <p>
                        This feature allows user to connect with exhibitors,
                        event participants, and find new connections.
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
                          src="assets/imgs/meta-icon/con-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/meta-icon/con-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Decentralization</p>
                      <p>
                        With decentralized authority, users are able to create
                        their own virtual experiences and assets with monetary
                        value and trade them.
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
                          src="assets/imgs/meta-icon/lead-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/meta-icon/lead-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Leaderboard</p>
                      <p>
                        Users will gain points for completing tasks, such as
                        attending events, watching videos, etc. A leader board
                        will show points acquired by participants on the
                        platforms.
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
                          src="assets/imgs/meta-icon/chat-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/meta-icon/chat-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Chat</p>
                      <p>
                        Participants can chat with their fellow participants and
                        increase their connections, also they can clarify their
                        queries through the chat.
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
                          src="assets/imgs/meta-icon/my-box-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/meta-icon/my-box-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>My Box</p>
                      <p>
                        It is the briefcase that holds the details of
                        people/exhibitors that a user meets, documents and
                        videos viewed at booths. etc.
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
                          src="assets/imgs/meta-icon/business-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/meta-icon/business-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Business cards</p>
                      <p>
                        These card will display contact information of the
                        exhibiting company and the staff in the organization.
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
                          src="assets/imgs/meta-icon/online-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/meta-icon/online-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Online </p>
                      <p>
                        This feature shows users a list of participants
                        available online. They can message online users and get
                        their job done quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}
        {/* ===================Mentioned section ================== */}
        <div className="cpb-6">
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
                  <h2>Metaverse Development</h2>
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
                          src="assets/imgs/benifits/metaverse/1.png"
                          alt="nft constructer"
                        />
                        <p>Decentralized </p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/metaverse/2.png"
                          alt="nft constructer"
                        />
                        <p>Advanced UI</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/metaverse/3.png"
                          alt="nft constructer"
                        />
                        <p>User Administration</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/metaverse/4.png"
                          alt="nft constructer"
                        />
                        <p>Goverrance Attribute</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/metaverse/5.png"
                          alt="nft constructer"
                        />
                        <p>Verification Factor</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/metaverse/6.png"
                          alt="nft constructer"
                        />
                        <p>Enchanced Storage</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/metaverse/7.png"
                          alt="nft constructer"
                        />
                        <p>Economy</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/metaverse/8.png"
                          alt="nft constructer"
                        />
                        <p>
                          High Textured <br />
                          Graphics
                        </p>
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
        <div className="faqs-section cpy-6">
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
Metaverse.layout = AppLayout;

export default Metaverse;

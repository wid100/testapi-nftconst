import { useEffect, useState } from "react";
import Faq from "react-faq-component";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import DemoForm from "./inner/demoform";
import TopProject from "./inner/TopProject";
import Newsletter from "./inner/Newsletter";
import Head from "next/head";
import Review from "./inner/Review";
import OfferA from "./inner/OfferA";
import Featured from "./inner/Featured";
import PriceRangeSlider from "./inner/PriceRange";
import HowItWork from "./inner/HowItWork";

import LetsTalk from "./inner/LetsTalk";
import ContactBtn from "./inner/ContactBtn";
function SmartContract() {
  const [service, setService] = useState(1);

  const data = {
    rows: [
      {
        title: "What is a smart contract? ",
        content: `A smart contract is a computer program that automatically executes the terms of a contract when certain predefined conditions are met. It is self-executing and self-enforcing, meaning that it does not require any human intervention to carry out the terms of the contract. 

Smart contracts are usually built on blockchain technology, which provides a secure and transparent way to record and verify transactions. They can be used to automate a wide range of processes and agreements, from financial transactions to supply chain management to voting systems. `,
      },

      {
        title: "What are the benefits of a smart contract? ",
        content: `Smart contracts work by encoding the terms and conditions of an agreement into computer code that is stored on the blockchain. Once the conditions of the contract are met, such as a certain date or the completion of a task, the smart contract is automatically triggered to execute the pre-determined actions agreed upon by the parties involved. Because smart contracts are automated and do not require manual intervention or verification, they are much faster and more efficient than traditional contracts. 

As blockchain technology continues to evolve and become more widely adopted, the use of smart contracts is likely to become more prevalent as well. `,
      },
      {
        title: "How do smart contract work? ",
        content: `Smart contracts are self-executing digital programs that are designed to automate the process of executing and enforcing the terms of a contract between parties, without the need for intermediaries such as lawyers or other third-party service providers. 

 

Smart contracts work on a blockchain network, which is a decentralized, distributed digital ledger that records transactions between parties in a secure and transparent manner. When two or more parties agree to a contract, the terms of the contract are encoded in the form of a computer program, which is then uploaded to the blockchain. `,
      },
      {
        title: "How much does it cost to develop a smart contract?",
        content: `The cost to develop a smart contract can vary widely depending on a variety of factors, including the complexity of the contract, the platform on which it is being developed, and the experience and expertise of the development team. `,
      },
      {
        title: "Do you create custom smart contracts?",
        content: `We provide variety of smart contract development services for clients ranging from token contracts and NFTs, Defi, Metaverse to highly complex financial protocols. Please reach out with a set of requirements for a project you would like to have built and our team will get back to you with a quote within 24 hours. `,
      },
      {
        title:
          " Can you provide a legal opinion or help to create our smart contract?",
        content: `Yes sure we our legal advisors can also provide legal opinions while concluding a smart contract audit to ensure the security of your project. `,
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
          Customized and Secured Smart-Contract Development Services | NFT
          Constructer
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/smart-contract"
        />
        <link
          rel="canonical"
          href="https://nftconstructer.com/smart-contract"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta
          name="description"
          content="We offer a variety of decentralized smart-contract development and auditing services, including contract clause analysis, spent analysis, and redaction. Get in touch now!"
        ></meta>
        <meta
          name="og:description"
          content="We offer a variety of decentralized smart-contract development and auditing services, including contract clause analysis, spent analysis, and redaction. Get in touch now!"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Customized and Secured Smart-Contract Development Services | NFT Constructer "
        />
        <meta property="og:image" content="assets/img/meta/4.jpg" />
        <meta property="image" content="assets/img/meta/4.jpg" />
        <meta
          name="keywords"
          content="NFT Smart Contract Development NFT smart contract Best Smart Contract Developer"
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
      <div id="home3" className="cpy-5">
        <div className="container">
          <section className="hero">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Decentralized <span> Smart Contract</span>
                <br /> Development
              </h1>

              <p className="raleway-black-16">
                Built over $10B in on-chain value across 1000+ projects!
                Experienced smart contract developers at your service.
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
                <a href="#smart-contract" className="btn-hero-1">
                  Get Started
                </a>
                {/* <a href="#get-quoted" className="btn-hero-2">
                  Learn More
                </a> */}
              </div>
            </div>

            <div
              className="hero-img"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src="assets/img/hero/smart-contract-dev.png"
                alt="nft constructer"
                className="hero-bg"
              />
              <img
                src="assets/img/hero/5.png"
                alt="nft constructer"
                className="contract1"
              />
              <img
                src="assets/img/hero/6.png"
                alt="nft constructer"
                className="contract2"
              />
              <img
                src="assets/img/hero/7.png"
                alt="nft constructer"
                className="contract3"
              />
              <img
                src="assets/img/hero/8.png"
                alt="nft constructer"
                className="contract4"
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
                      src="assets/img/inner/timer.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Most Realiable Developers</p>
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
                      src="assets/img/inner/doller.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>All of Your Information Is Secure</p>
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
                      src="assets/img/inner/notice.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Clients say the team feels like their employees. </p>
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
                      We assist you in developing the best NFT smart contracts
                      for the Nft, Defi, metaverse, nft marketplace as a
                      Non-Fungible Token and blockchain smart contract maker to
                      make sure you are in compliance with all laws and
                      regulations that could automate the full execution of an
                      established agreement, so that all signatories are
                      informed of the outcome immediately. You can be sure that
                      your agreement is legally binding on all parties and
                      safely stored on the blockchain with our NFT smart
                      contracts. Additionally, we examine smart contracts to
                      ensure that they are impenetrably secure. As we construct
                      the contract from the ground up, we ensure that your
                      tokens are produced correctly. You can trust our team to
                      manage your assets as we have the experience in creating
                      blockchain-related applications.
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
        {/* ===================Mentioned section ================== */}
        <div className="cpt-6">
          <Featured />
        </div>
        {/* ===================Mentioned section end ================== */}
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
                          src="assets/img/icon/financial.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={60} duration={5} /> +
                        </h3>
                        <p>Financial Detervative Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
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
                          src="assets/img/icon/region.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={160} duration={5} /> +
                        </h3>
                        <p>Liquidity Service Client</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
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
        {/* ===================development track ================== */}
        <section>
          <div className="development-track cpb-6" id="nft-development">
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

        {/* ==================Features================== */}
        <section id="smart-contract">
          <div id="inner-area" data-aos="fade-up" data-aos-duration="1000">
            <div className="features cpb-6 ">
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
                    Smart Contract Development Services
                  </h2>
                </div>

                <div className="services">
                  <div className="services-container">
                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/icon/1.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/icon/1-a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Smart Contract Development</p>
                      <p>
                        We help you to build your unalterable smart contract on
                        popular blockchain platforms including Ethereum, TRON,
                        EOS, Bitcoins, Binance Chain, Polygon, Solana, etc.
                      </p>
                    </div>

                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/icon/2.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/icon/2-a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Smart Contract Audit</p>
                      <p>
                        Security is critical in the development of blockchain.
                        Our comprehensive smart contract audit service helps
                        startups and enterprises to launch and maintain their
                        NFT platforms.
                      </p>
                    </div>
                    <div className="service">
                      <div className="services-icon">
                        <img
                          src="assets/img/icon/3.png"
                          alt="nft constructer"
                        />
                        <img
                          src="assets/img/icon/3-a.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>NFT(ERC721 & ERC1155) Development</p>
                      <p>
                        With our NFT Development Services, you get end-to-end
                        NFT solutions so you can create scalable NFT creation
                        system and marketplaces for transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}
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
                  <h2> Smart Contract Development Services</h2>
                  <div className="title-line"></div>
                </div>

                <div className="spider">
                  <img
                    src="assets/imgs/center-nft.png"
                    alt="nft constructer"
                    className="spider-center"
                  />

                  <div className="benefits">
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          src="assets/imgs/benifits/smart-contract/1.png"
                          alt="nft constructer"
                        />
                        <p>NFT Liquidity</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/smart-contract/2.png"
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
                          src="assets/imgs/benifits/smart-contract/3.png"
                          alt="nft constructer"
                        />
                        <p>Multi-Chain NFT Marketplace</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/smart-contract/4.png"
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
                          src="assets/imgs/benifits/smart-contract/5.png"
                          alt="nft constructer"
                        />
                        <p>NFT Staking</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/smart-contract/6.png"
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
                          src="assets/imgs/benifits/smart-contract/7.png"
                          alt="nft constructer"
                        />
                        <p>NFT Launch Pad</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/smart-contract/8.png"
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
                          src="assets/imgs/benifits/smart-contract/9.png"
                          alt="nft constructer"
                        />
                        <p>Fractional Ownership</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/benifits/smart-contract/10.png"
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
        {/* ==================benefit================== */}
        <section>
          <div className="bene cpt-6">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">BENIFITS OF</p>
                <h2 className="sec-title">
                  Smart Contract Development Services
                </h2>
                <p className="sec-des">
                  Our unique approach of developing smart contrats gives
                  businesses the confidence of bigger investment. in blockchain
                  technology.
                </p>
              </div>

              <div className="benefit-container cpt-7">
                <div className="benefit-box">
                  <div
                    className="benefit-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="benefit-img">
                      <img
                        height="auto"
                        width="auto"
                        src="assets/img/icon/4.png"
                        alt="nft constructer"
                      />
                    </div>
                    <div className="benefit-de">
                      <h2>Secure & Safe</h2>
                      <p>
                        We offer highly secured protection against malicious
                        activities and fraud in the NFT craze.
                      </p>
                    </div>
                  </div>

                  <div
                    className="benefit-item c-derection"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="benefit-de">
                      <h2>Customized Solutions</h2>
                      <p>
                        All our smart contracts are completely built from
                        scratch & also tested with our developers team.
                      </p>
                    </div>
                    <div className="benefit-img">
                      <img
                        height="auto"
                        width="auto"
                        src="assets/img/icon/5.png"
                        alt="nft constructer"
                      />
                    </div>
                  </div>
                  <div
                    className="benefit-item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="benefit-img">
                      <img
                        height="auto"
                        width="auto"
                        src="assets/img/icon/6.png"
                        alt="nft constructer"
                      />
                    </div>
                    <div className="benefit-de">
                      <h2>Highly Scalable</h2>
                      <p>
                        We will design an NFT Marketplace that can cope with
                        newly added listings and an expanding pool of customers
                      </p>
                    </div>
                  </div>
                  <div
                    className="benefit-item c-derection"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <div className="benefit-de">
                      <h2>Post-launch Support</h2>
                      <p>
                        NFT CONSTRUCTOR believes in customer satisfaction and
                        hence we provide on going support even after deployment.
                      </p>
                    </div>
                    <div className="benefit-img">
                      <img
                        height="auto"
                        width="auto"
                        src="assets/img/icon/7.png"
                        alt="nft constructer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================benefit================== */}
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
        <div className="faqs-section cpt-6 cpb-7">
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

SmartContract.layout = AppLayout;

export default SmartContract;

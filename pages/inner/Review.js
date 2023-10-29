import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
function Review() {
  return (
    <>
      <section>
        <div className="happy-area mt-3">
          <div className="container">
            <div className="section-wrap">
              <div className="chainup-title">
                <p>Happy clients</p>
                <h2>What Our Client Say’s</h2>
              </div>
              <p>
                This is what clients have been saying after using the <br />
                great service we do for clients.
              </p>
            </div>

            <div
              className="client-review"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                loop="true"
              >
                <SwiperSlide>
                  <div className="client-review-slider">
                    <div className="review-img">
                      <img
                        height="auto"
                        width="auto"
                        src="assets/img/review/nft_constructer_1.jpg"
                        alt="nft constructer"
                      />
                    </div>
                    <div className="review-content">
                      <h2 className="content-title">
                        Save time managing social media for your business
                      </h2>
                      <p>
                        “This is by far the simplest, most frictionless,
                        easiest-to-get-going platform that I’ve ever worked in.
                        Just being able to upload a link and bounce”
                      </p>
                      <div className="rating">
                        <ul className="rating-ul">
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                        </ul>
                      </div>

                      {/* <div className="client-info">
                        <div className="client-img">
                          <img height="auto"
                      width="auto" src="assets/img/inner/client.png" alt="nft constructer" />
                        </div>
                        <div className="client-name">
                          <h3>Trevor Johnson </h3>
                          <p>25th January, 2022</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-slider">
                    <div className="review-img">
                      <img
                        height="auto"
                        width="auto"
                        src="assets/img/review/nft_constructer_3.jpg"
                        alt="nft constructer"
                      />
                    </div>
                    <div className="review-content">
                      <h2 className="content-title">
                        First & Will Be Using Them Forever
                      </h2>
                      <p>
                        This was my first experience with NFT constructer and
                        website design. They were extremely patient with me.
                        Delivered all items on time. The only delays were due to
                        my lack of experience in this area. It was a real
                        pleasure working with NFT Constructer team.
                      </p>
                      <div className="rating">
                        <ul className="rating-ul">
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                        </ul>
                      </div>

                      {/* <div className="client-info">
                        <div className="client-img">
                          <img height="auto"
                      width="auto" src="assets/img/inner/client.png" alt="nft constructer" />
                        </div>
                        <div className="client-name">
                          <h3>Taylor Hapston</h3>
                          <p>19th January, 2022</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-slider">
                    <div className="review-img">
                      <img
                        height="auto"
                        width="auto"
                        src="assets/img/review/nft_constructer_2.jpg"
                        alt="nft constructer"
                      />
                    </div>
                    <div className="review-content">
                      <h2 className="content-title">
                        Strong Communication Skill With Outstanding Out Come
                      </h2>
                      <p>
                        They have good communication and work ethic. I would
                        recommend their services to others and will continue to
                        work with them on expanding my website features.Thank
                        you again.
                      </p>
                      <div className="rating">
                        <ul className="rating-ul">
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                        </ul>
                      </div>

                      {/* <div className="client-info">
                        <div className="client-img">
                          <img height="auto"
                      width="auto" src="assets/img/inner/client.png" alt="nft constructer" />
                        </div>
                        <div className="client-name">
                          <h3>Jesse Gilati </h3>
                          <p>25th January, 2022</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-review-slider">
                    <div className="review-img">
                      <img
                        height="auto"
                        width="auto"
                        src="assets/img/review/nft_constructer_4.jpg"
                        alt="nft constructer"
                      />
                    </div>
                    <div className="review-content">
                      <h2 className="content-title">
                        Great After Sales Support Went Beyond My Expectation
                      </h2>
                      <p>
                        Just exceptional work and customer service! I am beyond
                        impressed and will be utilizing their services in the
                        future. I really appreciated the collaboration and
                        design guidance.
                      </p>
                      <div className="rating">
                        <ul className="rating-ul">
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                          <li>
                            <i className="icofont-star"></i>
                          </li>
                        </ul>
                      </div>

                      {/* <div className="client-info">
                        <div className="client-img">
                          <img height="auto"
                      width="auto" src="assets/img/inner/client.png" alt="nft constructer" />
                        </div>
                        <div className="client-name">
                          <h3>Jenny Leo</h3>
                          <p>25th January, 2022</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="slider-nav">
                <div className="prev">
                  <i className="icofont-arrow-left"></i>
                </div>
                <div className="next">
                  <i className="icofont-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;

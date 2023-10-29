import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
function LatestBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/latest/post")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  return (
    <section>
      <div className="latest-blog">
        <div className="container">
          <div className="latest-post-title">
            <h2 className="raleway-black-24">CONTINUE READING</h2>
          </div>
          <div className="latest-post-container">
            <div className="latest-post-card">
              <div className="post-card-wrapper">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, A11y]}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  loop="true"
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    900: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {posts.map((post, index) => (
                    <SwiperSlide className="latest-blog-post">
                      <div className="blog-post post-card" key={index}>
                        <div className="blog-img">
                          <img
                            height="auto"
                            width="auto"
                            src={post.main_image}
                            alt={post.seo_title}
                          />
                        </div>
                        <div className="about-blog">
                          <Link href={post.slug}>
                            <a className="urbanist-black-18">{post.title}</a>
                          </Link>
                          <p className="raleway-grey-16">
                            <span className="author-name-post">
                              {post.author}
                            </span>{" "}
                            <div className="space">|</div>
                            <span className="post-date">
                              {post.created_date}
                            </span>
                          </p>
                          <p
                            className="sm-des"
                            dangerouslySetInnerHTML={{
                              __html: post.description.substring(0, 100),
                            }}
                          ></p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="slider-nav latest-post-nav-arrow">
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
        </div>
      </div>
    </section>
  );
}

export default LatestBlog;

import React from "react";

function PostSubscriber() {
  return (
    <div>
      <div className="post-subscriber cpy-6">
        <div className="container">
          <div className="post-subscriber-wrapper">
            <div className="post-subscriber-left">
              <div className="post-subscriber-left-content">
                <h3 className="sm-title">SUBSCRIBE OUR NEWSLETTER</h3>
                <h2>Don’t miss anything!</h2>
                <p>
                  Join our community of 15,000 who receive the best in design
                  and marketing content, biweekly.
                </p>
              </div>
              <div className="post-subscriber-from">
                <form action="" className="subscriber-form">
                  <input
                    type="text"
                    className="form-control subscriber-input"
                    placeholder="Enter your email address"
                  />
                  <button type="submit" className="custom-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSubscriber;

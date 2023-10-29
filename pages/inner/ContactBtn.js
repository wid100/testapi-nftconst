import React from "react";

function ContactBtn() {
  return (
    <div>
      {/* ===============================contact us btn ================ */}
      <div className="contact-us-btn cpb-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-us-btn-wrapper">
                <h2>Is Your Project Not In The List</h2>
                <p>
                  If you can describe it, chances are your dedicated team of{" "}
                  <br />
                  developers can create it, feel free to send us a message to
                  confirm.
                </p>
                <a href="https://wa.me/13025977087" className="btn btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===============================contact us btn end ================ */}
    </div>
  );
}

export default ContactBtn;

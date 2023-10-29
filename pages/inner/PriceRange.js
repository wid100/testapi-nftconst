import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ReactWhatsapp from "react-whatsapp";

function valuetext(value) {
  return `${value}USD`;
}

export default function DiscreteSlider({ valuetext }) {
  const [value, setValue] = React.useState(5000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className="price-range">
        <div className="container">
          <div className="section-title price-range-width">
            <h2 className="sec-title">
              Customize pricing and quotation methods.
            </h2>

            <p className="sec-des">
              Use our personalized pricing plans to bring in high-caliber for
              your project. Our pricing plan service combines the work of top
              team of developers from across the globe with technology that has
              been specifically designed for the purpose.
            </p>
          </div>
          <div className="range-area">
            <div className="left-range">
              <h3 className="range-title">What is your spending budget?</h3>
              <h2 className="range-total">$1k - $100k</h2>
              <Box className="price-slider">
                <Slider
                  aria-label="Temperature"
                  defaultValue={500}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  onChange={handleChange}
                  step={5000}
                  marks
                  min={1000}
                  max={100000}
                />
              </Box>
              <p>
                $5k - $10k $10k - $20k $20k - $40k $40k - $60k $60k - $100k
                $100k
              </p>
            </div>
            <div className="right-telk">
              <h2 className="month-price">
                ${value}/<span className="price-text">mo</span>
              </h2>
              {/* <a href="" className="get-start-btn">
                Get Started
              </a> */}
              <ReactWhatsapp
                number="+13025977087"
                message={`Hello, I chose this price ${value} USD for my project. Please contact me as soon as possible. Thank you`}
              >
                <button type="submit" className="get-start-btn">
                  Get Started
                </button>
              </ReactWhatsapp>
              <p>
                One time payment, no setup fees, pay only when you want to get
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

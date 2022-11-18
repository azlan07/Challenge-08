import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-muted px-5">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="footer row mt-3">
            <div className="col-md mb-3">
              <p>
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p>
                binarcarrental@gmail.com
              </p>
              <p>
                081-233-334-808
              </p>
            </div>

            <div className="col-md mb-3">
              <p>
                <a href="#!" className="text-dark fw-bold text-decoration-none">Our Services</a>
              </p>
              <p>
                <a href="#!" className="text-dark fw-bold text-decoration-none">Why Us</a>
              </p>
              <p>
                <a href="#!" className="text-dark fw-bold text-decoration-none">Testimonial</a>
              </p>
              <p>
                <a href="#!" className="text-dark fw-bold text-decoration-none">FAQ</a>
              </p>
            </div>

            <div className="col-md mb-3">
              <h6 className="text-dark mb-3">
                Connect with us
              </h6>
              <p className="ms-1">
                <img src="img/icon_facebook.png" className="img-fluid" alt="" />
                <img src="img/icon_instagram.png" className="img-fluid m-2" alt="" />
                <img src="img/icon_twitter.png" className="img-fluid m-2" alt="" />
                <img src="img/icon_mail.png" className="img-fluid m-2" alt="" />
                <img src="img/icon_twitch.png" className="img-fluid m-2" alt="" />
              </p>
            </div>

            <div className="col-md mb-md-0 mb-3">

              <h6 className="text-dark mb-3">Copyright Binar 2022</h6>
              <img src="img/logo.png" alt="" />
            </div>

          </div>

        </div>
      </section>

    </footer>
  )
}

export default Footer;
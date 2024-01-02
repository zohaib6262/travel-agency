import React from "react";
import * as Icon from "react-bootstrap-icons";
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 ">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#" className="me-5">
              <Icon.Facebook size={20} />
            </a>
            <a href="#" className="me-5">
              <Icon.Twitter size={20} />
            </a>
            <a href="#" className="me-5">
              <Icon.Google size={20} />
            </a>
            <a href="#" className="me-5">
              <Icon.GooglePlay size={20} />
            </a>
            <a href="#" className="me-5">
              <Icon.Instagram size={20} />
            </a>
            <a href="#" className="me-5">
              <Icon.Linkedin size={20} />
            </a>
            <a href="#" className="me-5">
              <Icon.Github size={20} />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <Icon.Gem className="me-2" />
                  Company name
                </h6>
                <p>
                  Here you can use Faisal Movers Buses website,You can book your
                  seat from Faisal Mover's website.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <Icon.AirplaneEnginesFill className="me-2" />
                  Destinations
                </h6>
                <p>Karachi</p>
                <p>Lahore</p>
                <p>Naran Kaghan</p>
                <p>China</p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <a href="#" className="me-2">
                    <Icon.House size={20} />
                  </a>
                  Islamabad G-9/2 Karachi Comapny, PK
                </p>
                <p>
                  <a href="#" className="me-2">
                    <Icon.Envelope size={20} />
                  </a>
                  faisalmovers@gamil.com
                </p>
                <p>
                  <a href="#" className="me-2">
                    <Icon.Phone size={20} />
                  </a>
                  +92-3009731467
                </p>
                <p>
                  <a href="#" className="me-2">
                    <Icon.Phone size={20} />
                  </a>
                  +92-3239807234
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-3">
          © 2020 Copyright:
          <a class="text-reset fw-bold" href="#">
            FaisalMover's.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

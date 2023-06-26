import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted" 
      style={{paddingTop : "1%"}}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          <div className="me-5 d-none d-lg-block" >
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>WooX
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Apple Watch
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    iPhone
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    iPad
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    MacBook
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Social Links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Pinterest
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
                  <i className="fas fa-home me-3"></i> Prizren, PZ 20200, KS
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  woox@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +905526557582
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +38348155671
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2023
          <a className="text-reset fw-bold" href="https://emrekazaz-hub.github.io/protfolio/">
            MyProtfolio.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

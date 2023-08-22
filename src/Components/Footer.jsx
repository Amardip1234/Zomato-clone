const Footer = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div id="ft">
          <div className="fut">
            <div className="logo">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                alt=""
              />
            </div>
            <div className="drops">
              <div className="country">
                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    India
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        America
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Japan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Russia
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lang">
                <div className="dropdown">
                  <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Hindi
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Panjabi
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Spanish
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="tablesection mt-4">
            <table class="table table borderless">
              <thead>
                <tr>
                  <th scope="col">ABOUT ZOMATO</th>
                  <th scope="col">ZOMAVERSE</th>
                  <th scope="col">FOR RESTAURANTS</th>
                  <th scope="col">LEARN MORE</th>
                  <th scope="col">SOCIAL LINKS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Who We Are</td>
                  <td>tomato</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td></td>
                </tr>
                <tr>
                  <td scope="row">Blog</td>
                  <td>Blinkit</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td scope="row">Work With Us</td>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mt-4 ">
        <div className="rights ">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2023 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

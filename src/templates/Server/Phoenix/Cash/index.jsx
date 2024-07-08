import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function ServerPhoenixCashTemplate() {
  return (
    <>
      <Banner />
      <Header />
      <div className="twisty-net-wrapper">
        <div className="notification" />
        <div className="body--with-sidebar">
          <aside className="twisty-net-sidebar">
            <button
              data-modal-toggler="selecionarCategoria"
              aria-label="Seleione uma Categoria"
              style={{ borderRadius: 4 }}
            >
              <img
                src="https://visage.surgeplay.com/head/512/Epicphoenix766?y=30"
                style={{ width: 54 }}
              />
              <span
                className="category__selector--text"
                aria-hidden="true"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                <span style={{ fontWeight: 600 }}>RANKUP PHOENIX</span>
                Clique para Selecionar
              </span>
            </button>
            <div className="sidebar-header sidebar-round">
              <p>
                <i className="mdi mdi-close mobile-icon close-mobile" />
                <i className="mdi mdi-menu mobile-icon" />
                Selecione um Item
              </p>
            </div>
            <div className="t-modal-navigation">
              <div className="t-modal-navigation__header">
                <span className="mdi mdi-circle-multiple" />
                <div>
                  <span>
                    <b style={{ textTransform: "uppercase" }}>
                      Navegando na Categoria
                    </b>
                  </span>
                  <p>Cash</p>
                </div>
              </div>
              <ul className="t-modal-navigation__list">
                <li>
                  <a href="../../phoenix.html">VIPs</a>
                </li>
                <li>
                  <a href="cash.html" className="active">
                    Cash
                  </a>
                </li>
                <li>
                  <a href="pets.html">Pets</a>
                </li>
              </ul>
            </div>
            <div className="sidebar-nav" id="toggle-mobile-nav">
              <ul>
                <li>
                  <a className="active" href="#">
                    VIPs
                  </a>
                </li>
                <li>
                  <a href="categoria/phoenix/cash.html">Cash</a>
                </li>
                <li>
                  <a href="categoria/phoenix/pets.html">Pets</a>
                </li>
              </ul>
            </div>
            <div className="twisty-net__modules" data-modules-type="topbar">
              <div
                className="twisty-net__modules__module"
                data-module-type="recentPayments"
              >
                <div className="twisty-net__modules__module__header">
                  <i className="mdi mdi-cart-arrow-up" />
                  <p>Compradores Recentes</p>
                </div>
                <div className="payments-flex">
                  <div className="payment-pr">
                    <div className="payment-tooltip">
                      <p>maciel</p>
                      <p className="payment-item">VIP Mensal</p>
                    </div>
                    <img
                      src="https://visage.surgeplay.com/face/512/Chinging.png?y=70"
                      alt=""
                      width={64}
                    />
                  </div>
                  <div className="payment-pr">
                    <div className="payment-tooltip">
                      <p>Heisenberg</p>
                      <p className="payment-item">Unban</p>
                    </div>
                    <img
                      src="https://visage.surgeplay.com/face/512/Chin.png?y=70"
                      alt=""
                      width={64}
                    />
                  </div>
                  <div className="payment-pr">
                    <div className="payment-tooltip">
                      <p>now</p>
                      <p className="payment-item">MVP Mensal</p>
                    </div>
                    <img
                      src="https://visage.surgeplay.com/face/512/now.png?y=70"
                      alt=""
                      width={64}
                    />
                  </div>
                  <div className="payment-pr">
                    <div className="payment-tooltip">
                      <p>Jiggi</p>
                      <p className="payment-item">MVP Mensal</p>
                    </div>
                    <img
                      src="https://visage.surgeplay.com/face/512/Jiggi.png?y=70"
                      alt=""
                      width={64}
                    />
                  </div>
                  <div className="payment-pr">
                    <div className="payment-tooltip">
                      <p>Prosmos</p>
                      <p className="payment-item">MVP Mensal</p>
                    </div>
                    <img
                      src="https://visage.surgeplay.com/face/512/Prosmos.png?y=70"
                      alt=""
                      width={64}
                    />
                  </div>
                  <div className="payment-pr">
                    <div className="payment-tooltip">
                      <p>Cymatics</p>
                      <p className="payment-item">MVP+ Mensal</p>
                    </div>
                    <img
                      src="https://visage.surgeplay.com/face/512/Cymatics.png?y=70"
                      alt=""
                      width={64}
                    />
                  </div>
                  <div className="payment-pr">
                    <div className="payment-tooltip">
                      <p>R4yZn</p>
                      <p className="payment-item">MVP Mensal</p>
                    </div>
                    <img
                      src="https://visage.surgeplay.com/face/512/R4yZn.png?y=70"
                      alt=""
                      width={64}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              className="twisty-net__modules__module"
              data-module-type="topDonor"
            >
              <div className="twisty-net__modules__module__header">
                <i className="mdi mdi-medal" />
                <p>top Comprador (Mensal)</p>
              </div>
              <div className="top__payments--body">
                <div className="top-donator">
                  <div className="avatar">
                    <img
                      src="https://visage.surgeplay.com/head/512/EduKof.png?y=70"
                      alt=""
                      style={{ width: 48, borderRadius: 5, marginRight: 15 }}
                    />
                  </div>
                  <div className="info">
                    <div className="ign">Maciel</div>
                    <div className="amount">
                      Depositou 208.51 <small>BRL</small>
                      este mês.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <main className="twisty-net-main-content">
            <div className="twisty-net-body-description">
              <div className="category__list--with--images">
                <div className="category__list--item">
                  <div className="category__list__item--title">
                    <img
                      href=""
                      data-remote="/package/5382725"
                      src="https://dunb17ur4ymx4.cloudfront.net/packages/images/5ec149391336a82df26d0e8ddc615b58d9d683f6.png"
                      className="img-rounded twisty-net__toogle--modal"
                    />
                  </div>
                  <div className="category__list__item--details">
                    <p className="tituloItem">MVP Mensal</p>
                    <div className="__item__price--list">
                      <p className="__item--price">
                        74.99 BRL
                        <small />
                      </p>
                    </div>
                  </div>
                  <div className="category__list__item--buttons">
                    <a
                      href="#"
                      target="_blank"
                      className="cta "
                      cta-type="info"
                    >
                      <i
                        className="fa fa-question"
                        data-modal-toggler="mvpMensal"
                      />
                    </a>
                    <a
                      className="cta"
                      cta-type="buy"
                      href="https://twisty.network/checkout"
                    >
                      <i className="mdi mdi-cart" />
                      Efetuar Compra
                    </a>
                  </div>
                </div>
                <div className="category__list--item">
                  <div className="category__list__item--title">
                    <img
                      href=""
                      data-remote="/package/5382725"
                      src="https://dunb17ur4ymx4.cloudfront.net/packages/images/5ec149391336a82df26d0e8ddc615b58d9d683f6.png"
                      className="img-rounded twisty-net__toogle--modal"
                    />
                  </div>
                  <div className="category__list__item--details">
                    <p className="tituloItem">MVP Mensal</p>
                    <div className="__item__price--list">
                      <p className="__item--price">
                        74.99 BRL
                        <small />
                      </p>
                    </div>
                  </div>
                  <div className="category__list__item--buttons">
                    <a
                      href="vantagens/mvp.html"
                      target="_blank"
                      className="cta "
                      cta-type="info"
                    >
                      <i
                        className="fa fa-question"
                        data-modal-toggler="mvpMensal"
                      />
                    </a>
                    <a
                      className="cta"
                      cta-type="buy"
                      href="https://twisty.network/checkout"
                    >
                      <i className="mdi mdi-cart" />
                      Efetuar Compra
                    </a>
                  </div>
                </div>
                <div className="category__list--item">
                  <div className="category__list__item--title">
                    <img
                      href=""
                      data-remote="/package/5382725"
                      src="https://dunb17ur4ymx4.cloudfront.net/packages/images/5ec149391336a82df26d0e8ddc615b58d9d683f6.png"
                      className="img-rounded twisty-net__toogle--modal"
                    />
                  </div>
                  <div className="category__list__item--details">
                    <p className="tituloItem">MVP Mensal</p>
                    <div className="__item__price--list">
                      <p className="__item--price">
                        74.99 BRL
                        <small />
                      </p>
                    </div>
                  </div>
                  <div className="category__list__item--buttons">
                    <a
                      href="vantagens/mvp.html"
                      target="_blank"
                      className="cta "
                      cta-type="info"
                    >
                      <i
                        className="fa fa-question"
                        data-modal-toggler="mvpMensal"
                      />
                    </a>
                    <a
                      className="cta"
                      cta-type="buy"
                      href="https://twisty.network/checkout"
                    >
                      <i className="mdi mdi-cart" />
                      Efetuar Compra
                    </a>
                  </div>
                </div>
                <div className="category__list--item">
                  <div className="category__list__item--title">
                    <img
                      href=""
                      data-remote="/package/5382725"
                      src="https://dunb17ur4ymx4.cloudfront.net/packages/images/5ec149391336a82df26d0e8ddc615b58d9d683f6.png"
                      className="img-rounded twisty-net__toogle--modal"
                    />
                  </div>
                  <div className="category__list__item--details">
                    <p className="tituloItem">MVP Mensal</p>
                    <div className="__item__price--list">
                      <p className="__item--price">
                        74.99 BRL
                        <small />
                      </p>
                    </div>
                  </div>
                  <div className="category__list__item--buttons">
                    <a
                      href="vantagens/mvp.html"
                      target="_blank"
                      className="cta "
                      cta-type="info"
                    >
                      <i
                        className="fa fa-question"
                        data-modal-toggler="mvpMensal"
                      />
                    </a>
                    <a
                      className="cta"
                      cta-type="buy"
                      href="https://twisty.network/checkout"
                    >
                      <i className="mdi mdi-cart" />
                      Efetuar Compra
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <input type="text" id="ipServer" defaultValue="twisty.network" />
      <div className="twisty-net-wrapper">
        <div className="footer-twisty-net" id={41012}>
          <Footer />
          <dialog
            className="modal"
            data-loading-modal=""
            data-modal-type="package"
          >
            <div className="t-modal-loading">
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 25C2 37.7026 12.2974 48 25 48C37.7026 48 48 37.7026 48 25C48 12.2974 37.7026 2 25 2"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="t-modal-content">
              <button
                className="t-modal-content--close"
                aria-label="Close Modal"
              >
                <i aria-hidden="true" className="mdi mdi-window-close" />
              </button>
              <div className="t-modal-content__box"></div>
            </div>
          </dialog>
          <dialog
            className="modal"
            data-loading-modal=""
            data-modal-type="selecionarCategoria"
          >
            <div className="t-modal-loading">
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 25C2 37.7026 12.2974 48 25 48C37.7026 48 48 37.7026 48 25C48 12.2974 37.7026 2 25 2"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="t-modal-content">
              <div className="t-modal-content__box">
                <div className="t-modal-content__box__categoryModal">
                  <h3>Selecione um Item</h3>
                  <p>Clique em qualquer lugar fora para sair desta aba.</p>
                  <ul>
                    <li>
                      <a href="phoenix.html" className="">
                        <img src="https://visage.surgeplay.com/head/512/Epicphoenix766?y=30" />
                        R. UP Phoenix
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </dialog>
          <dialog
            className="modal"
            data-loading-modal=""
            data-modal-type="mvpMensal"
          >
            <div className="t-modal-loading">
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 25C2 37.7026 12.2974 48 25 48C37.7026 48 48 37.7026 48 25C48 12.2974 37.7026 2 25 2"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="t-modal-content">
              <button
                className="t-modal-content--close"
                aria-label="Close Modal"
              >
                <i aria-hidden="true" className="mdi mdi-window-close" />
              </button>
              <div className="t-modal-content__box">
                <div className="t-modal-content__box__categoryModal">
                  <h3>Selecione um asd</h3>
                  <ul>
                    <li>
                      <a href="categoria/ranks.html">
                        <img src="https://media.discordapp.net/attachments/896083092656234506/1124908490805219419/HaunzMC_sem_fundo.png?width=566&height=566" />
                        Global
                      </a>
                    </li>
                    <li>
                      <a href="categoria/ranks.html" className="">
                        <img src="https://staticassets.hypixel.net/store/icons/gifts/3.png" />
                        Cash &amp; Moedas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}

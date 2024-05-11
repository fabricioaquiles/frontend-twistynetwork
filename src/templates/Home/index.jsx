import { Banner } from '../../components/Banner'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AuthModal } from '../../components/Modals'

import {useState} from 'react';

export function HomeTemplate() {

  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <>
        
        <Banner />
        <AuthModal isOpen={isAuthModalOpen}/>

        <div className="header-splash">
          <div className="splash__background" />
        </div>
        
        <Header />

        <div className="twisty-net-wrapper">
          <div className="notification" />
          <div className="body--with-sidebar">
            <aside className="twisty-net-sidebar">
              <button
                className="trigger"
                data-modal-toggler="selecionarCategoria"
                aria-label="Seleione uma Categoria"
                style={{ borderRadius: 4 }}
              >
                <span className="mdi mdi-sail-boat" aria-hidden="true" />
                <span
                  className="category__selector--text"
                  aria-hidden="true"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  <span style={{ fontWeight: 600 }}>Selecionar Categoria</span>
                  Clique para Navegar
                </span>
              </button>
              <div className="sidebar-header sidebar-round">
                <p>
                  <i className="mdi mdi-close mobile-icon close-mobile" />
                  <i className="mdi mdi-menu mobile-icon" />
                  Selecione um Item
                </p>
              </div>
              <div className="sidebar-nav" id="toggle-mobile-nav">
                <ul>
                  <li className="twisty-net-toggle-dropdown">
                    <a href="servidor/phoenix.html">R. UP Phoenix</a>
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
                <div className="home-splash">
                  <div className="welcome-s">
                    <p style={{ marginLeft: "0.1rem", fontSize: 14 }}>
                      Explore um mundo inovador!
                    </p>
                    <p style={{ textTransform: "none" }}>
                      Lançamento RankUP Phoenix{" "}
                      <span className="mdi mdi-fireplace" />
                    </p>
                  </div>
                  <header className="twisty-net-header mobile-hidden">
                    <div className="twisty-net-wrapper prioritate" id={41012}>
                      <div className="top-bar">
                        <div
                          className="profile-avatar"
                          data-izimodal-open="#modal"
                          onClick={() => {
                            setAuthModalOpen(true);
                          }}
                        >
                          <div className="profile-description">
                            {/*Quem é Você só pode ser visível caso o usuario n esteja logado, caso contrario, visibility hidden*/}
                            <p className="profile-title">Anônimo</p>
                            <p className="profile-description-text">
                              Clique para entrar
                            </p>
                          </div>
                          <div className="profile-head">
                            <img
                              className="avatar-head"
                              src="https://visage.surgeplay.com/face/512/Teryza.png"
                              alt="Cabeça de Quem?"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                </div>
                <p>
                  <span style={{ fontSize: 15 }}>
                    Bem-vindo ao Prison Phoenix, o seu destino para uma
                    experiência de rankup no Minecraft como nunca antes vista!
                    Aqui, a inovação é nossa bússola, e nosso universo é seu
                    para explorar.
                    <br />
                    <br />
                    Em nosso servidor, a diversão é interminável. Desde
                    construir sua própria base em um asteroide até dominar a
                    arte da mineração espacial, há sempre algo novo para
                    descobrir. Junte-se a outros jogadores em emocionantes
                    competições de corrida de naves, ou embarque em aventuras
                    solo para encontrar tesouros escondidos em planetas
                    distantes. A escolha é sua, e as possibilidades são
                    infinitas.
                    <br />
                    <br />
                    Além disso, aqui no Prison Phoenix, valorizamos a companhia
                    dos nossos amigos de quatro patas! Com um sistema de pets
                    personalizável, você pode ter um fiel companheiro para
                    acompanhá-lo em todas as suas aventuras. Desde um leal cão
                    espacial até um felino cósmico, a decisão é sua. &nbsp;
                  </span>
                </p>
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
                        <a href="servidor/phoenix.html" className="">
                          <img src="https://visage.surgeplay.com/head/512/Epicphoenix766?y=30" />
                          R. UP Phoenix
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
    </>
  );
}

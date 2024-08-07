import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AuthModal, NavigationModal } from "@/components/Modals";

import { useAuth } from "@/store/auth";
import { useAuthModal } from "@/store/modal";
import { useState } from "react";

export function HomeTemplate() {
  const { userName } = useAuth((state) => state);
  const { isAuthModalOpen, setAuthModalOpen } = useAuthModal((state) => state);
  const [isNavigationModalOpen, setNavigationModalOpen] = useState(false);

  const handleAuthModalOpen = () => setAuthModalOpen(true);
  const handleAuthModalClose = () => setAuthModalOpen(false);

  const handleNavigationModalOpen = () => setNavigationModalOpen(true);
  const handleNavigationModalClose = () => setNavigationModalOpen(false);
  return (
    <>
      <>
        <Banner />
        <AuthModal
          isOpen={isAuthModalOpen}
          handleClose={handleAuthModalClose}
        />

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
                onClick={() => {
                  handleNavigationModalOpen();
                }}
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
              <div
                onClick={() => {
                  handleNavigationModalOpen();
                }}
                className="sidebar-header sidebar-round"
              >
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
                  {userName == null && (
                    <header className="twisty-net-header mobile-hidden">
                      <div className="twisty-net-wrapper prioritate" id={41012}>
                        <div className="top-bar">
                          <div
                            className="profile-avatar"
                            data-izimodal-open="#modal"
                            onClick={() => {
                              handleAuthModalOpen();
                            }}
                          >
                            <div className="profile-description">
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
                  )}
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
            <NavigationModal
              isOpen={isNavigationModalOpen}
              handleClose={handleNavigationModalClose}
            />
          </div>
        </div>
      </>
    </>
  );
}

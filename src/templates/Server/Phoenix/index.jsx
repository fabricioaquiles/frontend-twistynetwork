import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavigationModal } from "@/components/Modals";
import { ProductDetailsModal } from "@/components/Modals/ProductsDetailsModal";
import { useProductsDetailsModal } from "@/store/modal";
import { ServerPhoenixSidebar } from "@/templates/Server/Phoenix/Sidebar";
import dynamic from "next/dynamic";
import { useState } from "react";

const ServerProducts = dynamic(() => import("@/components/ServerProducts"), {
  ssr: false,
});

export function ServerPhoenixTemplate() {
  const [isNavigationModalOpen, setNavigationModalOpen] = useState(false);
  const { setIsOpenProductDetails } = useProductsDetailsModal((state) => state);

  const handleProductsDetailsModalClose = () => setIsOpenProductDetails(false);

  const handleNavigationModalOpen = () => setNavigationModalOpen(true);
  const handleNavigationModalClose = () => setNavigationModalOpen(false);

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
              onClick={() => {
                handleNavigationModalOpen();
              }}
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
            <ServerPhoenixSidebar />
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
                <ServerProducts filter="vips" />
              </div>
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
          <ProductDetailsModal handleClose={handleProductsDetailsModalClose} />
        </div>
      </div>
    </>
  );
}

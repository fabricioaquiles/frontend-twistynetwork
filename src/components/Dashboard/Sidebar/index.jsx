export function DashboardSidebar() {
  return (
    <>
      <div
        className="nk-sidebar nk-sidebar-fixed is-dark "
        data-content="sidebarMenu"
      >
        <div className="nk-sidebar-element nk-sidebar-head">
          <div className="nk-menu-trigger">
            <a
              href="#"
              className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
              data-target="sidebarMenu"
            >
              <em className="icon ni ni-arrow-left" />
            </a>
            <a
              href="#"
              className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
              data-target="sidebarMenu"
            >
              <em className="icon ni ni-menu" />
            </a>
          </div>
          <div className="nk-sidebar-brand">
            <a href="#" className="logo-link nk-sidebar-logo">
              <img
                className="logo-light logo-img"
                src="/assets/img/twisty.PNG"
                alt="logo"
                style={{ marginLeft: "3rem" }}
              />
            </a>
          </div>
        </div>
        <div className="nk-sidebar-element nk-sidebar-body">
          <div className="nk-sidebar-content">
            <div className="nk-sidebar-menu" data-simplebar="">
              <ul className="nk-menu">
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">
                    Painel de Controle
                  </h6>
                </li>
                <li className="nk-menu-item">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-opt-alt-fill" />
                    </span>
                    <span className="nk-menu-text">Gerenciamento Central</span>
                  </a>
                </li>
                <li className="nk-menu-item">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-google-pay-fill" />
                    </span>
                    <span className="nk-menu-text">Cupons de desconto</span>
                  </a>
                </li>
                <li className="nk-menu-item">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-google-pay-fill" />
                    </span>
                    <span className="nk-menu-text">Gerenciar produtos</span>
                  </a>
                </li>
                <li className="nk-menu-item">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-google-pay-fill" />
                    </span>
                    <span className="nk-menu-text">Token de Pagamento</span>
                  </a>
                </li>
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">
                    Gerenciamento
                  </h6>
                </li>
                <li className="nk-menu-item">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-user-list-fill" />
                    </span>
                    <span className="nk-menu-text">Gerenciar Usuários</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

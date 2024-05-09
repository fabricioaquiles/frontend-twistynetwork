export function Header() {
  return (
    <>
      <header className="twisty-net-header">
        <div className="twisty-net-wrapper prioritate" id={41012}>
          <div className="top-bar">
            {/*Este profile-avatar só pode ser vísivel caso ele esteja logado, caso contrario, visibility hidden, nao display none*/}
            <div className="profile-avatar bottom-avatar mobile-hidden">
              <div className="profile-description">
                <p className="profile-title">
                  <span style={{ color: "#F44336", fontWeight: 800 }}>
                    ADMIN
                  </span>{" "}
                  Maciel
                </p>
                <p className="profile-description-text">(Você)</p>
              </div>
              <div className="profile-head">
                <img
                  className="avatar-logged"
                  src="https://visage.surgeplay.com/head/512/EduKof.png"
                  alt="Cabeça de EduKof"
                />
              </div>
            </div>
            <a
              href="../index.htm"
              className="icon-theme bottom-avatar mobile-hidden"
            >
              <i className="mdi mdi-lightbulb-cfl-off" />{" "}
              {/* Escuro Habilitado */}
              {/* <i class="mdi mdi-lightbulb-cfl"></i> Claro Habilitado */}
            </a>
          </div>
          <div className="twisty-net-header-g">
            <div className="widget minecraft-widget">
              <div className="widget-icon">
                <span className="player-count">Carregando..</span>
                <i className="mdi mdi-axe" />
              </div>
              <div className="description-widget">
                <p className="widget-title">twisty.network</p>
                <p className="widget-description">CLIQUE PARA COPIAR</p>
              </div>
            </div>
            <div className="header-logo">
              <a href="/">
                <img
                  src="/assets/img/twisty.PNG"
                  alt="server logo"
                  style={{ width: "24rem", marginBottom: "2rem" }}
                  animation-logo="pulse"
                  className="header-logo-image"
                />

              </a>
            </div>
            <a
              className="widget discord-widget"
              href="https://discord.gg/PvuFEtAxww"
              target="_blank"
            >
              <div className="description-widget">
                <p className="widget-title">Comunidade Discord</p>
                <p className="widget-description">Junte-se ao servidor</p>
              </div>
              <div className="widget-icon">
                <span id="discord-count">Carregando..</span>
                <i className="mdi mdi-discord" />
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

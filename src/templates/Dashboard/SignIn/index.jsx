export function DashboardSignInTemplate() {
  return (
    <>
      <div className="nk-wrap nk-wrap-nosidebar">
        <div className="nk-content ">
          <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
            <div className="brand-logo pb-4 text-center">
              <a href="#" className="logo-link">
                <img
                  className="logo-light "
                  src="/assets/img/twisty.PNG"
                  alt="logo"
                  style={{ width: "16%", marginRight: "2rem" }}
                />
              </a>
            </div>
            <div className="card card-bordered">
              <div className="card-inner card-inner-lg">
                <div className="nk-block-head">
                  <div className="nk-block-head-content">
                    <h4 className="nk-block-title">Logue-se em sua Conta</h4>
                    <div className="nk-block-des">
                      <p>
                        Acesse nosso painel entrando em sua conta{" "}
                        <b>Administrador.</b>
                      </p>
                    </div>
                  </div>
                </div>
                <form action="#">
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="email1">
                        Email
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="email1"
                        placeholder="Insira seu email de acesso"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="password">
                        Senha
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <a
                        href="#"
                        className="form-icon form-icon-right passcode-switch lg"
                        data-target="password"
                      >
                        <em className="passcode-icon icon-show icon ni ni-eye" />
                        <em className="passcode-icon icon-hide icon ni ni-eye-off" />
                      </a>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="password"
                        placeholder="Insira sua senha"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="btn btn-lg btn-primary btn-block"
                    >
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

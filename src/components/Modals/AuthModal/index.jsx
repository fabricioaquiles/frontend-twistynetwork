import { useAuthModalStore } from '../../../store/modal'

export function AuthModal({isOpen}) {

  // const isOpen = useAuthModalStore((state) => state.isOpen);
  // const setIsOpen = useAuthModalStore((state) => state.setIsOpen);

  return (
    <>
      <div id="modal" style={{ display: "none"}}>
        <div id="loader" style={{ display: "none" }} className="login-loader">
          <svg
            id="successAnimation"
            className="animated"
            xmlns="http://www.w3.org/2000/svg"
            width={70}
            height={70}
            viewBox="0 0 70 70"
          >
            <path
              id="successAnimationResult"
              fill="#D8D8D8"
              d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
            ></path>
            <circle
              id="successAnimationCircle"
              cx={35}
              cy={35}
              r={24}
              stroke="#979797"
              strokeWidth={2}
              strokeLinecap="round"
              fill="transparent"
            />
            <polyline
              id="successAnimationCheck"
              stroke="#979797"
              strokeWidth={2}
              points="23 34 34 43 47 27"
              fill="transparent"
            />
          </svg>
          <div className="loading__animated">
            <img
              src="attachments/455777545485549589/785783911585284106/tail-spin.svg"
              width="64px"
            />
          </div>
        </div>
        <div className="login-panel">
          <p className="login-title">Insira seu nickname para prosseguir</p>
          <p className="login-description">
            O nick não pode conter espaços ou símbolos, insira apenas o nickname
            que deseja efetuar compras.
          </p>
          <form method="post" action="/login">
            <div className="username">
              <div className="twisty-net-login">
                <div id="IGN_MC">
                  <img
                    src="https://visage.surgeplay.com/face/32/X-Steve"
                    alt=""
                    id="avatar_login"
                  />
                  <input
                    type="text"
                    name="ign"
                    id="mc_IGN_INPUT"
                    autoComplete="off"
                  />
                </div>
                <button className="" type="submit">
                  Prosseguir
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

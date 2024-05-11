import { useAuthModalStore } from '../../../store/modal'
import { Modal } from '@mui/material';

export function AuthModal({isOpen, handleClose}) {

  // const isOpen = useAuthModalStore((state) => state.isOpen);
  // const setIsOpen = useAuthModalStore((state) => state.setIsOpen);

  return (
    <>
    
      <Modal open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
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
      </Modal>
    </>
  );
}

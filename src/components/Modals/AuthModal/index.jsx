import { useAuthModalStore } from "../../../store/modal";
import { Modal, Box, Fade, Backdrop } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#1a1a26",
  border: "2px solid #1a1a26",
  boxShadow: 24,
  p: 4,
};

export function AuthModal({ isOpen, handleClose }) {
  
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <div className="login-panel">
              <p className="login-title">Insira seu nickname para prosseguir</p>
              <p className="login-description">
                O nick não pode conter espaços ou símbolos, insira apenas o
                nickname que deseja efetuar compras.
              </p>
              <form method="post">
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
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

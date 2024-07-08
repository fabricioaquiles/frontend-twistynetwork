import { useAuth } from "@/store/auth";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { useState } from "react";
import { toast } from "sonner";

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
  const setUserName = useAuth((state) => state.setUserName);

  const [inputName, setInputName] = useState("");

  function handleSetInputName(arg) {
    setInputName(arg);
  }

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
                        onChange={(e) => handleSetInputName(e.target.value)}
                      />
                    </div>
                    <button
                      className=""
                      onClick={(e) => {
                        e.preventDefault();

                        if (inputName == "") {
                          toast.error(
                            "Você deve inserir dados de login válidos."
                          );
                          return;
                        }
                        setUserName(inputName);
                        toast.success("Login realizado com sucesso.");
                      }}
                      type="submit"
                    >
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

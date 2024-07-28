import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { useRouter } from "next/navigation";

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
  outline: 0,
};

export function NavigationModal({ isOpen, handleClose }) {
  const router = useRouter();

  return (
    <>
      <Modal
        className="navigationModal"
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
            <div className="t-modal-content">
              <div className="t-modal-content__box">
                <div className="t-modal-content__box__categoryModal">
                  <h3>Selecione um Item</h3>
                  <p>Clique em qualquer lugar fora para sair desta aba.</p>
                  <ul>
                    <li>
                      <a
                        onClick={() => {
                          router.push("/server/phoenix");
                        }}
                        className=""
                      >
                        <img src="https://visage.surgeplay.com/head/512/Epicphoenix766?y=30" />
                        R. UP Phoenix
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

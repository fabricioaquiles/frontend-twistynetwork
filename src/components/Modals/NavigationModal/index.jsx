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

export function NavigationModal({ isOpen, handleClose }) {
  return (
    <>
      <dialog className="modal" data-loading-modal="" data-modal-type="package">
        <div className="t-modal-content">
          <button className="t-modal-content--close" aria-label="Close Modal">
            <i aria-hidden="true" className="mdi mdi-window-close" />
          </button>
          <div className="t-modal-content__box"></div>
        </div>
      </dialog>
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
            <dialog
              className="modal"
              data-loading-modal=""
              data-modal-type="selecionarCategoria"
            >
              <div className="t-modal-loading">
                <svg
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 25C2 37.7026 12.2974 48 25 48C37.7026 48 48 37.7026 48 25C48 12.2974 37.7026 2 25 2"
                    stroke="white"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="t-modal-content">
                <div className="t-modal-content__box">
                  <div className="t-modal-content__box__categoryModal">
                    <h3>Selecione um Item</h3>
                    <p>Clique em qualquer lugar fora para sair desta aba.</p>
                    <ul>
                      <li>
                        <a href="servidor/phoenix.html" className="">
                          <img src="https://visage.surgeplay.com/head/512/Epicphoenix766?y=30" />
                          R. UP Phoenix
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </dialog>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

import { useProductsDetailsModal } from "@/store/modal";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { useQuery } from "react-query";

async function getProduct(id) {
  const response = await axios.get(
    `https://backend-twistynetwork.vercel.app/products/${id}`
  );
  return response.data;
}

export function ProductDetailsModal({ isOpen, handleClose }) {
  const { productDetailsId } = useProductsDetailsModal((state) => state);

  const { status, data } = useQuery({
    queryKey: ["productDetail"],
    queryFn: () => getProduct(productDetailsId),
  });

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
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 800,
              bgcolor: "#1a1a26",
              border: "2px solid #1a1a26",
              boxShadow: 24,
              p: 4,
            }}
          >
            {!(status === "pending" || status === "error") && data?.description}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

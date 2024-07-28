import { useProductsDetailsModal } from "@/store/modal";
import axios from "axios";
import { useQuery } from "react-query";
import { ProductsSkeleton } from "./ProductsSkeleton";

async function getProducts(filter) {
  const response = await axios.get(
    `https://backend-twistynetwork.vercel.app/products/category/${filter}`
  );
  return response.data;
}

async function getProduct(id) {
  const response = await axios.get(
    `https://backend-twistynetwork.vercel.app/products/${id}`
  );
  return response.data;
}

export default function ServerProducts({ filter }) {
  const { setProductDetailsData, setProductDetailsModalOpen } =
    useProductsDetailsModal((state) => state);

  const handleProductsDetailsModalOpen = () => setProductDetailsModalOpen(true);

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(filter),
  });

  return (
    <>
      {isLoading ? (
        <ProductsSkeleton cards={4} />
      ) : (
        data?.map((item, index) => (
          <div className="category__list--item">
            <div className="category__list__item--title">
              <img
                href=""
                data-remote="/package/5382725"
                src={item.picture}
                className="img-rounded twisty-net__toogle--modal"
              />
            </div>
            <div className="category__list__item--details">
              <p className="tituloItem">{item.title}</p>
              <div className="__item__price--list">
                <p className="__item--price">
                  {item.price} BRL
                  <small />
                </p>
              </div>
            </div>
            <div className="category__list__item--buttons">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setProductDetailsData(getProduct(item.id));
                  handleProductsDetailsModalOpen();
                }}
                className="cta "
                cta-type="info"
              >
                <i className="fa fa-question" data-modal-toggler="mvpMensal" />
              </a>
              <a
                className="cta"
                cta-type="buy"
                href="https://twisty.network/checkout"
              >
                <i className="mdi mdi-cart" />
                Efetuar Compra
              </a>
            </div>
          </div>
        ))
      )}
    </>
  );
}

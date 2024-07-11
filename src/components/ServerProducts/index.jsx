import axios from "axios";
import { useQuery } from "react-query";

const getProducts = async (filter) => {
  const response = await axios.get(
    `https://backend-twistynetwork.vercel.app/products?filterType=category?filterValue=${filter}`
  );
  return response.data;
};

export function ServerProducts({ filter }) {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts(filter),
  });

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        data.map((product) => {
          <div className="category__list--item">
            <div className="category__list__item--title">
              <img
                href=""
                data-remote="/package/5382725"
                src={product.picture}
                className="img-rounded twisty-net__toogle--modal"
              />
            </div>
            <div className="category__list__item--details">
              <p className="tituloItem">{product.title}</p>
              <div className="__item__price--list">
                <p className="__item--price">
                  {product.price} BRL
                  <small />
                </p>
              </div>
            </div>
            <div className="category__list__item--buttons">
              <a href="#" target="_blank" className="cta " cta-type="info">
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
          </div>;
        })
      )}
    </>
  );
}

import axios from "axios";
import { useQuery } from "react-query";

async function getProducts(filter) {
  const response = await axios.get(
    `https://backend-twistynetwork.vercel.app/products?filterType=category?filterValue=${filter}`
  );
  return response.data;
}

export default function ServerProducts({ filter }) {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts(filter),
  });

  return (
    <>
      {isLoading ? (
        <></>
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
          </div>
        ))
      )}
    </>
  );
}

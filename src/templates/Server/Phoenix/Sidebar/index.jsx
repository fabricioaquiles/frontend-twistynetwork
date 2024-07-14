import { usePathname, useRouter } from "next/navigation";

export function ServerPhoenixSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const getCategoryNameFormatted = {
    "/server/phoenix": "VIPs",
    "/server/phoenix/cash": "Cash",
    "/server/phoenix/pets": "Pets",
  };

  const getCategoryIcon = {
    "/server/phoenix": "mdi mdi-cart-arrow-up",
    "/server/phoenix/cash": "mdi mdi-sword",
    "/server/phoenix/pets": "mdi mdi-sword"
  }

  return (
    <>
      <div className="t-modal-navigation">
        <div className="t-modal-navigation__header">
          <span className={getCategoryIcon(pathname)}/>
          <div>
            <span>
              <b style={{ textTransform: "uppercase" }}>
                Navegando na Categoria
              </b>
            </span>
            <p>{getCategoryNameFormatted(pathname)}</p>
          </div>
        </div>
        <ul className="t-modal-navigation__list">
          <li>
            <a
              className={pathname === "/server/phoenix" ? "active" : ""}
              href="/server/phoenix"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === "/server/phoenix") return;
                router.push("/server/phoenix");
              }}
            >
              VIPs
            </a>
          </li>
          <li>
            <a
              className={pathname === "/server/phoenix/cash" ? "active" : ""}
              href="/server/phoenix/cash"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === "/server/phoenix/cash") return;
                router.push("/server/phoenix/cash");
              }}
            >
              Cash
            </a>
          </li>
          <li>
            <a
              className={pathname === "/server/phoenix/pets" ? "active" : ""}
              href="/server/phoenix/pets"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === "/server/phoenix/pets") return;
                router.push("/server/phoenix/pets");
              }}
            >
              Pets
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

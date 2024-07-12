import Skeleton from "react-loading-skeleton";

export function ProductsSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className="card-skeleton" style={{ marginRight: "10px" }}>
        <div className="left-col">
          <Skeleton circle width={40} height={40} />
        </div>
        <div className="bottom-col">
          <Skeleton style={{ marginBottom: "0.6rem", height: 40 }} />
          <Skeleton style={{ marginBottom: "0.6rem", height: 20 }} />
          <Skeleton style={{ marginBottom: "0.6rem", height: 40 }} />
          <Skeleton style={{ marginBottom: "0.6rem", height: 40 }} />
        </div>
      </div>
    ));
}

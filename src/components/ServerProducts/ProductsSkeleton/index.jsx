import Skeleton from "react-loading-skeleton";

export function ProductsSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className="card-skeleton" style={{ marginRight: "10px" }}>
        <div className="left-col">
          <Skeleton circle width={40} height={40} />
          <Skeleton height={20} />
          <Skeleton height={10} />
          <Skeleton count={2} height={20} />
        </div>
      </div>
    ));
}

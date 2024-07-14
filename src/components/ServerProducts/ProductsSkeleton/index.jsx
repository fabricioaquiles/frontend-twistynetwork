import Skeleton from "react-loading-skeleton";

export function ProductsSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className="card-skeleton" style={{ marginRight: "10px" }}>
        <div className="card-skeleton-col">
          <Skeleton circle width={60} height={60} />
          <Skeleton
            width={100}
            height={13}
            style={{ marginTop: 10, borderRadius: 10 }}
          />
          <Skeleton
            width={180}
            height={10}
            style={{ marginTop: -20, borderRadius: 10 }}
          />
          <Skeleton
            width={150}
            height={10}
            style={{
              marginTop: -20,
              marginBottom: "25px",
              borderRadius: 10,
            }}
          />
          <Skeleton width={150} height={15} style={{ borderRadius: 10 }} />
        </div>
      </div>
    ));
}

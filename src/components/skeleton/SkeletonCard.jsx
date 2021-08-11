import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./SkeletonCard.scss";

const SkeletonCard = () => {
  return (
    <div className="skeleton">
      <SkeletonTheme color="#b2e1e6" highlightColor="#d8f0f3">
        <div className="skeleton-sub">
          <Skeleton height={30} />
        </div>
        <div className="skeleton-top">
          <div className="skeleton-top-one">
            <Skeleton className="ske" />
          </div>
          <div className="skeleton-top-two">
            <div className="skeleton-top-two-grid">
              <Skeleton height={198} />
            </div>
            <div className="skeleton-top-two-grid">
              <Skeleton height={198} />
            </div>
            <div className="skeleton-top-two-grid">
              <Skeleton height={198} />
            </div>
            <div className="skeleton-top-two-grid">
              <Skeleton height={198} />
            </div>
          </div>
        </div>
        <div className="skeleton-medium">
          <div className="skeleton-medium-demo">
            <Skeleton height={30} />
          </div>
          <div className="skeleton-medium-demo">
            <Skeleton height={30} />
          </div>
          <div className="skeleton-medium-demo">
            <Skeleton height={30} />
          </div>
          <div className="skeleton-medium-demo">
            <Skeleton height={30} />
          </div>
          <div className="skeleton-medium-demo">
            <Skeleton height={30} />
          </div>
          <div className="skeleton-medium-demo">
            <Skeleton height={30} />
          </div>
        </div>
        {Array(1)
          .fill()
          .map((item, index) => (
            <div key={index} className="skeleton-bottom">
              <div className="skeleton-bottom-head">
                <Skeleton width={400} />
              </div>

              <div className="skeleton-bottom-grid">

                <div className="skeleton-bottom-grid-five">
                  <div className="skeleton-bottom-grid-five-image">
                    <Skeleton height={200} />
                  </div>
                  <div className="skeleton-bottom-grid-five-title">
                    <Skeleton height={40} />
                  </div>
                  <div className="skeleton-bottom-grid-five-price">
                    <Skeleton height={30} />
                  </div>
                  <div className="skeleton-bottom-grid-five-sell">
                    <Skeleton height={20} />
                  </div>

                </div>
                <div className="skeleton-bottom-grid-five">
                  <div className="skeleton-bottom-grid-five-image">
                    <Skeleton height={200} />
                  </div>
                  <div className="skeleton-bottom-grid-five-title">
                    <Skeleton height={40} />
                  </div>
                  <div className="skeleton-bottom-grid-five-price">
                    <Skeleton height={30} />
                  </div>
                  <div className="skeleton-bottom-grid-five-sell">
                    <Skeleton height={20} />
                  </div>

                </div>
                <div className="skeleton-bottom-grid-five">
                  <div className="skeleton-bottom-grid-five-image">
                    <Skeleton height={200} />
                  </div>
                  <div className="skeleton-bottom-grid-five-title">
                    <Skeleton height={40} />
                  </div>
                  <div className="skeleton-bottom-grid-five-price">
                    <Skeleton height={30} />
                  </div>
                  <div className="skeleton-bottom-grid-five-sell">
                    <Skeleton height={20} />
                  </div>

                </div>
                <div className="skeleton-bottom-grid-five">
                  <div className="skeleton-bottom-grid-five-image">
                    <Skeleton height={200} />
                  </div>
                  <div className="skeleton-bottom-grid-five-title">
                    <Skeleton height={40} />
                  </div>
                  <div className="skeleton-bottom-grid-five-price">
                    <Skeleton height={30} />
                  </div>
                  <div className="skeleton-bottom-grid-five-sell">
                    <Skeleton height={20} />
                  </div>

                </div>
                <div className="skeleton-bottom-grid-five">
                  <div className="skeleton-bottom-grid-five-image">
                    <Skeleton height={200} />
                  </div>
                  <div className="skeleton-bottom-grid-five-title">
                    <Skeleton height={40} />
                  </div>
                  <div className="skeleton-bottom-grid-five-price">
                    <Skeleton height={30} />
                  </div>
                  <div className="skeleton-bottom-grid-five-sell">
                    <Skeleton height={20} />
                  </div>

                </div>




              </div>


            </div>
          ))}
      </SkeletonTheme>

    </div>
  );
};

export default SkeletonCard;
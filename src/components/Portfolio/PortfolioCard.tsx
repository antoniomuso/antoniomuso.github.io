"use client";

import { Star } from "lucide-react";
import { useState } from "react";

export type PortfolioProps = {
  title: string;
  description: string;
  url: string;
  stars: number;
};

const PortfolioCard = ({ title, description, stars, url }: PortfolioProps) => {
  return (
    <div key={title} className="blog-item padd-15">
      <div className="blog-item-inner shadow-dark">
        <a href={url}>
          <div className="blog-img">
            <img
              src="/imgs/portfolio/Github-Logo-PNG-Clipart.png"
              alt="Creative Slideshow"
            />
            <div className="blog-date">
              <div className="Row centered">
                <Star size={20} fill="white" />
              </div>
              <div className="Row centered stars-font-size">{stars}</div>
            </div>
          </div>
        </a>

        <div className="blog-info">
          <a href={url}>
            <h4 className={`blog-title clickable`}>{title}</h4>
          </a>
          <p className="blog-description">{description}</p>
          {/* <p className="blog-tags">
            Tags: <a href="#">${language}</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

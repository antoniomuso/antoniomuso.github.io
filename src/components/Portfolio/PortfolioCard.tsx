import { Star } from "lucide-react";

export type PortfolioProps = {
  title: string;
  description: string;
  stars: number;
};

const PortfolioCard = ({ title, description, stars }: PortfolioProps) => {
  return (
    <div key={title} className="blog-item padd-15">
      <div className="blog-item-inner shadow-dark">
        <div className="blog-img">
          <img src="/imgs/portfolio/Github-Logo-PNG-Clipart.png" alt="Creative Slideshow" />
          <div className="blog-date">
            <div className="Row centered">
              <Star size={20} fill="white" />
            </div>
            <div className="Row centered stars-font-size">
                {stars}
            </div>
          </div>
        </div>
        <div className="blog-info">
          <h4 className="blog-title">{title}</h4>
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

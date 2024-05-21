import "../styles/star-rating.scss";

const StarRating: React.FC<{ rating: { rate: number; count: number } }> = ({
  rating,
}) => {
  const { rate, count } = rating;
  const fullStars = Math.floor(rate);
  const partialStarPercentage = (rate - fullStars) * 100;
  const remainingStar = 5 - Math.ceil(rate);

  const renderFullStars = () => {
    const arr = [];
    for (let i = 0; i < fullStars; i++) {
      arr.push(<span className="star filled" key={i}></span>);
    }
    return arr;
  };

  // for decimal ratings
  const renderPartialStar = () => (
    <span
      className="star"
      style={{
        backgroundImage: `linear-gradient(to right, #f8d24e ${partialStarPercentage}%, lightgray 0%)`,
      }}
    ></span>
  );

  const renderRemainingStars = () => {
    const arr = [];
    for (let i = 0; i < remainingStar; i++) {
      arr.push(<span className="star" key={i}></span>);
    }
    return arr;
  };

  return (
    <div className="star-rating">
      <p>{rate}</p>
      {renderFullStars()}
      {renderPartialStar()}
      {partialStarPercentage > 0 && renderRemainingStars()}
      <p>{`(${count})`}</p>
    </div>
  );
};

export default StarRating;

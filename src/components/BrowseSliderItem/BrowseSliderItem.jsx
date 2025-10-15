
export default function BrowseSliderItem({ img, alt, title, descr }) {
  return (
    <div className="browse__slider-item">
      <div className="browse__slider-img">
        <img src={img} alt={alt} />
      </div>
      <div className="browse__slider-text">
        <span className="browse__slider-t-hdr">{title}</span>
        <span className="browse__slider-t-descr">{descr}</span>
        <button className="btn outline">View Project</button>
      </div>
    </div>
  );
}
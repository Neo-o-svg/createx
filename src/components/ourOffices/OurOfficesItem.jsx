
export default function OurOfficesItem({ title, address, phoneNumber }) {
  return (
    <div className="our-offices-item">
      <h3 className="our-offices-item__title">{title}</h3>
      <p className="our-offices-item__address">{address}</p>
      <a href="#" className="our-offices-item__link">
        See on the map
      </a>
      <div className="our-offices-item__contacts">
        <p className="our-offices-item__call">
          <span>Call:</span> {phoneNumber}
        </p>
        <p className="our-offices-item__email">
          <span>Email:</span> hello@createx.com
        </p>
        <p className="our-offices-item__schedule">
          <span>Schedule:</span> Mon - Fri 9:00 - 18:00
        </p>
      </div>
    </div>
  );
}

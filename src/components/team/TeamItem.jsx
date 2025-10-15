
export default function TeamItem({img, name, status}) {
  return (
    <div className="team-item">
        <div className="team-item__img-wrapper">
            <img src={img} alt={`${name} image`} />
            <div className="team-item__social">
                <img src="/img/icons/linked-In.svg" alt="Linked-In" />
                <img src="/img/icons/twitter-small.svg" alt="Twitter" />
                <img src="/img/icons/facebook-small.svg" alt="Facebook" />
            </div>
        </div>
        <div className="team-item__content">
            <p className="team-item__name">
                {name}
            </p>
            <p className="team-item__status">
                {status}
            </p>
        </div>

    </div>
  )
}

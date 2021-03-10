import './card-small.css'

function CardSmall({gowth, pageViews, icon}) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={icon} alt=""/>
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt=""/>
          {gowth}%
        </span>
      </p>
    </div>
  )
}

export default CardSmall;
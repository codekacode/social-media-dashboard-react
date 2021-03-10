import './card.css'

function Card({username, followers, todayFollower, socialIcon, name}) {
  const cardClass = `card ${name}`
  return (
    <article className={cardClass}>
      <p className="card-title">
          <img src={socialIcon} alt=""/>
          {username}
      </p>
      <p className="card-followers">
          <span className="card-followers-number">{followers}</span>
          <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
          <img src="images/icon-up.svg" alt=""/>
          {todayFollower}Today
      </p>
    </article>
  )
}

export default Card;
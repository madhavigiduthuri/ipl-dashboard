// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamCard} = props
  const {name, teamImageUrl, id} = eachTeamCard
  return (
    <li>
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <div className="teamcard-container">
          <img src={teamImageUrl} alt={name} className="teamcard-image" />
          <p className="teamcard-title">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard

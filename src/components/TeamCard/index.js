// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  // console.log(teamDetails)
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard

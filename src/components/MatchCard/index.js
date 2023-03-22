// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = recentMatchDetails

  return (
    <li className="recent-item-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-competing-team-logo"
      />
      <p className="recent-competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      {matchStatus === 'Lost' ? (
        <p className="lost-match-status">{matchStatus}</p>
      ) : (
        <p className="won-match-status">{matchStatus}</p>
      )}
    </li>
  )
}
export default MatchCard

// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch

  return (
    <li className="latest-match-container">
      <div>
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue-result-text-color">{venue}</p>
        <p className="venue-result-text-color">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <hr />
      <div className="right-side-description">
        <p className="innings">First Innings</p>
        <p className="paragraph">{firstInnings}</p>

        <p className="innings">Second Innings</p>
        <p className="paragraph">{secondInnings}</p>

        <p>MAN OF THE MATCH</p>
        <p className="paragraph">{manOfTheMatch}</p>
        <p className="innings">Umpires</p>
        <p className="paragraph">{umpires}</p>
      </div>
    </li>
  )
}
export default LatestMatch

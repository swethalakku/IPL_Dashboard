// Write your code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    teamMatch: {},
    latestMatch: {},
    recentMatchesDetails: [],
    isSpinning: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const detailsOfLatestMatch = updatedData.latestMatchDetails

    // console.log(detailsOfLatestMatch)

    const updatedLatestMatchDetails = {
      umpires: detailsOfLatestMatch.umpires,
      result: detailsOfLatestMatch.result,
      manOfTheMatch: detailsOfLatestMatch.man_of_the_match,
      id: detailsOfLatestMatch.id,
      date: detailsOfLatestMatch.date,
      venue: detailsOfLatestMatch.venue,
      competingTeam: detailsOfLatestMatch.competing_team,
      competingTeamLogo: detailsOfLatestMatch.competing_team_logo,
      firstInnings: detailsOfLatestMatch.first_innings,
      secondInnings: detailsOfLatestMatch.second_innings,
      matchStatus: detailsOfLatestMatch.match_status,
    }

    // console.log(updatedData.latestMatchDetails)
    // console.log(updatedData.latestMatchDetails.competing_team)
    // console.log(updatedLatestMatchDetails)

    const detailsOfRecentMatches = updatedData.recentMatches

    const updatedRecentMatchDetails = detailsOfRecentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      teamMatch: updatedData,
      latestMatch: updatedLatestMatchDetails,
      recentMatchesDetails: updatedRecentMatchDetails,
      isSpinning: false,
    })
  }

  render() {
    const {
      teamMatch,
      latestMatch,
      recentMatchesDetails,
      isSpinning,
    } = this.state
    const {teamBannerUrl} = teamMatch
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    return (
      <div>
        {isSpinning ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-matches-container ${id}`}>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <div className="latest-match-details-container">
              <LatestMatch latestMatch={latestMatch} key={latestMatch.id} />
            </div>
            <div className="recent-matches-container">
              {recentMatchesDetails.map(eachRecentMatch => (
                <MatchCard
                  recentMatchDetails={eachRecentMatch}
                  key={eachRecentMatch.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches

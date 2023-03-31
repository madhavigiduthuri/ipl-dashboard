// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    recentMatchesData: [],
    matchImage: '',
    latestMatchDetails: {},
    isLoading: false,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    this.setState({
      isLoading: true,
    })
    const {match} = this.props // kkr team url  lo
    const {id} = match.params
    // console.log(this.props)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id.toUpperCase()}`)
    const data = await response.json()
    console.log('data', data)
    const formattedRecentMatches = data.recent_matches.map(eachRecentMatch => ({
      competingTeam: eachRecentMatch.competing_team,
      competingTeamLogo: eachRecentMatch.competing_team_logo,
      date: eachRecentMatch.date,
      id: eachRecentMatch.id,
      manOfTheMatch: eachRecentMatch.man_of_the_match,
      matchStatus: eachRecentMatch.match_status,
      result: eachRecentMatch.result,
      secondInnings: eachRecentMatch.second_innings,
      umpires: eachRecentMatch.umpires,
      venue: eachRecentMatch.venue,
    }))
    // console.log('formattedRecentMatches', formattedRecentMatches)
    const formattedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    this.setState({
      isLoading: false,
      recentMatchesData: formattedRecentMatches,
      matchImage: data.team_banner_url,
      latestMatchDetails: formattedLatestMatchDetails,
    })
  }

  render() {
    const {
      isLoading,
      recentMatchesData,
      matchImage,
      latestMatchDetails,
    } = this.state
    // console.log(recentMatchesData, isLoading, matchImage, latestMatchDetails)
    return (
      <div className="team-matches-app-container">
        {isLoading ? (
          <div>
            {/* <div testid="loader"> */}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={matchImage}
              alt="team banner"
              className="team-banner-image"
            />
            <h1 className="team-match-heading">Lastest Match</h1>
            <LatestMatch latestMatch={latestMatchDetails} />
            <ul className="unord-team">
              {recentMatchesData.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchData={eachMatch} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches

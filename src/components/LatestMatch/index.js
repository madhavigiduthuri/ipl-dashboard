// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  // console.log(latestMatch)
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
    manOfTheMatch,
    umpires,
  } = latestMatch
  return (
    <div className="lastest-matches-app-container">
      <div className="lastest-match-left">
        <p className="heading">{competingTeam}</p>
        <p className="datee">{date}</p>
        <p className="class-1">{venue}</p>
        <p className="class-1">{result}</p>
      </div>
      <div className="lastest-match-center">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-match-image"
        />
      </div>
      <div className="lastest-match-right">
        <p className="static-1">First Innings</p>
        <p>{firstInnings}</p>
        <p className="static-1">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="static-1">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="static-1">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

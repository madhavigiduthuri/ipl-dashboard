// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {isLoading: false, teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    this.setState({
      isLoading: true,
    })
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data.teams)
    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    // console.log(formattedData)
    this.setState({
      isLoading: false,
      teamsList: formattedData,
    })
  }

  render() {
    const {isLoading, teamsList} = this.state
    // console.log(isLoading, teamsList)
    return (
      <div className="home-container">
        {isLoading ? (
          <div>
            {/* <div testid="loader"> */}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="header-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-image"
              />
              <h1 className="ipl-title">IPL Dashboard</h1>
            </div>
            <ul className="unordered-list">
              {teamsList.map(eachTeamCard => (
                <TeamCard key={eachTeamCard.id} eachTeamCard={eachTeamCard} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home

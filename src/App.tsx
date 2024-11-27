import './App.css'
import GitHubCalendar from 'react-github-calendar';

function App() {
  const queryString = window.location.search;

// Create a URLSearchParams object
  const urlParams:URLSearchParams = new URLSearchParams(queryString);
  const userNameToUse:string = urlParams == null ? "": urlParams.get('username')?.toString()!
  //ie localhost:5173/GithubContributionDotMatrix/?username=Peter-Kang
  return (
    <>
      <GitHubCalendar username={userNameToUse}>
      </GitHubCalendar>
    </>
  )
}

export default App

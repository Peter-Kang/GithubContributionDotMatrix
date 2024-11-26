import './App.css'
import GitHubCalendar from 'react-github-calendar';

function App() {
  const queryString = window.location.search;

// Create a URLSearchParams object
  const urlParams = new URLSearchParams(queryString);
  const userNameToUse = urlParams == null ? "": urlParams.get('username').toString()
  return (
    <>
      <GitHubCalendar username={userNameToUse}>
      </GitHubCalendar>
    </>
  )
}

export default App

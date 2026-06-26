import { useEffect, useMemo, useState } from "react";
import "./Tracker.css";

const MLB_STADIUMS = [
  {
    id: 1,
    team: "Arizona Diamondbacks",
    stadium: "Chase Field",
    city: "Phoenix",
    state: "AZ",
    league: "NL",
    division: "West",
  },
  {
    id: 2,
    team: "Athletics",
    stadium: "Sutter Health Park",
    city: "West Sacramento",
    state: "CA",
    league: "AL",
    division: "West",
  },
  {
    id: 3,
    team: "Atlanta Braves",
    stadium: "Truist Park",
    city: "Atlanta",
    state: "GA",
    league: "NL",
    division: "East",
  },
  {
    id: 4,
    team: "Baltimore Orioles",
    stadium: "Oriole Park",
    city: "Baltimore",
    state: "MD",
    league: "AL",
    division: "East",
  },
  {
    id: 5,
    team: "Boston Red Sox",
    stadium: "Fenway Park",
    city: "Boston",
    state: "MA",
    league: "AL",
    division: "East",
  },
  {
    id: 6,
    team: "Chicago Cubs",
    stadium: "Wrigley Field",
    city: "Chicago",
    state: "IL",
    league: "NL",
    division: "Central",
  },
  {
    id: 7,
    team: "Chicago White Sox",
    stadium: "Rate Field",
    city: "Chicago",
    state: "IL",
    league: "AL",
    division: "Central",
  },
  {
    id: 8,
    team: "Cincinnati Reds",
    stadium: "Great American Ball Park",
    city: "Cincinnati",
    state: "OH",
    league: "NL",
    division: "Central",
  },
  {
    id: 9,
    team: "Cleveland Guardians",
    stadium: "Progressive Field",
    city: "Cleveland",
    state: "OH",
    league: "AL",
    division: "Central",
  },
  {
    id: 10,
    team: "Colorado Rockies",
    stadium: "Coors Field",
    city: "Denver",
    state: "CO",
    league: "NL",
    division: "West",
  },
  {
    id: 11,
    team: "Detroit Tigers",
    stadium: "Comerica Park",
    city: "Detroit",
    state: "MI",
    league: "AL",
    division: "Central",
  },
  {
    id: 12,
    team: "Houston Astros",
    stadium: "Daikin Park",
    city: "Houston",
    state: "TX",
    league: "AL",
    division: "West",
  },
  {
    id: 13,
    team: "Kansas City Royals",
    stadium: "Kauffman Stadium",
    city: "Kansas City",
    state: "MO",
    league: "AL",
    division: "Central",
  },
  {
    id: 14,
    team: "Los Angeles Angels",
    stadium: "Angel Stadium",
    city: "Anaheim",
    state: "CA",
    league: "AL",
    division: "West",
  },
  {
    id: 15,
    team: "Los Angeles Dodgers",
    stadium: "Dodger Stadium",
    city: "Los Angeles",
    state: "CA",
    league: "NL",
    division: "West",
  },
  {
    id: 16,
    team: "Miami Marlins",
    stadium: "loanDepot park",
    city: "Miami",
    state: "FL",
    league: "NL",
    division: "East",
  },
  {
    id: 17,
    team: "Milwaukee Brewers",
    stadium: "American Family Field",
    city: "Milwaukee",
    state: "WI",
    league: "NL",
    division: "Central",
  },
  {
    id: 18,
    team: "Minnesota Twins",
    stadium: "Target Field",
    city: "Minneapolis",
    state: "MN",
    league: "AL",
    division: "Central",
  },
  {
    id: 19,
    team: "New York Mets",
    stadium: "Citi Field",
    city: "Flushing",
    state: "NY",
    league: "NL",
    division: "East",
  },
  {
    id: 20,
    team: "New York Yankees",
    stadium: "Yankee Stadium",
    city: "Bronx",
    state: "NY",
    league: "AL",
    division: "East",
  },
  {
    id: 21,
    team: "Philadelphia Phillies",
    stadium: "Citizens Bank Park",
    city: "Philadelphia",
    state: "PA",
    league: "NL",
    division: "East",
  },
  {
    id: 22,
    team: "Pittsburgh Pirates",
    stadium: "PNC Park",
    city: "Pittsburgh",
    state: "PA",
    league: "NL",
    division: "Central",
  },
  {
    id: 23,
    team: "San Diego Padres",
    stadium: "Petco Park",
    city: "San Diego",
    state: "CA",
    league: "NL",
    division: "West",
  },
  {
    id: 24,
    team: "San Francisco Giants",
    stadium: "Oracle Park",
    city: "San Francisco",
    state: "CA",
    league: "NL",
    division: "West",
  },
  {
    id: 25,
    team: "Seattle Mariners",
    stadium: "T-Mobile Park",
    city: "Seattle",
    state: "WA",
    league: "AL",
    division: "West",
  },
  {
    id: 26,
    team: "St. Louis Cardinals",
    stadium: "Busch Stadium",
    city: "St. Louis",
    state: "MO",
    league: "NL",
    division: "Central",
  },
  {
    id: 27,
    team: "Tampa Bay Rays",
    stadium: "Tropicana Field",
    city: "St. Petersburg",
    state: "FL",
    league: "AL",
    division: "East",
  },
  {
    id: 28,
    team: "Texas Rangers",
    stadium: "Globe Life Field",
    city: "Arlington",
    state: "TX",
    league: "AL",
    division: "West",
  },
  {
    id: 29,
    team: "Toronto Blue Jays",
    stadium: "Rogers Centre",
    city: "Toronto",
    state: "Ontario",
    league: "AL",
    division: "East",
  },
  {
    id: 30,
    team: "Washington Nationals",
    stadium: "Nationals Park",
    city: "Washington",
    state: "DC",
    league: "NL",
    division: "East",
  },
];

function Tracker() {
  const [visitedStadiums, setVisitedStadiums] = useState({});
  const [searchText, setSearchText] = useState("");
  const [leagueFilter, setLeagueFilter] = useState("All");
  const [divisionFilter, setDivisionFilter] = useState("All");

  useEffect(() => {
    const savedData = localStorage.getItem("visitedStadiums");

    if (savedData) {
      setVisitedStadiums(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("visitedStadiums", JSON.stringify(visitedStadiums));
  }, [visitedStadiums]);

  const totalVisited = Object.values(visitedStadiums).filter(
    (item) => item.visited
  ).length;

  const progressPercent = Math.round(
    (totalVisited / MLB_STADIUMS.length) * 100
  );

  const filteredStadiums = useMemo(() => {
    return MLB_STADIUMS.filter((item) => {
      const searchMatch =
        item.team.toLowerCase().includes(searchText.toLowerCase()) ||
        item.stadium.toLowerCase().includes(searchText.toLowerCase()) ||
        item.city.toLowerCase().includes(searchText.toLowerCase()) ||
        item.state.toLowerCase().includes(searchText.toLowerCase());

      const leagueMatch =
        leagueFilter === "All" || item.league === leagueFilter;

      const divisionMatch =
        divisionFilter === "All" || item.division === divisionFilter;

      return searchMatch && leagueMatch && divisionMatch;
    });
  }, [searchText, leagueFilter, divisionFilter]);

  function toggleVisited(id) {
    setVisitedStadiums((current) => {
      const currentItem = current[id] || {};

      return {
        ...current,
        [id]: {
          ...currentItem,
          visited: !currentItem.visited,
        },
      };
    });
  }

  function updateNotes(id, notes) {
    setVisitedStadiums((current) => {
      const currentItem = current[id] || {};

      return {
        ...current,
        [id]: {
          ...currentItem,
          notes,
        },
      };
    });
  }

  function resetTracker() {
    const confirmReset = window.confirm(
      "Are you sure you want to clear your stadium tracker?"
    );

    if (confirmReset) {
      setVisitedStadiums({});
    }
  }

  return (
    <div className="stadium-tracker">
      <header className="tracker-header">
        <h1>MLB Stadium Tracker</h1>
        <p>
          Track how many Major League Baseball stadiums you have visited.
        </p>
      </header>

      <section className="tracker-summary">
        <div className="summary-card">
          <h2>{totalVisited}</h2>
          <p>Visited</p>
        </div>

        <div className="summary-card">
          <h2>{MLB_STADIUMS.length - totalVisited}</h2>
          <p>Remaining</p>
        </div>

        <div className="summary-card">
          <h2>{progressPercent}%</h2>
          <p>Complete</p>
        </div>
      </section>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <section className="tracker-controls">
        <input
          type="text"
          placeholder="Search by team, stadium, city, or state..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <select
          value={leagueFilter}
          onChange={(event) => setLeagueFilter(event.target.value)}
        >
          <option value="All">All Leagues</option>
          <option value="AL">American League</option>
          <option value="NL">National League</option>
        </select>

        <select
          value={divisionFilter}
          onChange={(event) => setDivisionFilter(event.target.value)}
        >
          <option value="All">All Divisions</option>
          <option value="East">East</option>
          <option value="Central">Central</option>
          <option value="West">West</option>
        </select>

        <button className="reset-button" onClick={resetTracker}>
          Reset
        </button>
      </section>

      <section className="stadium-grid">
        {filteredStadiums.map((item) => {
          const trackerItem = visitedStadiums[item.id] || {};
          const isVisited = trackerItem.visited;

          return (
            <article
              key={item.id}
              className={`stadium-card ${isVisited ? "visited" : ""}`}
            >
              <div className="stadium-card-header">
                <div>
                  <h3>{item.stadium}</h3>
                  <p>{item.team}</p>
                </div>

                <label className="visited-checkbox">
                  <input
                    type="checkbox"
                    checked={Boolean(isVisited)}
                    onChange={() => toggleVisited(item.id)}
                  />
                  Visited
                </label>
              </div>

              <div className="stadium-details">
                <p>
                  <strong>Location:</strong> {item.city}, {item.state}
                </p>
                <p>
                  <strong>League:</strong> {item.league}
                </p>
                <p>
                  <strong>Division:</strong> {item.division}
                </p>
              </div>

              <textarea
                placeholder="Add notes about your visit..."
                value={trackerItem.notes || ""}
                onChange={(event) => updateNotes(item.id, event.target.value)}
              ></textarea>
            </article>
          );
        })}
      </section>

      {filteredStadiums.length === 0 && (
        <p className="no-results">No stadiums match your search.</p>
      )}
    </div>
  );
}
export default Tracker;
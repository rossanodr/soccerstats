import './App.css';

import React from 'react';

import { cleanData, manipulateData, parseData } from './utilities';
import { getCategories, getHeatMap, getNationalTeamStats, getPenaltyHistory, getPlayerCharacteristics, getPlayerStats, getSeasonStats, getTeamStats, getTournaments, getTransfers } from './api';

function App() {
  const [categories, setCategories] = React.useState([]);
  const [tournaments, setTournaments] = React.useState([]);
  const [teamStats, setTeamStats] = React.useState([]);
  const [playerStats, setPlayerStats] = React.useState([]);
  const [transfers, setTransfers] = React.useState([]);
  const [heatMap, setHeatMap] = React.useState([]);
  const [penaltyHistory, setPenaltyHistory] = React.useState([]);
  const [seasonStats, setSeasonStats] = React.useState();
  const [nationalTeamStats, setNationalTeamStats] = React.useState([]);
  const [characteristics, setCharacteristics] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      // Get the categories
      const categoriesResponse = await getCategories();
      const parsedCategories = parseData(categoriesResponse);
      const cleanedCategories = cleanData(parsedCategories);
      setCategories(cleanedCategories);

      // Get the tournaments
      const tournamentsResponse = await getTournaments();
      const parsedTournaments = parseData(tournamentsResponse);
      const cleanedTournaments = cleanData(parsedTournaments);
      setTournaments(cleanedTournaments);

      // Get the team stats
      const teamStatsResponse = await getTeamStats();
      const parsedTeamStats = parseData(teamStatsResponse);
      const cleanedTeamStats = cleanData(parsedTeamStats);
      setTeamStats(cleanedTeamStats);

      // Get the player stats
      const playerStatsResponse = await getPlayerStats();
      const parsedPlayerStats = parseData(playerStatsResponse);
      const cleanedPlayerStats = cleanData(parsedPlayerStats);
      setPlayerStats(cleanedPlayerStats);

      // Get the transfers
      const transfersResponse = await getTransfers();
      const parsedTransfers = parseData(transfersResponse);
      const cleanedTransfers = cleanData(parsedTransfers);
      setTransfers(cleanedTransfers);

      // Get the heat map
      const heatMapResponse = await getHeatMap();
      const parsedHeatMap = parseData(heatMapResponse);
      const cleanedHeatMap = cleanData(parsedHeatMap);
      setHeatMap(cleanedHeatMap);

      // Get the penalty history
      const penaltyHistoryResponse = await getPenaltyHistory();
      const parsedPenaltyHistory = parseData(penaltyHistoryResponse);
      const cleanedPenaltyHistory = cleanData(parsedPenaltyHistory);
      setPenaltyHistory(cleanedPenaltyHistory);

      // Get the season stats
      const seasonStatsResponse = await getSeasonStats();
      const parsedSeasonStats = parseData(seasonStatsResponse);
      const cleanedSeasonStats = cleanData(parsedSeasonStats);
      setSeasonStats(cleanedSeasonStats);

      // Get the national team stats
      const nationalTeamStatsResponse = await getNationalTeamStats();
      const parsedNationalTeamStats = parseData(nationalTeamStatsResponse);
      const cleanedNationalTeamStats = cleanData(parsedNationalTeamStats);
      setNationalTeamStats(cleanedNationalTeamStats);

      // Get the characteristics
      const characteristicsResponse = await getCharacteristics();
      const parsedCharacteristics = parseData(characteristicsResponse);
      const cleanedCharacteristics = cleanData(parsedCharacteristics);
      setCharacteristics(cleanedCharacteristics);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      // ...
    </div>
  );
}

export default App;
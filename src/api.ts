import axios from "axios";
import { writeFileSync } from "fs";

const fetchCategories = async () => {
  const response = await axios.get(
    "https://api.sofascore.com/api/v1/sport/football/categories"
  );
  return response.data;
};

const fetchUniqueTournaments = async (categoryId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/category/${categoryId}/unique-tournaments`
  );
  return response.data;
};

const fetchTeamStandings = async (
  uniqueTournamentId: number,
  seasonId: number
) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/unique-tournament/${uniqueTournamentId}/season/${seasonId}/standings/total`
  );
  return response.data;
};

const fetchTeamInfo = async (teamId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/team/${teamId}`
  );
  return response.data;
};

const fetchTeamTransfers = async (teamId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/team/${teamId}/transfers`
  );
  return response.data;
};

const fetchTeamStandingsSeasons = async (teamId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/team/${teamId}/standings/seasons`
  );
  return response.data;
};

const fetchTeamPlayers = async (teamId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/team/${teamId}/players`
  );
  return response.data;
};

const fetchPlayerInfo = async (playerId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/player/${playerId}`
  );
  return response.data;
};

const fetchPlayerAttributeOverviews = async (playerId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/player/${playerId}/attribute-overviews`
  );
  return response.data;
};

const fetchPlayerPenaltyHistory = async (playerId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/player/${playerId}/penalty-history`
  );
  return response.data;
};

const fetchPlayerLastYearSummary = async (playerId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/player/${playerId}/last-year-summary`
  );
  return response.data;
};

const fetchPlayerStatistics = async (playerId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/player/${playerId}/statistics/seasons`
  );
  return response.data;
};

const fetchPlayerNationalTeamStatistics = async (playerId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/player/${playerId}/national-team-statistics`
  );
  return response.data;
};

const fetchPlayerCharacteristics = async (playerId: number) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/player/${playerId}/characteristics`
  );
  return response.data;
};

const fetchPlayerUniqueTournamentStatistics = async (
  playerId: number,
  uniqueTournamentId: number,
  seasonId: number
) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/player/${playerId}/unique-tournament/${uniqueTournamentId}/season/${seasonId}/statistics/overall`
  );
  return response.data;
};

const fetchPlayerUniqueTournamentHeatmap = async (
  playerId: number,
  uniqueTournamentId: number,
  seasonId: number
) => {
  const response = await axios.get(
    `https://api.sofascore.com/api/v1/player/${playerId}/unique-tournament/${uniqueTournamentId}/season/${seasonId}/heatmap/overall`
  );
  return response.data;
};

const writeToCSV = (data: any) => {
  const csvString = data.map((row) => Object.values(row).join(",")).join("\n");
  writeFileSync("./data.csv", csvString);
};

export {
  fetchCategories,
  fetchUniqueTournaments,
  fetchTeamStandings,
  fetchTeamInfo,
  fetchTeamTransfers,
  fetchTeamStandingsSeasons,
  fetchTeamPlayers,
  fetchPlayerInfo,
  fetchPlayerAttributeOverviews,
  fetchPlayerPenaltyHistory,
  fetchPlayerLastYearSummary,
  fetchPlayerStatistics,
  fetchPlayerNationalTeamStatistics,
  fetchPlayerCharacteristics,
  fetchPlayerUniqueTournamentStatistics,
  fetchPlayerUniqueTournamentHeatmap,
  writeToCSV,
};

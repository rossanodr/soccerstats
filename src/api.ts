import axios from 'axios';

const getCategories = async () => {
  const response = await axios.get('https://api.sofascore.com/api/v1/sport/football/categories');
  return response.data;
};

const getTournaments = async (categoryId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/category/${categoryId}/unique-tournaments`);
  return response.data;
};

const getTeamStanding = async (tournamentId: number, seasonId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/unique-tournament/${tournamentId}/season/${seasonId}/standings/total`);
  return response.data;
};

const getTeamInfo = async (teamId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/team/${teamId}`);
  return response.data;
};

const getTeamTransfers = async (teamId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/team/${teamId}/transfers`);
  return response.data;
};

const getTeamStandingsSeasons = async (teamId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/team/${teamId}/standings/seasons`);
  return response.data;
};

const getTeamPlayers = async (teamId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/team/${teamId}/players`);
  return response.data;
};

const getPlayerInfo = async (playerId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/player/${playerId}`);
  return response.data;
};

const getPlayerAttributeOverviews = async (playerId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/player/${playerId}/attribute-overviews`);
  return response.data;
};

const getPlayerPenaltyHistory = async (playerId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/player/${playerId}/penalty-history`);
  return response.data;
};

const getPlayerLastYearSummary = async (playerId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/player/${playerId}/last-year-summary`);
  return response.data;
};

const getPlayerStatisticsSeasons = async (playerId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/player/${playerId}/statistics/seasons`);
  return response.data;
};

const getPlayerNationalTeamStatistics = async (playerId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/player/${playerId}/national-team-statistics`);
  return response.data;
};

const getPlayerCharacteristics = async (playerId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/player/${playerId}/characteristics`);
  return response.data;
};

const getPlayerUniqueTournamentStatistics = async (playerId: number, tournamentId: number, seasonId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/player/${playerId}/unique-tournament/${tournamentId}/season/${seasonId}/statistics/overall`);
  return response.data;
};

const getPlayerUniqueTournamentHeatmap = async (playerId: number, tournamentId: number, seasonId: number) => {
  const response = await axios.get(`https://api.sofascore.com/api/v1/player/${playerId}/unique-tournament/${tournamentId}/season/${seasonId}/heatmap/overall`);
  return response.data;
};

export {
  getCategories,
  getTournaments,
  getTeamStanding,
  getTeamInfo,
  getTeamTransfers,
  getTeamStandingsSeasons,
  getTeamPlayers,
  getPlayerInfo,
  getPlayerAttributeOverviews,
  getPlayerPenaltyHistory,
  getPlayerLastYearSummary,
  getPlayerStatisticsSeasons,
  getPlayerNationalTeamStatistics,
  getPlayerCharacteristics,
  getPlayerUniqueTournamentStatistics,
  getPlayerUniqueTournamentHeatmap
};
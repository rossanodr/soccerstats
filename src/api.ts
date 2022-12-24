import axios from 'axios';

const BASE_URL = 'https://api.sofascore.com/api/v1';

export const fetchTournaments = async (): Promise<Tournament[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/sport/football/categories`);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchTeams = async (categoryId: number): Promise<Team[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/category/${categoryId}/unique-tournaments`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchTeamInfo = async (teamId: number): Promise<TeamInfo> => {
  try {
    const response = await axios.get(`${BASE_URL}/team/${teamId}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return {};
  }
};
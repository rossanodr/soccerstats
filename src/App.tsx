import React from 'react';
import axios from 'axios';

interface Player {
  id: number;
  name: string;
  teamId: number;
  teamName: string;
  tournamentId: number;
  tournamentName: string;
  overallStatistics: {
    matchesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    rating: number;
  };
  penaltyHistory: {
    penaltiesTotal: number;
    penaltiesScored: number;
  };
  lastYearSummary: {
    matchesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    rating: number;
  };
  seasonStatistics: {
    seasonNumber: number;
    matchesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    rating: number;
  }[];
  nationalTeamStatistics: {
    matchesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    rating: number;
  };
  characteristics: {
    age: number;
    height: number;
    weight: number;
  };
  heatmap: {
    total: number;
    attack: number;
    defence: number;
  };
  attributeOverviews: {
    title: string;
    rating: number;
  }[];
}

interface Team {
  id: number;
  name: string;
  tournamentId: number;
  tournamentName: string;
  standings: {
    total: {
      points: number;
      matchesPlayed: number;
      wins: number;
      draws: number;
      losses: number;
    };
    home: {
      points: number;
      matchesPlayed: number;
      wins: number;
      draws: number;
      losses: number;
    };
    away: {
      points: number;
      matchesPlayed: number;
      wins: number;
      draws: number;
      losses: number;
    };
  };
  transfers: {
    in: {
      playerId: number;
      playerName: string;
      fromTeamId: number;
      fromTeamName: string;
    }[];
    out: {
      playerId: number;
      playerName: string;
      toTeamId: number;
      toTeamName: string;
    }[];
  };
  players: {
    id: number;
    name: string;
  }[];
  seasonStatistics: {
    seasonNumber: number;
    matchesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    rating: number;
  }[];
}

interface Tournament {
  id: number;
  name: string;
  teams: {
    id: number;
    name: string;
  }[];
  players: {
    id: number;
    name: string;
  }[];
}

interface Sport {
  id: number;
  name: string;
  tournaments: Tournament[];
}

const App = () => {
  const [sports, setSports] = React.useState<Sport[]>([]);
  const [selectedSport, setSelectedSport] = React.useState<number>();
  const [tournaments, setTournaments] = React.useState<Tournament[]>([]);
  const [selectedTournament, setSelectedTournament] = React.useState<number>();
  const [teams, setTeams] = React.useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = React.useState<number>();
  const [players, setPlayers] = React.useState<Player[]>([]);

  React.useEffect(() => {
    axios
      .get('https://api.sofascore.com/api/v1/sport/football/categories')
      .then(res => {
        setSports(res.data);
      });
  }, []);

  React.useEffect(() => {
    if (selectedSport) {
      axios
        .get(
          `https://api.sofascore.com/api/v1/category/${selectedSport}/unique-tournaments`
        )
        .then(res => {
          setTournaments(res.data);
        });
    }
  }, [selectedSport]);

  React.useEffect(() => {
    if (selectedTournament) {
      axios
        .get(
          `https://api.sofascore.com/api/v1/unique-tournament/${selectedTournament}/season/40557/standings/total`
        )
        .then(res => {
          setTeams(res.data);
        });
    }
  }, [selectedTournament]);

  React.useEffect(() => {
    if (selectedTeam) {
      axios
        .get(`https://api.sofascore.com/api/v1/team/${selectedTeam}/players`)
        .then(res => {
          setPlayers(res.data);
        });
    }
  }, [selectedTeam]);

  const getPlayerInfo = (playerId: number) => {
    axios
      .get(`https://api.sofascore.com/api/v1/player/${playerId}`)
      .then(res => {
        const player = res.data;

        axios
          .get(
            `https://api.sofascore.com/api/v1/player/${playerId}/unique-tournament/${selectedTournament}/season/40557/statistics/overall`
          )
          .then(res => {
            const { goals, assists, yellowCards, redCards, rating } = res.data;

            setPlayers(prevPlayers =>
              prevPlayers.map(p => {
                if (p.id === player.id) {
                  return {
                    ...player,
                    overallStatistics: {
                      matchesPlayed: 0,
                      goals,
                      assists,
                      yellowCards,
                      redCards,
                      rating
                    }
                  };
                }
                return p;
              })
            );
          });

        axios
          .get(
            `https://api.sofascore.com/api/v1/player/${playerId}/penalty-history`
          )
          .then(res => {
            const { penaltiesTotal, penaltiesScored } = res.data;

            setPlayers(prevPlayers =>
              prevPlayers.map(p => {
                if (p.id === player.id) {
                  return {
                    ...player,
                    penaltyHistory: {
                      penaltiesTotal,
                      penaltiesScored
                    }
                  };
                }
                return p;
              })
            );
          });

        axios
          .get(
            `https://api.sofascore.com/api/v1/player/${playerId}/last-year-summary`
          )
          .then(res => {
            const {
              matchesPlayed,
              goals,
              assists,
              yellowCards,
              redCards,
              rating
            } = res.data;

            setPlayers(prevPlayers =>
              prevPlayers.map(p => {
                if (p.id === player.id) {
                  return {
                    ...player,
                    lastYearSummary: {
                      matchesPlayed,
                      goals,
                      assists,
                      yellowCards,
                      redCards,
                      rating
                    }
                  };
                }
                return p;
              })
            );
          });

        axios
          .get(`https://api.sofascore.com/api/v1/player/${playerId}/statistics/seasons`)
          .then(res => {
            const seasonStatistics = res.data.map(
              (statistics: any): Player['seasonStatistics'][0] => ({
                seasonNumber: statistics.season.id,
                matchesPlayed: statistics.matchesPlayed,
                goals: statistics.goals,
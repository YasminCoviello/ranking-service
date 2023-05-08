const { matchesApi } = require("../api/match");

exports.RankingService = {
  async getRanking() {
    const { data: players } = await matchesApi.get('/player');

    return players.sort((curr, next) => next.wins - curr.wins);
  },
}

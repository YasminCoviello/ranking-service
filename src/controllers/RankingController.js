const { RankingService } = require("../services/RankingService");

exports.RankingController = {
  getRanking: async (req, res) => {
    const response = await RankingService.getRanking();
    res.send(response);
  }
}

const fastify = require("fastify")({ logger: true });
const app = require("./app");
const connectToDB = require("./config/dbConfig");
const serverConfig = require("./config/serverConfig");
const evaluationWorker = require("./workers/evaluationWorker");

fastify.register(app);

fastify.listen({ port: serverConfig.PORT }, async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  await connectToDB();
  evaluationWorker("EvaluationQueue");
  console.log(`Server up at port ${serverConfig.PORT}`);
});

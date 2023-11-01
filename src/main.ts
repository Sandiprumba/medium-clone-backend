import env from "./config/env";
import { buildServer } from "./utils/server";

async function gracefulShutdowns({
  server,
}: {
  server: Awaited<ReturnType<typeof buildServer>>;
}) {
  await server.close();
}

async function main() {
  const server = await buildServer();

  server.listen({
    port: env.PORT,
  });

  const signals = ["SIGTERM", "SIGINT"];

  for (const signal in signals) {
    process.on(signal, () => {
      gracefulShutdowns({
        server,
      });
    });
  }
}

main();

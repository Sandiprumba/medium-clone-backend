import pino from "pino";

export const logger = pino({
  redact: ["req.headers.authorization"],
  level: "info",
  serializers: {
    req(request) {
      return {
        method: request.method,
        url: request.url,
        headers: request.headers,
        hostname: request.hostname,
        remoteAddress: request.ip,
        remotePort: request.socket.remotePort,
      };
    },
  },
});

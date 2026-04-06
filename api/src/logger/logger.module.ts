/*
 * Copyright © 2026 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 */

import { Global, Module } from "@nestjs/common";
import { PinoLogger, LoggerModule as PinoLoggerModule } from "nestjs-pino";

import { LoggerService } from "./logger.service";

@Global()
@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        level: process.env.NODE_ENV?.includes("dev") ? "debug" : "info",
        transport: process.env.NODE_ENV?.includes("dev")
          ? { target: "pino-pretty", options: { colorize: true } }
          : undefined,
        redact: ["req.headers.authorization", "req.headers.cookie"],
      },
    }),
  ],
  providers: [LoggerService, PinoLogger],
  exports: [LoggerService, PinoLogger],
})
export class LoggerModule {}

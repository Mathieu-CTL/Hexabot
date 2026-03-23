/*
 * Copyright © 2026 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 */

import { Inject, Injectable, LogLevel, Scope } from "@nestjs/common";
import { INQUIRER } from "@nestjs/core";
import { PinoLogger } from "nestjs-pino";

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
  private context: string;

  constructor(
    @Inject(INQUIRER) private parentClass: object,
    private readonly logger: PinoLogger,
  ) {
    this.context = parentClass?.constructor?.name ?? "App";
    this.logger.setContext(this.context);
  }

  log(message: string, ...args: any[]) {
    this.logArguments("log", message, args);
  }

  error(message: string, ...args: any[]) {
    this.logArguments("error", message, args);
  }

  warn(message: string, ...args: any[]) {
    this.logArguments("warn", message, args);
  }

  debug(message: string, ...args: any[]) {
    this.logArguments("debug", message, args);
  }

  verbose(message: string, ...args: any[]) {
    this.logArguments("verbose", message, args);
  }

  fatal(message: string, ...args: any[]) {
    this.logArguments("fatal", message, args);
  }

  private logArguments(type: LogLevel, message: string, args: any[]) {
    const pinoLevel =
      type === "log" ? "info" : type === "verbose" ? "trace" : type;

    // eslint-disable-next-line security/detect-object-injection
    (this.logger as any)[pinoLevel]({ context: this.context }, message);
    args.forEach((arg) => {
      // eslint-disable-next-line security/detect-object-injection
      (this.logger as any)[pinoLevel](
        { context: this.context },
        arg instanceof Error ? arg.stack : arg,
      );
    });
  }
}

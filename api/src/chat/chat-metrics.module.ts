/*
 * Copyright © 2026 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 */

import { Module } from "@nestjs/common";
import {
  makeCounterProvider,
  makeGaugeProvider,
} from "@willsoto/nestjs-prometheus";

@Module({
  providers: [
    makeCounterProvider({
      name: "messages_processed_total",
      help: "total number of messages processed by the chatbot",
    }),
    makeGaugeProvider({
      name: "conversations_active_total",
      help: "number of currently active conversations",
    }),
  ],
  exports: [
    "PROM_METRIC_MESSAGES_PROCESSED_TOTAL",
    "PROM_METRIC_CONVERSATIONS_ACTIVE_TOTAL",
  ],
})
export class ChatMetricsModule {}

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import pipe, { Pipe } from "./fork/pipe";

export const forkTask = (task: (data?: any, pipe?: Pipe) => Promise<any>) => {
  pipe.on("start", (data: any, deferred) => {
    deferred.with(task(data, pipe));
  });
};

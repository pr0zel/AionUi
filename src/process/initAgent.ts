/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { TChatConversation } from "@/common/storage";
import { generateHashWithFullName, getDataPath } from "./utils";
import fs from "fs/promises";
import path from "path";

export const createGeminiAgent = async (
  workspace?: string,
  defaultFiles?: string[]
): Promise<TChatConversation> => {
  const customWorkspace = !!workspace;
  if (!workspace) {
    const tempPath = getDataPath();
    const fileName = `gemini-temp-${Date.now()}`;
    workspace = path.join(tempPath, fileName);
    await fs.mkdir(workspace, { recursive: true });
    if (defaultFiles) {
      for (const file of defaultFiles) {
        const fileName = path.basename(file);
        const destPath = path.join(workspace, fileName);
        await fs.copyFile(file, destPath);
      }
    }
  }
  return {
    type: "gemini",
    extra: { workspace: workspace, customWorkspace },
    desc: customWorkspace ? workspace : "临时工作区",
    createTime: Date.now(),
    modifyTime: Date.now(),
    name: workspace,
    id: generateHashWithFullName(workspace),
  };
};

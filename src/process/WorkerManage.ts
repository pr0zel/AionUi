/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TChatConversation } from "@/common/storage";
import AgentBaseTask from "./task/BaseAgentTask";
import { GeminiAgentTask } from "./task/GeminiAgentTask";

const taskList: {
  id: string;
  task: AgentBaseTask<any>;
}[] = [];

const getTaskById = (id: string) => {
  return taskList.find((item) => item.id === id)?.task;
};

const buildConversation = (conversation: TChatConversation) => {
  const task = getTaskById(conversation.id);
  if (task) {
    return task;
  }
  switch (conversation.type) {
    case "gemini": {
      console.log(
        "------buildConversation.gemini>:",
        conversation.extra.workspace
      );
      const task = new GeminiAgentTask({
        workspace: conversation.extra.workspace,
        conversation_id: conversation.id,
      });
      taskList.push({ id: conversation.id, task });
      return task;
    }
  }
};

const kill = (id: string) => {
  const index = taskList.findIndex((item) => item.id === id);
  if (index === -1) return;
  const task = taskList[index];
  if (task) {
    task.task.kill();
  }
  taskList.splice(index, 1);
};

const clear = () => {
  taskList.forEach((item) => {
    item.task.kill();
  });
  taskList.length = 0;
};

const WorkerManage = {
  buildConversation,
  getTaskById,
  kill,
  clear,
};

export default WorkerManage;

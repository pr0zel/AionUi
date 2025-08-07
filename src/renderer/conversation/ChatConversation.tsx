/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TChatConversation } from "@/common/storage";
import GeminiChat from "./gemini/GeminiChat";

const ChatConversation: React.FC<{
  conversation: TChatConversation;
}> = ({ conversation }) => {
  switch (conversation.type) {
    case "gemini":
      return (
        <GeminiChat
          conversation_id={conversation.id}
          workspace={conversation.extra.workspace}
        ></GeminiChat>
      );
    default:
      return null;
  }
};

export default ChatConversation;

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { ipcBridge } from "@/common";
import { Button, Dropdown, Input, Menu, Tooltip } from "@arco-design/web-react";
import { ArrowUp, Plus } from "@icon-park/react";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { uuid } from "../utils/common";
import { TChatConversation } from "@/common/storage";

const ConversationWelcome: React.FC<{
  onCreateConversation: (conversation: TChatConversation) => void;
}> = ({ onCreateConversation }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [dir, setDir] = useState<string>("");
  const handleSend = async () => {
    const conversation = await ipcBridge.createConversation.invoke({
      type: "gemini",
      name: input,
      extra: {
        defaultFiles: files,
        workspace: dir,
      },
    });

    await ipcBridge.geminiConversation.sendMessage.invoke({
      input:
        files.length > 0
          ? files
              .map((v) => v.split("/").pop())
              .map((v) => `@${v}`)
              .join(" ") + input
          : input,
      conversation_id: conversation.id,
      msg_id: uuid(),
    });
    setTimeout(() => {
      onCreateConversation(conversation);
    }, 200);
  };
  const sendMessageHandler = () => {
    setLoading(true);
    handleSend().finally(() => {
      setLoading(false);
      setInput("");
    });
  };
  const isComposing = useRef(false);

  return (
    <div className="h-full flex-center flex-col px-100px">
      <p className="text-2xl font-semibold text-gray-900 mb-8">
        {t("conversation.welcome.title")}
      </p>
      <div className="w-full bg-white b-solid border border-#E5E6EB  rd-20px  focus-within:shadow-[0px_2px_20px_rgba(77,60,234,0.1)] transition-all duration-200 overflow-hidden p-16px">
        <Input.TextArea
          rows={5}
          placeholder={t("conversation.welcome.placeholder")}
          className="text-16px focus:b-none rounded-xl !bg-white !b-none !resize-none"
          value={input}
          onChange={(v) => setInput(v)}
          onCompositionStartCapture={() => {
            isComposing.current = true;
          }}
          onCompositionEndCapture={() => {
            isComposing.current = false;
          }}
          onKeyDown={(e) => {
            if (isComposing.current) return;
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessageHandler();
            }
          }}
        ></Input.TextArea>
        <div className="flex items-center justify-between ">
          <Dropdown
            trigger="hover"
            droplist={
              <Menu
                onClickMenuItem={(key) => {
                  const isFile = key === "file";
                  ipcBridge.openFileDialog
                    .invoke({
                      properties: isFile
                        ? ["openFile", "multiSelections"]
                        : ["openDirectory"],
                    })
                    .then((files) => {
                      if (isFile) {
                        setFiles(files || []);
                        setDir("");
                      } else {
                        setFiles([]);
                        setDir(files?.[0] || "");
                      }
                    });
                }}
              >
                <Menu.Item key="file">
                  {t("conversation.welcome.uploadFile")}
                </Menu.Item>
                <Menu.Item key="dir">
                  {t("conversation.welcome.linkFolder")}
                </Menu.Item>
              </Menu>
            }
          >
            <span className="flex items-center gap-4px cursor-pointer lh-[1]">
              <Button
                type="secondary"
                shape="circle"
                icon={
                  <Plus theme="outline" size="14" strokeWidth={2} fill="#333" />
                }
              ></Button>
              {files.length > 0 && (
                <Tooltip
                  className={"!max-w-max"}
                  content={
                    <span className="whitespace-break-spaces">
                      {files.join("\n")}
                    </span>
                  }
                >
                  <span>File({files.length})</span>
                </Tooltip>
              )}
              {!!dir && (
                <Tooltip
                  className={"!max-w-max"}
                  content={
                    <span className="whitespace-break-spaces">{dir}</span>
                  }
                >
                  <span>Folder(1)</span>
                </Tooltip>
              )}
            </span>
          </Dropdown>
          <Button
            shape="circle"
            type="primary"
            loading={loading}
            icon={
              <ArrowUp theme="outline" size="14" fill="white" strokeWidth={2} />
            }
            onClick={sendMessageHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ConversationWelcome;

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useCopy } from "@/hooks/useCopy";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

interface CopyTooltipProps {
  content: string;
}

const CopyTooltip: React.FC<CopyTooltipProps> = ({ content }) => {
  const { copy, copied } = useCopy({ copiedTimeout: 1000 });
  const [copyTooltipText, setCopyTooltipText] = useState("Copy");

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger
          onClick={event => {
            event.preventDefault();
          }}
          onMouseLeave={() => {
            setCopyTooltipText("Copy");
          }}
        >
          {copied ? (
            <Check className="h-4 w-4 cursor-pointer" />
          ) : (
            <Copy
              onClick={() => {
                copy(content);
                setCopyTooltipText("Copied!");
              }}
              className="h-4 w-4 cursor-pointer"
            />
          )}
        </TooltipTrigger>
        <TooltipContent
          onPointerDownOutside={event => {
            event.preventDefault();
          }}
        >
          {copyTooltipText}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyTooltip;

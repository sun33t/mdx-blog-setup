import { CopyButton } from "./copy-button";
import { wordWrap } from "./word-wrap";

import { Pre, RawCode, highlight } from "codehike/code";

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "dracula");
  return (
    <div className="relative">
      <CopyButton text={highlighted.code} />
      <Pre
        className="m-0 bg-zinc-950 px-4"
        code={highlighted}
        handlers={[wordWrap]}
      />
    </div>
  );
}

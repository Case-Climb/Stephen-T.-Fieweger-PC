import { Fragment } from "react";

const FLAG = /(\[(?:ATTORNEY|PLACEHOLDER):[^\]]*\])/g;
const IS_FLAG = /^\[(?:ATTORNEY|PLACEHOLDER):/;

/**
 * Renders copy that may contain [ATTORNEY: ...] or [PLACEHOLDER: ...] review
 * markers. Markers are highlighted so nothing slips through to launch unnoticed
 * (see PROJECT_NOTES.md pre-launch checklist).
 */
export default function Flagged({ text }: { text: string }) {
  const parts = text.split(FLAG);
  return (
    <>
      {parts.map((part, i) =>
        IS_FLAG.test(part) ? (
          <mark key={i} className="review-flag">{part}</mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

import classNames from "classnames";
import React from "react";
import { Slot } from "../../types";
import styles from "./TimeToggle.module.scss";

type Props = {
  slot: Slot;
  active?: boolean;
  locale?: string;
  on_click?: (slot: Slot) => void;
};

const hourFormat = (date: Date, locale?: string) => {
  return date.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "2-digit",
  });
};

export const TimeToggle = ({
  slot,
  active,
  locale = "no-nb",
  on_click,
}: Props) => {
  const { time, isAvailable } = slot;
  const slotString = hourFormat(new Date(time), locale);
  return (
    <button
      title={"klokken " + slotString}
      className={classNames(
        styles.timeToggle,
        isAvailable ? styles.available : styles.occupied,
        active && styles.active
      )}
      disabled={!isAvailable}
      onClick={() => isAvailable && on_click?.(slot)}
    >
      {slotString}
    </button>
  );
};

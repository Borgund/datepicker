import React from "react";
import classNames from "classnames";
import styles from "./DateCard.module.scss";
import { CustomDate } from "../../types";

export const DateCard = ({
  customDate,
  locale = "no-nb",
  active,
  on_click,
}: {
  customDate: CustomDate;
  locale?: string;
  on_click?: (date: CustomDate) => void;
  active?: boolean;
}) => {
  const { date } = customDate;
  const dateObject = new Date(date);
  return (
    <button
      className={classNames(styles.dateCard, active && styles.active)}
      onClick={() => on_click?.(customDate)}
    >
      <span className={styles.day}>
        {dateObject.toLocaleDateString(locale, { weekday: "short" })}
      </span>
      <span className={styles.date}>
        {dateObject.toLocaleDateString(locale, { day: "numeric" })}
      </span>
      <span className={styles.month}>
        {dateObject.toLocaleDateString(locale, { month: "long" })}
      </span>
    </button>
  );
};

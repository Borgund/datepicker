import React, { createContext, useState } from "react";
import { DateCard } from "..";
import { CustomDate, Slot } from "../../types";
import { TimeSlots } from "../TimeSlots/TimeSlots";
import styles from "./DatePicker.module.scss";

type Props = {
  data?: CustomDate[];
  on_submit?: (date?: CustomDate, slot?: Slot) => void;
};
type ContextProps = {
  selectedDate?: CustomDate;
  selectedSlot?: Slot;
  setSelectedDate?: (date: CustomDate) => void;
  setSelectedSlot?: (slot: Slot) => void;
};

export const DateContext = createContext<ContextProps>({});

export const DatePicker = ({ data, on_submit }: Props) => {
  const [selectedDate, setSelectedDate] = useState<CustomDate>();
  const [selectedSlot, setSelectedSlot] = useState<Slot>();

  return (
    <DateContext.Provider
      value={{ selectedDate, selectedSlot, setSelectedDate, setSelectedSlot }}
    >
      <div className={styles.cardWrapper}>
        {data &&
          data.map((date: CustomDate) => (
            <DateCard
              key={date.date}
              customDate={date}
              active={selectedDate?.date === date.date}
              on_click={(date) => {
                setSelectedDate(date);
                setSelectedSlot(undefined);
              }}
            />
          ))}
      </div>
      {selectedDate && selectedDate.slots && (
        <TimeSlots slots={selectedDate.slots} />
      )}
      {selectedDate && selectedSlot && (
        <button
          className={styles.submittButton}
          onClick={() => on_submit?.(selectedDate, selectedSlot)}
        >
          Neste
        </button>
      )}
    </DateContext.Provider>
  );
};

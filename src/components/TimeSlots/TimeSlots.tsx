import React, { useContext } from "react";
import { TimeToggle } from "..";
import { Slot } from "../../types";
import { DateContext } from "../DatePicker";
import styles from "./TimeSlots.module.scss";

type Props = { slots: Slot[] };

export const TimeSlots = ({ slots }: Props) => {
  const { selectedSlot, setSelectedSlot } = useContext(DateContext);
  return (
    <div className={styles.slotWrapper}>
      {slots.map((slot) => (
        <TimeToggle
          slot={slot}
          key={slot.time}
          on_click={(slot: Slot) => setSelectedSlot?.(slot)}
          active={selectedSlot?.time === slot.time}
        />
      ))}
    </div>
  );
};

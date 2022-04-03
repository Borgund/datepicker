import React, { useState } from "react";
import { TimeToggle } from "..";
import { Slot } from "../../types";

type Props = { slots: Slot[] };

export const TimeSlots = ({ slots }: Props) => {
  const [selectedSlot, setSelectedSlot] = useState<Slot>();
  return (
    <>
      {slots.map((slot) => (
        <TimeToggle
          slot={slot}
          key={slot.time}
          on_click={(slot: Slot) => setSelectedSlot(slot)}
          active={selectedSlot?.time === slot.time}
        />
      ))}
    </>
  );
};

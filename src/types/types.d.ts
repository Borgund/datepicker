export type APIResponse = {
  message: string;
  code: number;
  data: CustomDate[];
};

export type CustomDate = {
  date: string;
  isAvailable: boolean;
  isOpen: boolean;
  slots?: Slot[];
};

export type Slot = {
  time: string;
  isAvailable: boolean;
  timeInfo: TimeInfo[];
  status?: string | null;
  numberOfAvailableSlots: number;
};

export type TimeInfo = {
  service: string;
  startTime: string;
  endTime: string;
  primaryResources: string[];
  secondaryResources: string[];
};

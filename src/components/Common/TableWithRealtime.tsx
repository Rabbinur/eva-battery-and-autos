
import { SOCKET_EVENTS } from "@/config/socket";
import { useRealtimeSocket } from "@/hooks/useRealtimeSocket";
import React, { useState } from "react";


interface TableWithRealtimeProps<T> {
  initialData: T[]; // API-fetched data
  eventType: typeof SOCKET_EVENTS.CREATED[keyof typeof SOCKET_EVENTS.CREATED]; // socket event
  TableComponent: React.ComponentType<{ data: T[] } & any>; // table component
  extraProps?: Record<string, any>;
}

export const TableWithRealtime = <T extends { _id: string | number }>({
  initialData,
  eventType,
  TableComponent,
  extraProps = {}
}: TableWithRealtimeProps<T>) => {
  const [realtimeData, setRealtimeData] = useState<T[]>([]);

  // Listen to socket events
  useRealtimeSocket<T>(eventType, setRealtimeData);
console.log("Realtime Data:", realtimeData);
  // Merge data by _id to avoid duplicates
  const mergedData = [
    ...realtimeData,
    ...initialData.filter(item => !realtimeData.some(r => r._id === item._id))
  ];

  return <TableComponent data={mergedData} {...extraProps} />;
};

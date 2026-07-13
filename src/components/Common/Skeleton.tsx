import React from 'react';
import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const CommonSkeleton = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-1/4" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[...Array(5)].map((_, i) => (
          <Card key={i} className="flex h-[150px]">
            <Skeleton className="w-1/3 rounded-l-lg" />
            <div className="w-2/3 p-4 space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex justify-between items-end mt-4">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-8 w-16" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommonSkeleton;

export const OrderSkeleton = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-1/4" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[...Array(20)].map((_, i) => (
          <Card key={i} className="flex h-[50px] ">
            <div className="w-full p-4 space-y-2 flex gap-3">
              <Skeleton className="h-5  bg-gray-50 animate-pulse" />
              <Skeleton className="h-5  bg-gray-50 animate-pulse" />
              <Skeleton className="h-5  bg-gray-50 animate-pulse" />
              <Skeleton className="h-5  bg-gray-50 animate-pulse" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Skeleton Loader Component
export function ChartSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
      {[1, 2, 3].map(item => (
        <div
          key={item}
          className="p-6 border-2 border-border rounded-lg bg-card shadow-sm animate-pulse"
        >
          {/* Header Skeleton */}
          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="flex gap-4 text-sm">
              <div className="text-center">
                <div className="h-8 bg-gray-200 rounded w-12 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="text-center">
                <div className="h-8 bg-gray-200 rounded w-16 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>

          {/* Chart Skeleton */}
          <div className="mb-6">
            <div className="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>

          {/* Revenue Chart Skeleton */}
          <div className="pb-10">
            <div className="h-5 bg-gray-200 rounded w-1/3 mb-3"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

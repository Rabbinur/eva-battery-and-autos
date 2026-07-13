import React, { useState } from 'react';
import {
  X,
  CheckCircle,
  Clock,
  Truck,
  Ban,
  AlertCircle,
  Save,
  Loader2,
  Package,
  Undo2,
} from 'lucide-react';

// Union type that includes both order types
export type StatusType =
  | 'placed'
  | 'confirmed'
  | 'preparing'
  | 'completed'
  | 'cancelled'
  | 'in_transit'
  | 'delivered'
  | 'returned';

interface StatusChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStatus?: StatusType;
  onStatusUpdate: (statusData: { status: StatusType }) => Promise<void>;
  title?: string;
  description?: string;
  isLoading?: boolean;
  isDelivery: boolean;
  isPickUp: boolean;
}

const StatusChangeModal: React.FC<StatusChangeModalProps> = ({
  isOpen,
  onClose,
  currentStatus,
  onStatusUpdate,
  title = 'Update Status',
  description = 'Select the new status for this item',
  isLoading = false,
  isDelivery,
  isPickUp,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<StatusType | undefined>(
    currentStatus
  );

  // Previous status options for non-delivery orders
  const previousStatusOptions = [
    {
      value: 'placed' as StatusType,
      label: 'Placed',
      icon: <Clock className="w-4 h-4" />,
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    },
    {
      value: 'confirmed' as StatusType,
      label: 'Confirmed',
      icon: <CheckCircle className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    {
      value: 'completed' as StatusType,
      label: 'Completed',
      icon: <CheckCircle className="w-4 h-4" />,
      color: 'bg-green-100 text-green-800 border-green-200',
    },
    {
      value: 'cancelled' as StatusType,
      label: 'Cancelled',
      icon: <Ban className="w-4 h-4" />,
      color: 'bg-red-100 text-red-800 border-red-200',
    },
  ];

  // New status options for delivery orders
  const deliveryStatusOptions = [
    {
      value: 'confirmed' as StatusType,
      label: 'Confirmed',
      icon: <CheckCircle className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    {
      value: 'in_transit' as StatusType,
      label: 'In Transit',
      icon: <Truck className="w-4 h-4" />,
      color: 'bg-orange-100 text-orange-800 border-orange-200',
    },
    {
      value: 'delivered' as StatusType,
      label: 'Delivered',
      icon: <Package className="w-4 h-4" />,
      color: 'bg-green-100 text-green-800 border-green-200',
    },
    {
      value: 'returned' as StatusType,
      label: 'Returned',
      icon: <Undo2 className="w-4 h-4" />,
      color: 'bg-purple-100 text-purple-800 border-purple-200',
    },
    {
      value: 'cancelled' as StatusType,
      label: 'Cancelled',
      icon: <Ban className="w-4 h-4" />,
      color: 'bg-red-100 text-red-800 border-red-200',
    },
  ];

  // Use delivery options for delivery orders, previous options for others
  const statusOptions = isDelivery
    ? deliveryStatusOptions
    : isPickUp
    ? previousStatusOptions.filter(sta => sta.value !== 'placed')
    : previousStatusOptions;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedStatus) {
      await onStatusUpdate({ status: selectedStatus });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={isLoading}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">{description}</p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {statusOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSelectedStatus(option.value)}
                  className={`p-3 rounded-lg border-2 flex flex-col items-center justify-center transition-all ${
                    selectedStatus === option.value
                      ? `${option.color} border-current font-semibold scale-105`
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                  disabled={isLoading}
                >
                  <span className="mb-1">{option.icon}</span>
                  <span className="text-sm">{option.label}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading || selectedStatus === currentStatus}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Update Status
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StatusChangeModal;

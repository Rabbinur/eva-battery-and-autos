'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: (reason?: string) => Promise<void>;
  title: string;
  description?: string;
  confirmText?: string;
  variant?: 'default' | 'destructive';
  requireReason?: boolean;
}

export function ActionModal({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Confirm',
  variant = 'default',
  requireReason = false,
}: Props) {
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      setReason('');
      setIsLoading(false);
    }
  }, [open]);

  const handleConfirm = async () => {
    if (requireReason && !reason.trim()) return;

    try {
      setIsLoading(true);
      await onConfirm(reason);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}

        {requireReason && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Reason</label>
            <Textarea
              placeholder="Enter reason..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        )}

        <DialogFooter>
          <Button variant="ghost" onClick={onClose} disabled={isLoading}>
            Close
          </Button>

          <Button
            variant={variant}
            onClick={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </span>
            ) : (
              confirmText
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

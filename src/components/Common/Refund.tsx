'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeftRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useRefundMutation } from '../Redux/RTK/refundApi';

interface RefundButtonProps {
  orderId: string;
  orderType: 'delivery' | 'takeaway' | 'reservation' | 'catering';
  refundableAmount: number;
  refetch: () => void;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function RefundButton({
  orderId,
  orderType,
  refundableAmount,
  refetch,
  variant = 'outline',
  size = 'sm',
  className = '',
}: RefundButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [note, setNote] = useState('');
  const [refund] = useRefundMutation();

  const handleRefund = async () => {
    if (!note.trim()) {
      toast.error('Please provide a refund note');
      return;
    }

    setIsProcessing(true);

    try {
      const payload = {
        order_id: orderId,
        order_type: orderType,
        refundable_amount: refundableAmount,
        note: note.trim(),
      };

      // Replace with your actual refund API call
      const response = await refund(payload).unwrap();
      console.log(response, 'form dsdewe');

      if (response.statusCode === 200) {
        toast.success(response?.message || 'Refund processed successfully');
        setIsDialogOpen(false);
        setNote('');
        refetch();
      } else {
        toast.error(response?.message || 'Failed to process refund');
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message || 'Something went wrong');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={`text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 bg-transparent ${className}`}
          disabled={refundableAmount <= 0}
        >
          <ArrowLeftRight className="w-4 h-4 mr-2" />
          Refund
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Process Refund</DialogTitle>
          <DialogDescription>
            Refund amount:{' '}
            <span className="font-semibold">
              ${refundableAmount.toFixed(2)}
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="orderId" className="text-right">
              Order ID
            </Label>
            <Input
              id="orderId"
              value={orderId}
              className="col-span-3"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="orderType" className="text-right">
              Order Type
            </Label>
            <Input
              id="orderType"
              value={orderType}
              className="col-span-3 capitalize"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              value={`$${refundableAmount.toFixed(2)}`}
              className="col-span-3"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="note" className="text-right pt-2">
              Note *
            </Label>
            <Textarea
              id="note"
              placeholder="Enter refund reason..."
              value={note}
              onChange={e => setNote(e.target.value)}
              className="col-span-3"
              rows={3}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsDialogOpen(false)}
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            onClick={handleRefund}
            disabled={isProcessing || !note.trim()}
            className="bg-red-600 hover:bg-red-700"
          >
            {isProcessing && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Process Refund
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { generateInvoice } from '@/lib/generateInvoice';
import { Button } from '../ui/button';

export function InvoiceButton({ type, data }: any) {
  return (
    <Button
      size={'sm'}
      className="w-full border border-primary text-primary"
      variant="outline"
      onClick={() => generateInvoice({ type, data })}
    >
      Download Invoice
    </Button>
  );
}

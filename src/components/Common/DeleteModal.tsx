

"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface ConfirmationModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    loading?: boolean;
    onConfirm: () => void;
}

export const ConfirmationModal = ({
    open,
    onClose,
    title = "Delete Item",
    description = "Are you sure you want to delete this item? This action cannot be undone.",
    confirmText = "Yes, Delete!",
    cancelText = "No, Keep It.",
    loading = false,
    onConfirm,
}: ConfirmationModalProps) => {
    const handleCancelClick = () => {
        toast("Action cancelled. The item is safe 🙂", {
            icon: <CheckCircle className="w-5 h-5 text-green-600" />,
            duration: 4000,
        });
        onClose();
    };


    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-sm rounded-xl shadow-xl border border-gray-200 p-6 text-center">
                {/* Icon */}
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-red-100 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>

                <DialogHeader className="text-center space-y-2 mb-6">
                    <DialogTitle className="text-lg font-semibold text-center text-title">{title}</DialogTitle>
                    <DialogDescription className="text-sm text-center text-gray-600 mt-1">{description}</DialogDescription>
                </DialogHeader>

                {/* Buttons */}
                <div className="flex justify-center gap-3">
                    <Button
                        variant="outline"
                        onClick={handleCancelClick}
                        className="px-4 py-2"
                    >
                        {cancelText}
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={onConfirm}
                        disabled={loading}
                        className="px-4 py-2"
                    >
                        {loading ? "Deleting..." : confirmText}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

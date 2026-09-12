import { useState } from "react";
import { Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { site, vbucksPacks } from "@/lib/site";
import { cn } from "@/lib/utils";

type VbucksDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function VbucksDialog({ open, onOpenChange }: VbucksDialogProps) {
  const [selected, setSelected] = useState(2800);
  const [sent, setSent] = useState(false);
  const pack = vbucksPacks.find((p) => p.amount === selected) ?? vbucksPacks[1];

  function handleOpenChange(next: boolean) {
    if (!next) {
      window.setTimeout(() => setSent(false), 200);
    }
    onOpenChange(next);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[min(90dvh,40rem)] overflow-y-auto">
        {sent ? (
          <div className="flex flex-col items-center gap-4 py-2 text-center">
            <span className="flex size-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Check className="size-6" strokeWidth={2.5} />
            </span>
            <DialogHeader className="items-center pr-0">
              <DialogTitle>Request locked in</DialogTitle>
              <DialogDescription>
                {pack.label} V-Bucks. Websites cannot send real V-Bucks — a
                grown-up gifts them in Fortnite.
              </DialogDescription>
            </DialogHeader>
            <ol className="w-full space-y-3 rounded-lg bg-background p-4 text-left text-sm leading-relaxed">
              <li>
                <span className="font-medium text-foreground">1. Ask Grant</span>
                <p className="text-muted">
                  {site.epicName
                    ? `His Epic Games name is ${site.epicName}.`
                    : "Ask him for his Epic Games name."}
                </p>
              </li>
              <li>
                <span className="font-medium text-foreground">2. Add him</span>
                <p className="text-muted">
                  Send a friend request in Fortnite. Gifting only works for
                  friends.
                </p>
              </li>
              <li>
                <span className="font-medium text-foreground">3. Gift from the shop</span>
                <p className="text-muted">
                  Open the Item Shop, pick the V-Bucks pack, and send it to
                  Grant.
                </p>
              </li>
            </ol>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => handleOpenChange(false)}
            >
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Donate V-Bucks</DialogTitle>
              <DialogDescription>
                Pick a stack for Grant. A grown-up gifts it in Fortnite — this
                site cannot move real V-Bucks.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-2">
              {vbucksPacks.map((item) => {
                const active = item.amount === selected;
                return (
                  <button
                    key={item.amount}
                    type="button"
                    onClick={() => setSelected(item.amount)}
                    className={cn(
                      "flex min-h-20 flex-col items-start gap-1 rounded-md bg-background px-4 py-3 text-left transition-[box-shadow,background-color] duration-150",
                      active
                        ? "shadow-[inset_0_0_0_2px_var(--color-primary)]"
                        : "shadow-[inset_0_0_0_1px_var(--color-border)] hover:bg-foreground/5",
                    )}
                  >
                    <span className="font-display text-2xl leading-none tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-xs text-muted">{item.note}</span>
                  </button>
                );
              })}
            </div>
            <Button className="w-full" size="lg" onClick={() => setSent(true)}>
              <Gift />
              Donate {pack.label} V-Bucks
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

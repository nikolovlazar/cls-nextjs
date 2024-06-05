"use client";

import { onCLS } from "web-vitals";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ClsCard = () => {
  const [cls, setCls] = useState<number | undefined>();

  useEffect(() => {
    onCLS(
      (metric) => {
        setCls(metric.value);
      },
      { reportAllChanges: true },
    );
  }, []);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Measured CLS</CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle
          className={cn(
            "text-7xl max-w-full truncate",
            { "text-red-500": cls && cls > 0.25 },
            { "text-yellow-500": cls && cls >= 0.1 && cls <= 0.25 },
            { "text-green-500": (cls && cls < 0.1) || cls === 0 },
          )}
        >
          {cls?.toPrecision(2) ?? "..."}
        </CardTitle>
      </CardContent>
    </Card>
  );
};

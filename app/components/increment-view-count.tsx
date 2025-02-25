"use client";

import { useEffect } from "react";

type Props = {
  slug: string;
};

export const IncrementViewCount = ({ slug }: Props) => {
  useEffect(() => {
    const hasViewed = sessionStorage.getItem(slug);

    if (!hasViewed) {
      const updateView = async () => {
        await fetch(`/api/view-count`, {
          method: "POST",
          body: JSON.stringify({ slug }),
        });

        sessionStorage.setItem(slug, "true");
      };

      updateView();
    }
  }, [slug]);

  return null;
};

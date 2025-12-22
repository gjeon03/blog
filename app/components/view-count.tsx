import { getViewsCount } from "queries/db";

interface Props {
  slug: string;
}

export const ViewCount = async ({ slug }: Props) => {
  const views = await getViewsCount();
  const count = views.find((view) => view.slug === slug)?.count || 0;

  return (
    <span>
      {count.toLocaleString()} views
    </span>
  );
};

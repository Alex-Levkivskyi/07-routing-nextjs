import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
  queryOptions,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

interface FilteredNotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function FilteredNotesPage({
  params,
}: FilteredNotesPageProps) {
  const { slug } = await params;
  const rawTag = slug?.[0];
  const tag = rawTag && rawTag.toLowerCase() !== "all" ? rawTag : undefined;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    queryOptions({
      queryKey: ["notes", 1, "", tag ?? "all"],
      queryFn: () => fetchNotes({ page: 1, perPage: 12, search: "", tag }),
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}

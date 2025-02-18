import { BlocksTable } from "@/components/blocks-table";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { useBlockList } from "@/hooks/useBlocks";
import { useSearchParams } from "next/navigation";

export default function BlocksPageContent() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = 25;

  const { data: blocks, isLoading } = useBlockList(page, limit);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Blocks</h1>
        <div className="text-sm text-muted-foreground">
          More than {blocks?.metadata.total} blocks found
        </div>
      </div>

      <div className="border rounded-lg mb-4">
        <BlocksTable blocks={blocks?.data} isLoading={isLoading} />
      </div>

      <PaginationWithLinks
        page={page}
        pageSize={limit}
        totalCount={blocks?.metadata.total || 0}
      />
    </div>
  );
}

interface GetPaginationPagesProps {
  currentPage: number;
  totalPages: number;
  maxVisible?: number; // количество видимых цифр в центре (по умолчанию 5)
}

export function getPaginationPages({
  currentPage,
  totalPages,
  maxVisible = 5,
}: GetPaginationPagesProps): (number | "...")[] {
  const pages: (number | "...")[] = [];

  if (totalPages <= maxVisible + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  const startPages = [1] as (number | "...")[];
  const endPages = [totalPages];

  const siblings = Math.floor(maxVisible / 2);
  const left = Math.max(2, currentPage - siblings);
  const right = Math.min(totalPages - 1, currentPage + siblings);

  if (left > 2) startPages.push("...");
  for (let i = left; i <= right; i++) {
    pages.push(i);
  }
  if (right < totalPages - 1) pages.push("...");

  return [...startPages, ...pages, ...endPages];
}

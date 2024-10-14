export const filters = ["Cities", "Age"] as const;
export type FilterType = (typeof filters)[number];
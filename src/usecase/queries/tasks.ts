export const taskKeys = {
  all: () => [{ scope: 'tasks' }] as const,
  // lists: () => [...taskKeys.all(), 'list'] as const,
  // list: () => [...taskKeys.lists()] as const,
  list: () => [{ ...taskKeys.all()[0], entity: 'list' }] as const,
  // details: () => [...taskKeys.all(), 'detail'] as const,
  // detail: (id: number) => [...taskKeys.details(), id] as const,
  detail: (id: number) =>
    [{ ...taskKeys.all()[0], entity: 'detail', id }] as const,
};

export const SORT_OPTIONS = {
  name: {
    value: "name",
    label: "Name",
    compareFn: (a, b) => a.name.localeCompare(b.name),
  },

  rating: {
    value: "rating",
    label: "Rating",
    compareFn: (a, b) => b.rating - a.rating,
  },

  shipments: {
    value: "shipments",
    label: "Shipments",
    compareFn: (a, b) => b.shipments - a.shipments,
  },
};

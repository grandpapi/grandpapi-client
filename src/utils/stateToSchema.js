export default function stateToSchema(stateSchema) {
  return Object.values(stateSchema)
    .reduce((acc, current) => ({
      ...acc,
      ...current
    }), {});

}

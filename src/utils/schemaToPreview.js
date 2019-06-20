export default function schemaToPreview(Schema) {
  return Object.keys(Schema).map(key => {
    return `${key}:'${Schema[key]}'`;
  });
}

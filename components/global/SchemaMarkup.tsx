// XSS-safe JSON-LD injector. Escapes `<` so a malicious string like
// `</script><script>evil()` in any data field can't break out of the tag.
function safeJson(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c")
}

interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson(schema) }}
    />
  )
}

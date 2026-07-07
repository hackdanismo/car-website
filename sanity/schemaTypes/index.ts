import { type SchemaTypeDefinition } from "sanity"
import { NewsArticle } from "./newsArticle"

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [NewsArticle],
}

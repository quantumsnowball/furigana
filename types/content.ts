type ContentValue = {
  i: number,
  val: string
}
export type UuidItem = ContentValue
export type SourceItem = ContentValue
export type FuriganaItem = ContentValue
export type RomajiItem = ContentValue

export type Item = {
  uuid: string
}

export type Content = {
  source: string
  furigana: string
  romaji: string
  english: string
  chinese: string
}

export type ContentItem = Item & Content

export type ContentItems = ContentItem[]

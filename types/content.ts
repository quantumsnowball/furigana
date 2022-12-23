type ContentValue = {
  i: number,
  val: string
}
export type UuidItem = ContentValue
export type SourceItem = ContentValue
export type FuriganaItem = ContentValue
export type RomajiItem = ContentValue
export type EnglishItem = ContentValue
export type ChineseItem = ContentValue

export type Item = {
  uuid: string
}

export type ContentData = {
  source: string
  furigana: string
  romaji: string
  english: string
  chinese: string
}

export type ContentItem = Item & ContentData

export type ContentItems = ContentItem[]

export type Content = {
  title: string
  items: ContentItems
}

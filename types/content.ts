export type SourceItem = string
export type SourceItems = SourceItem[]
export type FuriganaItem = string
export type FuriganaItems = FuriganaItem[]
export type RomajiItem = string
export type RomajiItems = RomajiItem[]

export type Content = {
  source: SourceItems,
  furigana: FuriganaItems,
  romaji: RomajiItems,
}


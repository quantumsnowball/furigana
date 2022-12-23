export const formatedDate = (d: Date) => {
  const yyyy = d.getFullYear().toString().padStart(4, '0')
  const mm = d.getMonth().toString().padStart(2, '0')
  const dd = d.getDay().toString().padStart(2, '0')
  return `${yyyy}.${mm}.${dd}`
}

export const formatedTime = (d: Date) => {
  const hh = d.getHours().toString().padStart(2, '0')
  const mm = d.getMinutes().toString().padStart(2, '0')
  const ss = d.getSeconds().toString().padStart(2, '0')
  return `${hh}.${mm}.${ss}`
}

export const pathToName = (p: string) =>
  p[1].toUpperCase() + p.slice(2)


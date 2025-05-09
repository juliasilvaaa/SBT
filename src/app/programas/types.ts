// types.ts

export type ScheduleItem = {
  day: string // ex: 'segunda'
  time: string // ex: '14:00'
}

export type Programa = {
  title: string
  image: string
  description?: string
  slug: string
  schedule: ScheduleItem[] // ← obrigatório
}

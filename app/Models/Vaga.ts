import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Vaga extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public isBusy:boolean

  @column({ isPrimary: true })
  public description

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

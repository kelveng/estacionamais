import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vagas extends BaseSchema {
  protected tableName = 'vagas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("description")
      table.boolean("is_busy")  
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

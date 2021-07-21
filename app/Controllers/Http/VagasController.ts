import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VagasController {
  public async index ({response}: HttpContextContract) {
    response.status(200).json({message:"retorno vagas"})
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}

import bcrypt from 'bcrypt'

export const hashPassword = async(password: string) => {
    const salt= await bcrypt.genSalt(10)// mas saltos mejor seguridad pero menor velocidad
    return await bcrypt.hash(password,salt)

}
import Joi from '@hapi/joi';

export const signUpValidation = (data)=>{
    const schema = Joi.object({
        id: Joi.number(),
        first_name: Joi.string().alphanum().min(3).max(30).required(),
        last_name: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
        phoneNumber: Joi.string(),
        address: Joi.string()
    });
    return schema.validate(data)
}
export const signInValidation = (data)=>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    return schema.validate(data)
}
import Joi from '@hapi/joi';

const announcevalidation = (ads)=>{
    const schema = Joi.object({
        id: Joi.number(),
        text: Joi.string().required(),
        status: Joi.string()
    });
    return schema.validate(ads);
}
export default announcevalidation;
import Joi from '@hapi/joi';

const announcevalidation = (ads)=>{
    const schema = Joi.object({
        id: Joi.number(),
        text: Joi.string().required()
    });
    return schema.validate(ads);
}
export default announcevalidation;
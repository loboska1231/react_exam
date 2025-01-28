import * as Joi from "joi";


export const validForAuth = Joi.object({
    username: Joi.string().min(1).max(20).required(),
    password: Joi.string().min(1).max(20).required(),
    expiresInMins: Joi.number().min(1).max(60)
})
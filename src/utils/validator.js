import {validationResults} from 'express-validator'

const validator = (req, res, next) => {
    const errors = validationResults(req);
    if(!errors.isEmpty())
    return response.status(400).json({error:errors.array()})
    next()
}
export default validator;
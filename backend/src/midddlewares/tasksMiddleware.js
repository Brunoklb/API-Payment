const validateFieldTitle = (req, res, next)=>{
    const {body} = req;
    if(body.title === undefined){
        return res.status(400).json({mesage: 'The field "tittle" is not required'});
    }
    if(body.title === ''){
        return res.status(400).json({mesage: 'Tittle cannot be empty'});
    }
    next();
};

const validateFieldStatus = (req, res, next)=>{
    const {body} = req;
    if(body.status === undefined){
        return res.status(400).json({mesage: 'The field "tittle" is not required'});
    }
    if(body.status === ''){
        return res.status(400).json({mesage: 'Tittle cannot be empty'});
    }
    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
};
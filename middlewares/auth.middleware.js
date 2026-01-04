    const jwt = require('jsonwebtoken');
    const ENV = require('../config/env');

    const authMiddleware = (req, res, next) => {
    try {
        // 1️ Récupérer le token (cookie OU header)
        const token =
        req.cookies?.token ||
        req.headers.authorization?.split(' ')[1];

        // 2️ Vérifier présence du token
        if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
        }

        // 3️ Vérifier et décoder le token
        const decoded = jwt.verify(token, ENV.JWT_SECRET);

        // 4️ Injecter l'utilisateur dans la requête
        req.user = {
        id: decoded.id,
        username: decoded.username
        };

        // 5️ Continuer
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
    };

    module.exports = authMiddleware;

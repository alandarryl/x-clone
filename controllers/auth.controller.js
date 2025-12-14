    const bcrypt = require('bcrypt');
    const User = require('../models/user.model');

    exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 1. Validation simple
        if (!username || !email || !password) {
        return res.status(400).json({ message: 'Tous les champs sont requis' });
        }

        if (password.length < 6) {
        return res.status(400).json({ message: 'Mot de passe trop court' });
        }

        // 2. Vérifier si utilisateur existe
        const existingUser = await User.findOne({
        $or: [{ email }, { username }],
        });

        if (existingUser) {
        return res.status(409).json({
            message: 'Email ou nom d’utilisateur déjà utilisé',
        });
        }

        // 3. Hash du mot de passe
        const password_hash = await bcrypt.hash(password, 12);

        // 4. Création utilisateur
        const user = await User.create({
        username,
        email,
        password_hash,
        });

        // 5. Réponse (sans mot de passe)
        res.status(201).json({
        message: 'Inscription réussie',
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
    };

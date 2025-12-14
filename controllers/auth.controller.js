    const bcrypt = require('bcrypt');
    const User = require('../models/user.model');
    const jwt = require('jsonwebtoken');
    const ENV = require('../config/env');

    const register = async (req, res) => {
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
        const password_hash = await bcrypt.hash(password, 10);

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


        const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Validation
        if (!email || !password) {
        return res.status(400).json({ message: 'Email et mot de passe requis' });
        }

        // 2. Vérifier si utilisateur existe
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        // 3. Vérifier mot de passe
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
        return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // 4. Générer JWT
        const payload = { id: user._id, username: user.username };
        const token = jwt.sign(payload, ENV.JWT_SECRET, { expiresIn: '1d' });

        // 5. Répondre + cookie HttpOnly
        res
        .cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000, // 1 jour
        })
        .status(200)
        .json({
            message: 'Login réussi',
            user: {
            id: user._id,
            username: user.username,
            email: user.email,
            },
        });
    } catch (error) {
        console.error('LOGIN ERROR:', error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
    };


    module.exports = {
    register,
    login,
    };




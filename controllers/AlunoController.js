const alunoService = require("../services/AlunoService");

async function listarAlunos(req, res) {
    try {
        const listarAlunos = await alunoService.listarAlunos();
        return res.status(200).json(listarAlunos);
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

async function listarAlunoId(req, res) {
    try {
        const listarAlunoId = await alunoService.listarAlunoId(req.params.id);
        
        if (!listarAlunoId) {
            return res.sendStatus(404);
        }

        return res.status(200).json(listarAlunoId);

    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

async function cadastrarAluno(req, res) {
    try {
        const cadastroAluno = await alunoService.cadastrarAluno(req.body);

        if (!cadastroAluno) {
            return res.sendStatus(400);
        }
        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

async function deletarAluno(req, res) {
    try {
        const deletAluno = await alunoService.deletarAluno(req.params.id);
        if (!deletAluno) {
            return res.sendStatus(404);
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

async function atualizarAluno(req, res) {
    try {
        const atualizandoAluno = await alunoService.atualizarAluno(req.body, req.params.id);
        if (!atualizandoAluno) {
            return res.sendStatus(404)
        }

        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

module.exports = {
    atualizarAluno,
    cadastrarAluno,
    deletarAluno,
    listarAlunoId,
    listarAlunos
}
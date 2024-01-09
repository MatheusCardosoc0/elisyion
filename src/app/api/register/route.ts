import prisma from '@/libs/prismadb'; // Ajuste o caminho para o seu arquivo Prisma
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') {
        try {
            const { username, email, password } = await req.json();

            // Validação básica
            if (!username || !email || !password) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
            }

            // Criptografar a senha
            const hashedPassword = await bcrypt.hash(password, 10);

            // Criar usuário no banco de dados
            const user = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hashedPassword,
                },
            });

            // Retornar usuário criado (sem enviar a senha)
            return res.status(201).json({ id: user.id, username: user.username, email: user.email });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar usuário' });
        }
    } else {
        // Método não suportado
        res.setHeader('Allow', 'POST');
        res.status(405).end('Método não permitido');
    }
}

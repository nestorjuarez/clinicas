import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

interface UserPayload {
  userId: number;
}

async function getAdminUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
    const admin = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    return admin && admin.role === 'ADMIN' ? admin : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 403 });
  }

  try {
    const { name, email, password, officeAddress, city, specialties } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Nombre, email y contraseña son obligatorios' }, { status: 400 });
    }

    // Verificar si el email ya existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: 'Ya existe un usuario con este correo electrónico' }, { status: 409 });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el profesional
    const newProfessional = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'PROFESIONAL',
        officeAddress,
        city,
        specialties: {
          connect: specialties?.map((id: number) => ({ id })) || [],
        },
      },
      include: {
        specialties: true,
      },
    });

    return NextResponse.json(newProfessional, { status: 201 });
  } catch (error) {
    console.error('Error al crear profesional:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 403 });
  }

  try {
    const { id, name, email, password, officeAddress, city, specialties } = await request.json();

    if (!id || !name || !email) {
      return NextResponse.json({ message: 'ID, nombre y email son obligatorios' }, { status: 400 });
    }

    // Verificar que el profesional existe
    const existingProfessional = await prisma.user.findFirst({
      where: { id, role: 'PROFESIONAL' },
    });

    if (!existingProfessional) {
      return NextResponse.json({ message: 'Profesional no encontrado' }, { status: 404 });
    }

    // Verificar si el email ya existe en otro usuario
    const emailExists = await prisma.user.findFirst({
      where: { 
        email, 
        id: { not: id } 
      },
    });

    if (emailExists) {
      return NextResponse.json({ message: 'Ya existe un usuario con este correo electrónico' }, { status: 409 });
    }

    // Preparar los datos de actualización
    const updateData: any = {
      name,
      email,
      officeAddress,
      city,
      specialties: {
        set: [], // Limpiar especialidades existentes
        connect: specialties?.map((specialtyId: number) => ({ id: specialtyId })) || [],
      },
    };

    // Solo actualizar la contraseña si se proporciona
    if (password && password.trim() !== '') {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    // Actualizar el profesional
    const updatedProfessional = await prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        specialties: true,
      },
    });

    return NextResponse.json(updatedProfessional, { status: 200 });
  } catch (error) {
    console.error('Error al actualizar profesional:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}

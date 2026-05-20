import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

// POST /api/appointments — Create a new appointment
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, doctor, service, date, time, notes } = body;

    // Validation
    if (!name || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, service, date, time' },
        { status: 400 }
      );
    }

    const appointment = await prisma.appointment.create({
      data: {
        name,
        phone,
        email:   email   || null,
        doctor:  doctor  || 'No Preference',
        service,
        date,
        time,
        notes:   notes   || null,
        status:  'PENDING',
      },
    });

    return NextResponse.json(
      { success: true, appointment },
      { status: 201 }
    );
  } catch (error) {
    console.error('[POST /api/appointments]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/appointments — List all appointments (admin use)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const date   = searchParams.get('date');

    const appointments = await prisma.appointment.findMany({
      where: {
        ...(status ? { status: status as any } : {}),
        ...(date   ? { date }                  : {}),
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ appointments });
  } catch (error) {
    console.error('[GET /api/appointments]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

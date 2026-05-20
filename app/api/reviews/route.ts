import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

// POST /api/reviews — Submit a patient review
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, area, rating, text } = body;

    if (!name || !text) {
      return NextResponse.json(
        { error: 'Name and review text are required' },
        { status: 400 }
      );
    }

    const review = await prisma.review.create({
      data: {
        name,
        area:   area   || null,
        rating: rating ? Number(rating) : 5,
        text,
        approved: false, // needs manual approval
      },
    });

    return NextResponse.json({ success: true, review }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/reviews]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET /api/reviews — Get approved reviews
export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      where: { approved: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('[GET /api/reviews]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

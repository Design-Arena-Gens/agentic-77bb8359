import { NextRequest, NextResponse } from 'next/server';
import { readContent, writeContent } from '@/lib/content';

export async function GET() {
  const content = readContent();
  return NextResponse.json(content);
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = writeContent(body);
    return NextResponse.json(updated);
  } catch (e) {
    return new NextResponse('Invalid JSON', { status: 400 });
  }
}

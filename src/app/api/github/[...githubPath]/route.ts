
// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest, context: { params: { githubPath : string[] } }) {
    const res = await fetch(`https://raw.githubusercontent.com/${context.params.githubPath.join('/')}`);
    return res;
}

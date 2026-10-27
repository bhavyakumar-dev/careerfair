import { json, parseJson, originAllowed } from '../_shared.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
  }

  if (request.method !== 'POST') {
    return json({ error: 'POST method required.' }, 405);
  }

  const body = await parseJson(request);
  if (!body || !body.text || !body.target) {
    return json({ error: 'Both text and target are required.' }, 400);
  }

  const text = String(body.text).slice(0, 1000).trim();
  const target = String(body.target).slice(0, 1000).trim();

  // Try Cloudflare Workers AI embedding model if binding available
  if (env.AI) {
    try {
      const response = await env.AI.run('@cf/baai/bge-small-en-v1.5', {
        text: [text, target]
      });
      if (response?.data && response.data.length >= 2) {
        const [a, b] = response.data;
        let dot = 0, normA = 0, normB = 0;
        for (let i = 0; i < a.length; i++) {
          dot += a[i] * b[i];
          normA += a[i] * a[i];
          normB += b[i] * b[i];
        }
        const similarity = dot / (Math.sqrt(normA) * Math.sqrt(normB) + 1e-8);
        return json({
          similarity: Math.max(0, Math.min(1, similarity)),
          provider: 'cloudflare-bge'
        });
      }
    } catch (err) {
      // Fall through to lexical calculation
    }
  }

  // Robust tokenized semantic fallback (Jaccard + subword overlap)
  const tokenize = s => (s.toLowerCase().match(/[a-z0-9]+/g) || []);
  const stem = w => w.slice(0, 5);
  const t1 = tokenize(text).map(stem);
  const t2 = tokenize(target).map(stem);
  const s1 = new Set(t1);
  const s2 = new Set(t2);

  let hits = 0;
  s1.forEach(w => {
    if (s2.has(w)) hits++;
  });

  const denominator = Math.sqrt(Math.max(1, s1.size * s2.size));
  const lexicalScore = Math.min(1, (hits / denominator) * 1.25);

  return json({
    similarity: Math.max(0.15, Math.min(0.99, Number(lexicalScore.toFixed(3)))),
    provider: 'lexical-fallback'
  });
}

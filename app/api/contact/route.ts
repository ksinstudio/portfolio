import { NextResponse } from "next/server";

// Contact form handler.
//
// To actually deliver messages: create a free access key at https://web3forms.com
// (just enter your email — messages get forwarded there), then set the env var
// WEB3FORMS_ACCESS_KEY in Vercel (Project → Settings → Environment Variables).
// No key set = the form returns a clear "not configured" message.

export async function POST(req: Request) {
  let data: { name?: string; email?: string; message?: string };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      {
        error:
          "Email delivery isn't configured yet. Set WEB3FORMS_ACCESS_KEY to enable it.",
      },
      { status: 501 }
    );
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New portfolio message from ${name}`,
        name,
        email,
        message,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Couldn't send right now — please email me directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Network error — please email me directly." },
      { status: 502 }
    );
  }
}

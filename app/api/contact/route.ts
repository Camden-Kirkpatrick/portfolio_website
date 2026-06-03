import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse JSON body
    const { name, email, subject, message, website } = await request.json();

    if (website)
    {
        // Bot detected. Return a fake success so they think it worked.
        return Response.json({ ok: true });
    }

    // Validate
    if (!name || !email || !subject || !message)
    {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Send the email
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'camdenckirkpatrick@gmail.com',
      subject: `New message: ${subject}`,
      replyTo: email,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error)
    {
      return Response.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return Response.json({ ok: true });
  }

  catch
  {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
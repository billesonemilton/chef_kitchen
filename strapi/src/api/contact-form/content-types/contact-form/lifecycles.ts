export default {
  async afterCreate(event) {
    console.log('🔥🔥🔥 LIFECYCLE TRIGGERED! 🔥🔥🔥');
    const { result } = event;

    try {
      console.log('Attempting to send email...');
      await strapi.plugins['email'].services.email.send({
        to: 'miltonsone12@gmail.com',
        from: process.env.SMTP_USERNAME,
        subject: `New Contact Form Submission from ${result.name}`,
        text: `
          You have a new contact form submission:

          Name: ${result.name}
          Email: ${result.email}
          Phone: ${result.phone || 'Not provided'}
          Event Type: ${result.eventType || 'Not specified'}
          Message: ${result.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${result.name}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Phone:</strong> ${result.phone || 'Not provided'}</p>
          <p><strong>Event Type:</strong> ${result.eventType || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${result.message}</p>
        `,
      });
      console.log('✅ Email notification sent successfully');
    } catch (err) {
      console.error('❌ Error sending email:', err);
    }
  },
};
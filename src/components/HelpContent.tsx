import React from 'react';

interface HelpContentProps {
  activeTopic: string;
}

const HelpContent: React.FC<HelpContentProps> = ({ activeTopic }) => {
  const content = {
    'getting-started': (
      <>
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <p>Welcome to our Help Center! Here's how to get started:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Create an account</li>
          <li>Set up your profile</li>
          <li>Explore our features</li>
        </ul>
      </>
    ),
    'user-guide': (
      <>
        <h2 className="text-2xl font-bold mb-4">User Guide</h2>
        <p>Our comprehensive user guide covers the following topics:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Account management</li>
          <li>Using the dashboard</li>
          <li>Advanced features</li>
        </ul>
      </>
    ),
    'faq': (
      <>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <dl>
          <dt className="font-semibold mt-2">How do I reset my password?</dt>
          <dd>You can reset your password by clicking on the "Forgot Password" link on the login page.</dd>
          <dt className="font-semibold mt-2">Can I change my username?</dt>
          <dd>Yes, you can change your username in your account settings.</dd>
        </dl>
      </>
    ),
    'contact-support': (
      <>
        <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
        <p>If you need further assistance, please don't hesitate to contact our support team:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Email: support@example.com</li>
          <li>Phone: 1-800-123-4567</li>
          <li>Live Chat: Available 24/7 on our website</li>
        </ul>
      </>
    ),
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {content[activeTopic as keyof typeof content]}
    </div>
  );
};

export default HelpContent;
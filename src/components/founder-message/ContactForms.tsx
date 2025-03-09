
import React from 'react';
import IdeaSubmissionForm from './IdeaSubmissionForm';
import NewsletterForm from './NewsletterForm';

const ContactForms = () => {
  return (
    <div className="mt-10 bg-enabler-50 p-6 rounded-lg border border-enabler-100">
      <div className="grid md:grid-cols-2 gap-8">
        {/* アイデア投稿フォーム */}
        <div>
          <IdeaSubmissionForm />
        </div>

        {/* Newsletter Signup Form */}
        <div>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default ContactForms;

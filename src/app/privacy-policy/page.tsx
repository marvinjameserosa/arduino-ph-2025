import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="overflow-x-hidden relative max-w-4xl mx-auto p-6 space-y-6 text-white">
      {/* Mobile glow */}
      <div className="z-0 sm:hidden">
				<div className="orange-blur h-[120px] w-[180px] absolute rounded-full top-[65%] -left-8 md:h-[300px] md:w-[300px] md:left-[-5%]"></div>
				<div className="yellow-blur h-[120px] w-[180px] absolute rounded-full top-[78%] md:top-[70%] left-2 md:h-[250px] md:w-[300px] md:left-12"></div>
				<div className="blue-blur h-[150px] w-[180px] absolute rounded-full top-[86%] md:top-[90%] left-4 md:left-48 md:h-[260px] md:w-[230px]"></div>
			</div>
			<div className="z-0 sm:hidden">
				<div className="orange-blur h-[120px] w-[180px] absolute rounded-full top-[10%] -right-4 md:right-32 md:h-[300px] md:w-[300px]"></div>
				<div className="yellow-blur h-[120px] w-[180px] absolute rounded-full top-[30%] -right-8 md:right-12 md:h-[250px] md:w-[300px]"></div>
				<div className="blue-blur h-[150px] w-[180px] absolute rounded-full top-[50%]  -right-16 md:-right-4 md:h-[260px] md:w-[230px]"></div>
			</div>

      {/* Back button */}
      <Link href="/" className="flex items-center text-gray-600 hover:underline">
        <ArrowLeft className="mr-2" />
      </Link>

      <Image
        src="/assets/logo.png"
        alt="Logo"
        width={250}
        height={250}
        className="hidden sm:block object-cover mx-auto"
        />

      <Image
        src="/assets/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="block sm:hidden object-cover mx-auto"
        />
      <h1 className="text-2xl font-bold text-[#00878F] text-center">Privacy Policy for Arduino Day Philippines 2025 Attendees</h1>
      <p className="text-sm text-center text-white">Effective Date: March 5, 2025</p>



      <p>
        Thank you for registering for Arduino Day Philippines 2025. We are committed to protecting your privacy and ensuring that your personal information is handled in a secure and responsible manner. This Privacy Policy outlines how we collect, use, store, and protect your personal data. By registering for Arduino Day Philippines 2025, you agree to the terms outlined in this policy.
      </p>

      <section>
        <h2 className="text-xl sm:text-2xl  font-semibold">Data Collection</h2>
        <p>As a registered participant, we collect the following personal information:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Organization/Company Name (if applicable)</li>
          <li>Any other information you provide during registration (such as preferences or special requests)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold">Use of Data</h2>
        <p>The personal data we collect will be used for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>To manage and process your registration for Arduino Day Philippines 2025.</li>
          <li>To communicate with you about event details, updates, and important announcements related to the event.</li>
          <li>To enhance your experience during the event and provide relevant services.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl  font-semibold">Marketing Purposes</h2>
        <p>
          By agreeing to this Privacy Policy during the registration process, you also acknowledge and consent that your personal data may be used for marketing purposes by Arduino Day Philippines and its event partners. This includes sending you information about upcoming events, promotions, and updates related to Arduino Day Philippines and affiliated partners. You may receive communications via email, phone, or other communication channels.
        </p>
        <p>
          If you do not wish to receive marketing communications, you can opt-out by following the unsubscribe instructions provided in each communication or by contacting us at <a href="mailto:arduinodayph@gmail.com" className="text-blue-500">arduinodayph@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl  font-semibold">Data Sharing</h2>
        <p>
          Your personal information may be shared with event partners and sponsors for the purpose of facilitating the event, offering services, and communicating with you. We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl  font-semibold">Data Security</h2>
        <p>
          We take the protection of your personal information seriously and have implemented appropriate security measures to protect against unauthorized access, alteration, or disclosure of your personal data. However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl  font-semibold">Data Retention</h2>
        <p>
          We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy and to comply with legal obligations. Once your data is no longer required, it will be securely deleted.
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl  font-semibold">Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access and correct your personal data.</li>
          <li>Request the deletion of your personal information (subject to certain conditions).</li>
          <li>Withdraw your consent to the use of your data for marketing purposes at any time.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at <a href="mailto:arduinodayph@gmail.com" className="text-blue-500">arduinodayph@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-x sm:text-2xl  font-semibold">Changes to the Privacy Policy</h2>
        <p>
          Arduino Day Philippines reserves the right to update or amend this Privacy Policy at any time. Any changes will be communicated to you through the contact information provided during registration. By continuing to participate in the event, you acknowledge and accept any modifications to this Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl  font-semibold">Contact Information</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy, or if you wish to withdraw your consent or update your information, please contact us at:
        </p>
        <p>Email: <a href="mailto:arduinodayph@gmail.com" className="text-blue-500">arduinodayph@gmail.com</a></p>
      </section>

      <p>
        By registering for Arduino Day Philippines 2025, you confirm that you have read and agree to this Privacy Policy.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
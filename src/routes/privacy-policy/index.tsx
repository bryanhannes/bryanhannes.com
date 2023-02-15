import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="container mx-auto leading-7 my-8">
        <h1 class={`text-3xl mb-4`}>Privacy Policy for bryanhannes.com</h1>

        <p>
          At bryanhannes.com, we are committed to protecting your privacy and
          complying with the General Data Protection Regulation (GDPR). This
          privacy policy explains how we collect, use, and protect your personal
          information.
        </p>

        <h2 class={`text-2xl my-4`}>Information We Collect</h2>

        <p>
          When you visit our website, we may collect certain information about
          your visit, including your IP address, browser type, operating system,
          and the pages you visit. This information is collected through Google
          Analytics, which helps us improve our website and understand how users
          interact with it. We rely on our legitimate interest in analyzing user
          behavior and improving our website to process this data.
        </p>

        <p>
          In addition, we may collect your email address if you choose to opt-in
          to our newsletter or other email communications. We will only use this
          information to send you the communications you have requested, and you
          may opt-out of these communications at any time. We rely on your
          consent to process your email address for this purpose.
        </p>

        <h2 class={`text-2xl my-4`}>Use of Information</h2>

        <p>
          We use the information we collect to improve our website and provide a
          better user experience. This includes analyzing how users interact
          with our website, identifying trends and patterns, and making changes
          to improve the user experience. We rely on our legitimate interest in
          providing a high-quality service to our users to process this data.
        </p>

        <p>
          We will never sell, trade, or otherwise transfer your personal
          information to any third party, unless required by law or to protect
          our rights or property. We rely on our legitimate interest in
          protecting our business to process this data.
        </p>

        <h2 class={`text-2xl my-4`}>Security</h2>

        <p>
          We take the security of your personal information seriously and use
          reasonable measures to protect it from unauthorized access,
          disclosure, or misuse. However, no security measure is foolproof, and
          we cannot guarantee the security of your information.
        </p>

        <h2 class={`text-2xl my-4`}>Cookies</h2>

        <p class={`mb-2`}>
          Our website uses cookies to enhance the user experience. You can
          choose to disable cookies in your browser settings, but this may
          affect your ability to use certain features of our website. Our
          website uses the following types of cookies:
        </p>

        <ul>
          <li>
            <p>
              <strong>Tracking and Performance Cookies</strong>
            </p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Third-Parties</p>
            <p>
              Purpose: These Cookies are used to track information about traffic
              to the Website and how users use the Website. The information
              gathered via these Cookies may directly or indirectly identify you
              as an individual visitor. This is because the information
              collected is typically linked to a pseudonymous identifier
              associated with the device you use to access the Website. We may
              also use these Cookies to test new pages, features or new
              functionality of the Website to see how our users react to them.
            </p>
          </li>
        </ul>

        <h2 class={`text-2xl my-4`}>Your Rights</h2>

        <p>
          Under GDPR, you have the right to access, rectify, and erase your
          personal information, as well as the right to restrict or object to
          its processing. You also have the right to data portability and to
          withdraw your consent at any time. To exercise these rights or for any
          questions or concerns about our privacy policy, please contact us at
          hello@bryanhannes.com.
        </p>

        <h2 class={`text-2xl my-4`}>Updates to the Privacy Policy</h2>

        <p>
          We may update this privacy policy from time to time, and we will post
          the updated version on our website. We encourage you to check our
          website regularly for updates.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy | bryanhannes.com",
  meta: [
    {
      name: "description",
      content:
        "Privacy Policy of bryanhannes.com. This privacy policy explains how we collect, use, and protect your personal information.",
    },
  ],
};

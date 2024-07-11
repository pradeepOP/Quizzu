import React from "react";

const FAQ = () => {
  return (
    <div className="faq-section mx-auto container p-4">
      <h1 className="text-3xl font-semibold mb-8">
        Frequently Asked Questions
      </h1>

      <div className="faq-item mb-6">
        <h2 className="text-2xl font-semibold">1. What is this Quizu App?</h2>
        <p className="mt-2">
          This Quizu App is a platform where users can take various quizzes on
          different topics. You can test your knowledge, improve your skills,
          and track your progress over time.
        </p>
      </div>

      <div className="faq-item mb-6">
        <h2 className="text-2xl font-semibold">2. How do I sign up?</h2>
        <p className="mt-2">
          You can sign up by clicking on the &quot;Register&quot; button on the
          top right corner of the homepage. Fill in the required details and
          submit the form to create your account.
        </p>
      </div>

      <div className="faq-item mb-6">
        <h2 className="text-2xl font-semibold">3. How do I take a quiz?</h2>
        <p className="mt-2">
          After logging in, you can browse the available quizzes by category.
          Select the quiz you want to take, and click the &quot;Start Quiz&quot;
          button. Follow the on-screen instructions to answer the questions.
        </p>
      </div>

      <div className="faq-item mb-6">
        <h2 className="text-2xl font-semibold">
          4. How is my score calculated?
        </h2>
        <p className="mt-2">
          Your score is calculated based on the number of correct answers you
          provide. Each correct answer gives you points, and your total score is
          the sum of all points earned.
        </p>
      </div>

      <div className="faq-item mb-6">
        <h2 className="text-2xl font-semibold">5. Can I retake a quiz?</h2>
        <p className="mt-2">
          Yes, you can retake any quiz as many times as you like. Your highest
          score will be recorded, and you can track your improvement over time.
        </p>
      </div>

      <div className="faq-item mb-6">
        <h2 className="text-2xl font-semibold">
          6. How do I view my quiz history?
        </h2>
        <p className="mt-2">
          You can view your quiz history by going to your profile page. There,
          you will see a list of all the quizzes you have taken, along with your
          scores and other details.
        </p>
      </div>

      <div className="faq-item mb-6">
        <h2 className="text-2xl font-semibold">
          7. Can I create my own quizzes?
        </h2>
        <p className="mt-2">
          Currently, only administrators can create quizzes. However, we are
          working on a feature that will allow users to create and share their
          own quizzes.
        </p>
      </div>

      <div className="faq-item mb-6">
        <h2 className="text-2xl font-semibold">8. How do I contact support?</h2>
        <p className="mt-2">
          If you need any help or have any questions, you can contact our
          support team by clicking on the &quot;Contact Us&quot; link at the
          bottom of the page. Fill in the form, and we will get back to you as
          soon as possible.
        </p>
      </div>
    </div>
  );
};

export default FAQ;

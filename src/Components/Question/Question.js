import React from "react";
import { Accordion } from "react-bootstrap";

const Question = () => {
  return (
    <div className="container my-5 ">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>How does react work?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <h4>
              সবচেয়ে জনপ্রিয় জাভাস্ক্রিপ্ট লাইব্রেরি ডিক্লারেটিভ কোড ব্যবহার করে কোড চালায় এবং
              এক্সিকিউট করে। React ডেটা সঞ্চয় করার জন্য UsesState ব্যবহার করে যাতে আমরা দক্ষতার
              সাথে DOM কে পুনরায় রেন্ডার করতে পারি। react এ যখন কিছু চেঞ্জ করা হয় তখন সাথে সাথে
              একটি ভার্চুয়াল dom তৈরী করে। এবং আগের dom এর সাথে নতুন dom এর compare করে diff
              algorithm এর মাধ্যমে দেখে যে কি কি চেঞ্জ হয়েছে। তখন যে গুলো চেঞ্জ হয়েছে তখন সেই গুলো
              চেঞ্জ করে। ফলে খুব তারাতারি রেস্পন্স পাওয়া যায়, পরিবর্তনগুলি দ্রুত সনাক্ত করা যায়.
              এবং এর মাধ্যমে কোড অনেক ছোট হয় । একই রকম কোড বার বার লিখার প্রয়োজন হয় না ।{" "}
            </h4>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>Props VS state</h4>
          </Accordion.Header>
          <Accordion.Body>
            <h4>
              props এক উপাদান থেকে অন্য উপাদানে ডেটা প্রেরণ করতে ব্যবহৃত হয়। state হল একটি স্থানীয়
              ডেটা সঞ্চয়স্থান যা শুধুমাত্র উপাদানগুলির জন্য স্থানীয় এবং অন্যান্য উপাদানগুলিতে
              প্রেরণ করা যায় না। যখন কোনো কিছু বা কোনো ডাটা চেঞ্জ করা হয় বা যেগুলো জাভাস্ক্রিপ্ট এর
              কাজ নয় যেমন বাইরে থেকে ডাটা নিয়ে আসা ইত্যাদি এই গুলোর জন্য state ব্যবহার করা হয়। Props
              একটি কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে অ্যাট্রিবিউট বা key হিসেবে পাস করা হয় এবং
              স্টেটকে কার্যকরী কম্পোনেন্টে useState হুক ব্যবহার করে ঘোষণা করা যেতে পারে।{" "}
            </h4>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>How to work useState?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <h4>
              যখন কোনো ইউজার ব্রাউজারে কোনো কিছু চেঞ্জ করে বা ইন্টার‍্যাক্ট করে তখন ব্রাউজার কে
              বুঝানোর জন্য useState ব্যবহার করা হয় ।
            </h4>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Question;

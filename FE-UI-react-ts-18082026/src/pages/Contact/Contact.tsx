import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Textarea from "../../components/common/Textarea";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);

    alert("Message submitted successfully!");
  };

  return (
    <section className="mx-auto max-w-2xl px-5 py-20">
      <h1 className="mb-3 text-4xl font-bold">Contact Us</h1>

      <p className="mb-8 text-gray-500">Have a question? Send us a message.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Name"
          name="name"
          placeholder="Enter your name"
          required
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <Textarea
          label="Message"
          name="message"
          placeholder="Enter your message"
          required
        />

        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </form>
    </section>
  );
}

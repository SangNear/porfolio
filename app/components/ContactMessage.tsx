import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderIcon, SendIcon } from "lucide-react";
import ConfirmMessage from "./ConfirmMessage";

const ContactMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const isFormValid = formData.name && formData.email && formData.message;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the corresponding field
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      const result = await fetch("/api/message", {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json", // Specify JSON content
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      const data = await result.json(); // Parse the response

      if (data.success) {
        if (data.success) {
          setShowConfirmMessage(true); // Show confirmation message
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSending(false);
    }
  };

  if (showConfirmMessage) {
    return <ConfirmMessage />; // Render confirmation message if successful
  }

  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        className="form-control"
      >
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </motion.div>
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        className="form-control"
      >
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </motion.div>
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        className="form-control"
      >
        <Textarea
          name="message"
          placeholder="Type your message here."
          value={formData.message}
          onChange={handleChange}
        />
      </motion.div>
      <Button
        type="submit"
        className="flex items-center gap-2"
        variant="secondary"
        disabled={!isFormValid || sending}
      >
        {sending ? (
          <LoaderIcon className="animate-spin text-black" />
        ) : (
          <div className="flex items-center gap-2">
            <SendIcon /> <span>Send message</span>
          </div>
        )}
      </Button>
    </form>
  );
};

export default ContactMessage;

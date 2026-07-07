import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useId, useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project's complexity. A simple business website usually takes 1–2 weeks, while larger websites and custom web applications can take 4–8 weeks.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the number of pages, features, and project requirements. We provide transparent quotations after understanding your needs, ensuring you receive the best value for your investment.",
  },
  {
    question: "How can I connect with the team?",
    answer:
      "You can reach out to us through our contact form, email, phone, or social media. Once we receive your inquiry, we'll schedule a free consultation to understand your requirements, discuss your vision, and guide you through the next steps.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer ongoing maintenance, security updates, performance optimization, bug fixes, and technical support to keep your website running efficiently.",
  },
  {
    question: "Can you add custom features to my website?",
    answer:
      "Yes. We develop custom solutions such as authentication systems, dashboards, booking systems, payment gateways, AI features, APIs, databases, and other business-specific functionalities.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-4 inline-flex rounded-full bg-[#e8702a]/10 p-3"
            aria-hidden="true"
          >
            <HelpCircle
              className="h-8 w-8 text-[#e8702a]"
              aria-hidden="true"
            />
          </motion.div>
          <h2 className="mb-4 text-3xl font-playfair font-normal italic tracking-tight text-white sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-white/60 sm:text-base md:text-lg max-w-lg mx-auto">
            Everything you need to know about our services and process
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const questionId = `${baseId}-question-${index}`;
            const answerId = `${baseId}-answer-${index}`;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-colors duration-200 hover:bg-white/[0.04]">
                  {/* Card Header Equivalent */}
                  <div className="p-5 sm:p-6">
                    <motion.button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white/70"
                      whileHover={{ x: 4 }}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      id={questionId}
                    >
                      <span className="text-base sm:text-lg font-medium text-white/90">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                        className="ml-4 flex-shrink-0"
                      >
                        <ChevronDown className="h-5 w-5 text-white/60" />
                      </motion.div>
                    </motion.button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        role="region"
                        id={answerId}
                        aria-labelledby={questionId}
                      >
                        {/* Card Content Equivalent */}
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/[0.02]">
                          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
